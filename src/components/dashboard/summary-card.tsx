type SummaryCardProps = {
  title: string;
  value: string;
  description: string;
};

export default function SummaryCard({
  title,
  value,
  description,
}: SummaryCardProps) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#0B1324]/80 p-7">
      <p className="text-sm text-white/50">{title}</p>

      <h3 className="mt-3 text-6xl font-bold text-white">{value}</h3>

      <p className="mt-4 text-sm leading-7 text-white/55">{description}</p>
    </div>
  );
}
