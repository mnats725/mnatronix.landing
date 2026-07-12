import { LandingPage } from "@/components/pages/landing-page";
import { createLandingMetadata } from "@/lib/seo";

export const metadata = createLandingMetadata("en");

export default function EnglishHomePage() {
  return <LandingPage locale="en" />;
}
