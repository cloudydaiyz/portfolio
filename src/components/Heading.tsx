interface HeadingProps {
  children: React.ReactNode;
  ref?: React.Ref<HTMLDivElement>;
  // className: React.HTMLAttributes<HTMLHeadingElement>["className"]
  className?: string;
}

export default function Heading({ children, ref, className }: HeadingProps) {
  return (
    <div
      ref={ref}
      className={
        'text-lifted relative z-10 text-center font-[family-name:--font-oswald] text-[36px] font-bold leading-none tracking-tight sm:text-[50px] ' +
        className
      }
    >
      {children}
    </div>
  );
}
