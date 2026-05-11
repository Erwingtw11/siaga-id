type BaseCardProps = {
  children: React.ReactNode;
};

export default function BaseCard({ children }: BaseCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0F172A]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
      {children}
    </div>
  );
}
