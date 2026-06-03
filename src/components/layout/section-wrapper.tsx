type SectionWrapperProps = {
  children: React.ReactNode;
};

export default function SectionWrapper({ children }: SectionWrapperProps) {
  return <section className="relative py-20 md:py-28">{children}</section>;
}
