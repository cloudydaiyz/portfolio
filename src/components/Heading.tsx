interface HeadingProps {
  children: React.ReactNode;
  // className: React.HTMLAttributes<HTMLHeadingElement>["className"]
  className?: string;
}

export default function Heading({ children, className }: HeadingProps) {
  return (
    <div
      className={
        'relative z-10 font-[family-name:--font-oswald] text-[50px] font-bold leading-none tracking-tight ' + className
      }
    >
      {children}
    </div>
  );
}
