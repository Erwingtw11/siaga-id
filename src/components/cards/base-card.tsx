type BaseCardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function BaseCard({ children, className }: BaseCardProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(15,23,42,0.94),rgba(8,15,30,0.94))] p-6 shadow-[0_18px_48px_rgba(2,6,23,0.32)] backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-cyan-400/25 hover:shadow-[0_26px_60px_rgba(2,6,23,0.42)] ${className ?? ""}`}
    >
      {children}
    </div>
  );
}
