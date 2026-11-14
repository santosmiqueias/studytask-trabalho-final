import Icon, { type IconName } from "./Icon";

interface StatCardProps {
  label: string;
  value: number | string;
  description: string;
  tone: "blue" | "green" | "orange" | "red";
  icon: IconName;
}

export default function StatCard({ label, value, description, tone, icon }: StatCardProps) {
  return (
    <article className={`stat-card tone-${tone}`}>
      <div className="stat-top">
        <span className="stat-label">{label}</span>
        <span className="stat-icon"><Icon name={icon} size={17} /></span>
      </div>
      <strong>{value}</strong>
      <small>{description}</small>
    </article>
  );
}
