type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionTitle({ children, className }: Props) {
  return (
    <h2 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-brand-primary ${className}`}>
      {children}
    </h2>
  );
}

