interface ProgressRingProps {
  value: number;
  size?: number;
  label?: string;
}

export default function ProgressRing({ value, size = 120, label = "concluído" }: ProgressRingProps) {
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;
  return (
    <div className="progress-ring" style={{ width: size, height: size }} role="img" aria-label={`${value}% ${label}`}>
      <svg width={size} height={size}>
        <circle className="ring-track" cx={size / 2} cy={size / 2} r={radius} strokeWidth={stroke} />
        <circle className="ring-value" cx={size / 2} cy={size / 2} r={radius} strokeWidth={stroke}
          strokeDasharray={circumference} strokeDashoffset={offset} />
      </svg>
      <div className="ring-label"><strong>{value}%</strong><span>{label}</span></div>
    </div>
  );
}
