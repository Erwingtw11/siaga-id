type SectionWrapperProps = {
  children: React.ReactNode;
};

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return <section className="py-16 md:py-24">{children}</section>;
}
