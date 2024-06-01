type SectionProps = React.ComponentProps<"section">;

export default function AnimatedSection({ className, ...props }: SectionProps) {
  return (
    <section
      className={`${className} opacity-0 translate-x-[-20px] animate-[dog-next-anime-left_0.3s_forwards]`}
      {...props}
    >
      {props.children}
    </section>
  );
}
