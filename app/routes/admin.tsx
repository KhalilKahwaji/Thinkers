import React, { useEffect, useMemo, useState } from "react";
import { supabase } from "~/lib/supabaseClient";

export const handle = { layout: "blank" } as const;

type FormState = {
  title: string;
  branch: string;
  dateStartISO: string; // datetime-local
  doorsISO: string;     // datetime-local
  priceUSD: string;
  rsvpPhone: string;
  ticketsUrl: string;
  mapsQuery: string;
  description: string;
  tags: string; // comma-separated
};

function slugify(s: string) {
  return s
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function rand4() {
  const arr = new Uint32Array(1);
  crypto.getRandomValues(arr);
  return (arr[0] % 10000).toString().padStart(4, "0");
}

export default function Admin() {
  const [session, setSession] = useState<any>(null);
  const [status, setStatus] = useState<string>("");

  // login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // form
  const [form, setForm] = useState<FormState>({
    title: "",
    branch: "Zahle",
    dateStartISO: "",
    doorsISO: "",
    priceUSD: "0",
    rsvpPhone: "",
    ticketsUrl: "",
    mapsQuery: "",
    description: "",
    tags: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  async function signIn(e: React.FormEvent) {
    e.preventDefault();
    setStatus("Signing in...");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setStatus(`❌ ${error.message}`);
    setStatus("✅ Signed in");
  }

  async function signOut() {
    await supabase.auth.signOut();
    setStatus("Signed out.");
  }

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((p) => ({ ...p, [key]: value }));
  }

  async function createEvent(e: React.FormEvent) {
    e.preventDefault();
    setStatus("");

    if (!session) return setStatus("❌ Not signed in.");
    if (!form.title.trim()) return setStatus("❌ Title is required.");
    if (!form.dateStartISO) return setStatus("❌ Start date/time is required.");
    if (!imageFile) return setStatus("❌ Please choose an image.");

    try {
      setStatus("Uploading image...");

      const safeName = imageFile.name.replace(/[^\w.\-]+/g, "_");
      const path = `${Date.now()}_${safeName}`;

      const up = await supabase.storage
        .from("event-images")
        .upload(path, imageFile, { upsert: false, contentType: imageFile.type });

      if (up.error) return setStatus(`❌ Upload error: ${up.error.message}`);

      const { data: pub } = supabase.storage.from("event-images").getPublicUrl(path);
      const image = pub.publicUrl;

      const startISO = new Date(form.dateStartISO).toISOString();
      const doorsISO = form.doorsISO ? new Date(form.doorsISO).toISOString() : null;

      const yyyyMmDd = startISO.slice(0, 10);
      const id = `${slugify(form.title)}-${yyyyMmDd}-${rand4()}`;

      const tagsArr =
        form.tags.trim().length === 0
          ? null
          : form.tags
              .split(",")
              .map((t) => t.trim())
              .filter(Boolean);

      setStatus("Saving event...");

      const ins = await supabase.from("events").insert([
        {
          id,
          title: form.title.trim(),
          branch: form.branch.trim(),
          dateStartISO: startISO,
          doorsISO,
          priceUSD: Number(form.priceUSD || 0),
          rsvpPhone: form.rsvpPhone.trim() || null,
          ticketsUrl: form.ticketsUrl.trim() || null,
          mapsQuery: form.mapsQuery.trim() || null,
          description: form.description.trim() || null,
          tags: tagsArr,
          image,
        },
      ]);

      if (ins.error) return setStatus(`❌ DB error: ${ins.error.message}`);

      setStatus(`✅ Event created (id: ${id})`);

      // reset (keep branch)
      setForm((p) => ({
        ...p,
        title: "",
        dateStartISO: "",
        doorsISO: "",
        priceUSD: "0",
        rsvpPhone: "",
        ticketsUrl: "",
        mapsQuery: "",
        description: "",
        tags: "",
      }));
      setImageFile(null);
      const el = document.getElementById("image-input") as HTMLInputElement | null;
      if (el) el.value = "";
    } catch (err: any) {
      setStatus(`❌ ${err?.message ?? "Unknown error"}`);
    }
  }

  if (!session) {
    return (
      <main style={{ maxWidth: 520, margin: "40px auto", padding: 16 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>Admin Login</h1>
        <p style={{ opacity: 0.8, marginTop: 8 }}>
            Please sign in with your admin credentials.
        </p>

        <form onSubmit={signIn} style={{ display: "grid", gap: 12, marginTop: 16 }}>
          <label>
            Email
            <input
              style={{ width: "100%", padding: 10 }}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              style={{ width: "100%", padding: 10 }}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button style={{ padding: "10px 14px" }} type="submit">
            Sign in
          </button>
        </form>

        {status && <p style={{ marginTop: 12 }}>{status}</p>}
      </main>
    );
  }

  return (
    <main style={{ maxWidth: 760, margin: "40px auto", padding: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>Create Event</h1>
        <button onClick={signOut} style={{ padding: "8px 12px" }}>
          Sign out
        </button>
      </div>

      <form onSubmit={createEvent} style={{ display: "grid", gap: 12, marginTop: 16 }}>
        <label>
          Title
          <input
            style={{ width: "100%", padding: 10 }}
            value={form.title}
            onChange={(e) => set("title", e.target.value)}
            required
          />
        </label>

        <label>
          Branch
          <select
            style={{ width: "100%", padding: 10 }}
            value={form.branch}
            onChange={(e) => set("branch", e.target.value)}
          >
            <option value="Zahle">Zahle</option>
            <option value="Jounieh">Jounieh</option>
            <option value="Jbeil">Jbeil</option>
          </select>
        </label>

        <label>
          Start Date/Time
          <input
            style={{ width: "100%", padding: 10 }}
            type="datetime-local"
            value={form.dateStartISO}
            onChange={(e) => set("dateStartISO", e.target.value)}
            required
          />
        </label>

        <label>
          Doors Date/Time (optional)
          <input
            style={{ width: "100%", padding: 10 }}
            type="datetime-local"
            value={form.doorsISO}
            onChange={(e) => set("doorsISO", e.target.value)}
          />
        </label>

        <label>
          Price USD
          <input
            style={{ width: "100%", padding: 10 }}
            type="number"
            min="0"
            step="0.01"
            value={form.priceUSD}
            onChange={(e) => set("priceUSD", e.target.value)}
          />
        </label>

        <label>
          RSVP Phone (optional)
          <input
            style={{ width: "100%", padding: 10 }}
            value={form.rsvpPhone}
            onChange={(e) => set("rsvpPhone", e.target.value)}
          />
        </label>

        <label>
          Tickets URL (optional)
          <input
            style={{ width: "100%", padding: 10 }}
            value={form.ticketsUrl}
            onChange={(e) => set("ticketsUrl", e.target.value)}
          />
        </label>

        <label>
          Maps Query (optional)
          <input
            style={{ width: "100%", padding: 10 }}
            value={form.mapsQuery}
            onChange={(e) => set("mapsQuery", e.target.value)}
            placeholder="e.g. Thinkers%20C.C.C%20Zahle"
          />
        </label>

        <label>
          Tags (comma-separated, optional)
          <input
            style={{ width: "100%", padding: 10 }}
            value={form.tags}
            onChange={(e) => set("tags", e.target.value)}
            placeholder="DJ, Ladies Night, Live Music"
          />
        </label>

        <label>
          Description (optional)
          <textarea
            style={{ width: "100%", padding: 10 }}
            rows={4}
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
          />
        </label>

        <label>
          Image
          <input
            id="image-input"
            type="file"
            accept="image/*"
            required
            onChange={(e) => setImageFile(e.target.files?.[0] ?? null)}
          />
        </label>

        <button style={{ padding: "10px 14px" }} type="submit">
          Create event
        </button>
      </form>

      {status && <p style={{ marginTop: 12 }}>{status}</p>}
    </main>
  );
}
