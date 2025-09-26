type Props = {
  name?: string;
  role?: string;
  photoUrl?: string;
  bio?: string;
};

export default function CEO({
  name = "Joseph Abdayem",
  role = "Founder & CEO",
  photoUrl = "../assets/images/Joseph.jpg",
  bio = "Bio",
}: Props) {
  return (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <img
        src={photoUrl}
        alt={name}
        width={84}
        height={84}
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          border: "1px solid #333",
        }}
      />
      <div>
        <h3 style={{ marginBottom: 4 }}>{name}</h3>
        <p style={{ color: "var(--muted)", margin: 0 }}>{role}</p>
        <p style={{ color: "var(--muted)", marginTop: 8, maxWidth: 700 }}>
          {bio}
        </p>
      </div>
    </div>
  );
}
