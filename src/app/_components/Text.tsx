interface TextProps {
  className: string;
  children: React.ReactNode;
}

export default function Text({ className, children }: TextProps) {
  return <p className={className}>{children}</p>;
}
