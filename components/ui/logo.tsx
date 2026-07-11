import Image from "next/image";

import { cn } from "@/lib/cn";

type LogoProps = {
  light?: boolean;
};

export function Logo({ light = false }: LogoProps) {
  return (
    <a
      href="#top"
      className={cn("logo", light && "logo--light")}
      aria-label="MNATRONIX LABS — на главную"
    >
      <Image
        className="logo__image"
        src="/logo-with-text.svg"
        width={875}
        height={188}
        alt="MNATRONIX LABS"
        loading="lazy"
        sizes="(max-width: 760px) 150px, 184px"
      />
    </a>
  );
}
