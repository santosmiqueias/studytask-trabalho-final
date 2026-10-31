interface StatCardProps {
  label: string;
  value: number;
  description: string;
  tone: "blue" | "green" | "orange";
}

export default function StatCard({ label, value, description, tone }: StatCardProps) {
  return (
    <article className={`stat-card ${tone}`}>
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{description}</small>
    </article>
  );
}
