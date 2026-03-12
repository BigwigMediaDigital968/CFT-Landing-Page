interface Props {
  title: string;
  value: number | string;
}

export default function StatsCard({ title, value }: Props) {
  return (
    <div className="bg-[var(--cft-bg-card)] border border-[var(--cft-border)] p-6 rounded-xl">
      <p className="text-[var(--cft-text-muted)]">{title}</p>

      <h3 className="text-3xl font-bold mt-2">{value}</h3>
    </div>
  );
}
