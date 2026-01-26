// app/data/events.ts

export type Branch = "Zahle" | "Jounieh" | "Jbeil";

export const BRANCHES: Branch[] = ["Zahle", "Jounieh", "Jbeil"];

export function isBranch(x: unknown): x is Branch {
  return x === "Zahle" || x === "Jounieh" || x === "Jbeil";
}

export type EventItem = {
  id: string;
  title: string;
  dateStartISO: string;
  doorsISO?: string;
  branch: Branch;
  priceUSD: number;
  rsvpPhone?: string;
  image: string;
  description?: string;
  tags?: string[];
  mapsQuery?: string;
  ticketsUrl?: string;
};

export const branchPhone: Record<Branch, string> = {
  Zahle: "+961 70 178 859",
  Jbeil: "+961 81 135 993",
  Jounieh: "+961 70 178 859",
};

export const mapsByBranch: Record<Branch, string> = {
  Zahle: "Thinkers%20C.C.C%20Zahle",
  Jbeil: "Thinkers%20C.C.C%20Jbeil",
  Jounieh: "Thinkers%20C.C.C%20Jounieh",
};

/**
 * Takes a DB row (Supabase) and returns a clean EventItem with defaults applied.
 */
export function normalizeEventRow(row: any): EventItem | null {
  if (!row) return null;
  if (!isBranch(row.branch)) return null;

  return {
    id: String(row.id),
    title: String(row.title),
    dateStartISO: String(row.dateStartISO),
    doorsISO: row.doorsISO ? String(row.doorsISO) : undefined,
    branch: row.branch,
    priceUSD: Number(row.priceUSD ?? 0),
    rsvpPhone: row.rsvpPhone ?? branchPhone[row.branch],
    image: String(row.image),
    description: row.description ?? undefined,
    tags: Array.isArray(row.tags) ? row.tags : undefined,
    mapsQuery: row.mapsQuery ?? mapsByBranch[row.branch],
    ticketsUrl: row.ticketsUrl ?? undefined,
  };
} 
