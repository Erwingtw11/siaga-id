type BaseCardProps = {
  children: React.ReactNode;
};

export default function BaseCard({ children }: BaseCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#0F172A] p-6">
      {children}
    </div>
  );
}
