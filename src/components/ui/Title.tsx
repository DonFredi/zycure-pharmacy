"use client";
type TitleSizes = "sm" | "md" | "lg" | "xl" | "xxl";
type Alignments = "left" | "center" | "right";
type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface TitleProps {
  text: string;
  as?: HeadingTag;
  size?: TitleSizes;
  align?: Alignments;
  color?: string; // Tailwind color like "text-primary"
  className?: string; // Extra Tailwind classes
}

const Title = ({
  text = "",
  as: Tag = "h1",
  size = "xl",
  align = "left",
  color = "text-primary",
  className = "",
}: TitleProps) => {
  const sizeClasses = {
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-2xl",
    xxl: "text-4xl font-bold",
  };

  return (
    <h1
      className={`
        ${sizeClasses[size]} 
        ${color} 
        text-${align} 
        ${className}
      `}
    >
      {text}
    </h1>
  );
};

export default Title;
