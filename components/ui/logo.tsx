import Image from "next/image";

import { cn } from "@/lib/cn";

type LogoProps = {
  light?: boolean;
  href?: string;
  homeLabel?: string;
  eager?: boolean;
};

export function Logo({
  light = false,
  href = "#top",
  homeLabel = "MNATRONIX LABS",
  eager = false,
}: LogoProps) {
  return (
    <a href={href} className={cn("logo", light && "logo--light")} aria-label={homeLabel}>
      <Image
        className="logo__image"
        src="/logo-with-text.svg"
        width={875}
        height={188}
        alt="MNATRONIX LABS"
        loading={eager ? "eager" : "lazy"}
        sizes="(max-width: 760px) 150px, 184px"
      />
    </a>
  );
}
