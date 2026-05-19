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
    <div className="min-h-[220px] rounded-3xl border border-white/10 bg-[#0F172A]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
      <p className="text-sm text-white/50">{title}</p>

      <h2 className="mt-4 text-5xl font-bold text-white">{value}</h2>

      <p className="mt-4 text-sm leading-7 text-white/60">{description}</p>
    </div>
  );
}
