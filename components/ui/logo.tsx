import Image from "next/image";

import { cn } from "@/lib/cn";

type LogoProps = {
  light?: boolean;
  priority?: boolean;
};

export function Logo({ light = false, priority = false }: LogoProps) {
  return (
    <a
      href="#top"
      className={cn("logo", light && "logo--light")}
      aria-label="MNATRONIX LABS — на главную"
    >
      <Image
        className="logo__image"
        src="/logo-with-text.png"
        width={2000}
        height={544}
        alt="MNATRONIX LABS"
        priority={priority}
        sizes="(max-width: 760px) 150px, 184px"
      />
    </a>
  );
}
