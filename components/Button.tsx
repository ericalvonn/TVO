import Link from "next/link";

type Variant = "orange" | "blue" | "outline-light" | "outline-dark";

const variants: Record<Variant, string> = {
  orange: "bg-orange-acts text-white hover:bg-[#c94600]",
  blue: "bg-blue-action text-white hover:bg-[#0045bb]",
  "outline-light": "border-2 border-white text-white hover:bg-white hover:text-navy-primary",
  "outline-dark": "border-2 border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white",
};

export const buttonClass = (variant: Variant = "orange", extra = "") =>
  `inline-flex min-h-11 items-center justify-center gap-2 px-6 py-3 font-display text-base font-semibold uppercase tracking-wider transition-colors ${variants[variant]} ${extra}`;

type Props = {
  href?: string | null;
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

/** Renders a link styled as a button. With no href it renders a visibly disabled button. */
export default function Button({ href, variant = "orange", className = "", children }: Props) {
  if (!href) {
    return (
      <span aria-disabled="true" className={buttonClass(variant, `cursor-not-allowed opacity-50 ${className}`)}>
        {children}
      </span>
    );
  }
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    return (
      <a href={href} className={buttonClass(variant, className)} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClass(variant, className)}>
      {children}
    </Link>
  );
}
