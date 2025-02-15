interface HeadingProps {
  children: React.ReactNode;
  // className: React.HTMLAttributes<HTMLHeadingElement>["className"]
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <div
      className={
        'text-lifted relative z-10 text-center font-[family-name:--font-oswald] text-[36px] font-bold leading-none tracking-tight sm:text-[50px] ' +
        className
      }
    >
      {children}
    </div>
  );
}
