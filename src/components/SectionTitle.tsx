export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-primary">
      {children}
    </h2>
  );
}
