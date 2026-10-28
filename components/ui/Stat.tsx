type StatProps = {
  label: string;
  value: string;
  className?: string;
  labelClassName?: string;
  gapClassName?: string;
};

export function Stat({
  label,
  value,
  className = "",
  labelClassName = "text-label",
  gapClassName = "gap-tight",
}: StatProps) {
  return (
    <dl className={`flex flex-col text-navy ${gapClassName} ${className}`}>
      <dt className={`font-medium ${labelClassName}`}>{label}</dt>
      <dd className="text-stat font-bold">{value}</dd>
    </dl>
  );
}
