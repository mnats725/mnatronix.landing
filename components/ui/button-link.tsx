import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  icon = true,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light";
  icon?: boolean;
}) {
  return (
    <a
      className={cn("button", `button--${variant}`)}
      href={href}
      data-analytics-event={href.endsWith("#contacts") ? "project_discussion_click" : undefined}
    >
      {children}
      {icon && <ArrowUpRight aria-hidden="true" size={18} />}
    </a>
  );
}
