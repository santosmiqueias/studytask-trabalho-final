interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "center" | "left";
  as?: "h1" | "h2";
}

export default function SectionTitle({ eyebrow, title, description, align = "center", as: Heading = "h1" }: SectionTitleProps) {
  return (
    <div className={`section-title ${align}`}>
      <span className="eyebrow">{eyebrow}</span>
      <Heading>{title}</Heading>
      <p>{description}</p>
    </div>
  );
}
