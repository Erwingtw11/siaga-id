type SectionWrapperProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section className={`relative py-20 lg:py-28${className ? ` ${className}` : ""}`}>
      {children}
    </section>
  );
}
