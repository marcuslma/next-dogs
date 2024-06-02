type SectionProps = React.ComponentProps<"section">;

export default function AnimatedSection({ className, ...props }: SectionProps) {
  let sectionClassName = "animate-dogs-next-fade-right";

  if (className) {
    sectionClassName = `${className} ${sectionClassName}`;
  }

  return (
    <section className={sectionClassName} {...props}>
      {props.children}
    </section>
  );
}
