import { LandingPage } from "@/components/pages/landing-page";
import { createLandingMetadata } from "@/lib/seo";

export const metadata = createLandingMetadata("ru");

export default function HomePage() {
  return <LandingPage locale="ru" />;
}
