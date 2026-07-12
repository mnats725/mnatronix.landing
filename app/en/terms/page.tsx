import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: `Terms of use | ${siteConfig.name}`,
  alternates: { canonical: "/en/terms", languages: { ru: "/terms", en: "/en/terms" } },
};

const sections = [
  {
    title: "1. Website purpose",
    paragraphs: [
      "This website describes MNATRONIX LABS services and provides a way to request a project discussion.",
      "Website materials are not a binding offer. Delivery terms are agreed in a separate contract.",
    ],
  },
  {
    title: "2. Content use",
    paragraphs: [
      "Website copy, design, graphics and code are protected by intellectual property law.",
      "Commercial reuse requires prior written permission from the rights holder.",
    ],
  },
  {
    title: "3. User enquiries",
    paragraphs: [
      "You agree to provide accurate contact details and not submit harmful or unlawful content.",
      "Submitting the form creates no contractual obligation before both parties agree the terms.",
    ],
  },
  {
    title: "4. Liability",
    paragraphs: [
      "We aim to keep information current but cannot guarantee uninterrupted availability during maintenance or events outside our control.",
    ],
  },
  {
    title: "5. Contact",
    paragraphs: [`Questions about website use can be sent to ${siteConfig.contacts.email}.`],
  },
];

export default function EnglishTermsPage() {
  return (
    <LegalPage
      locale="en"
      homeHref="/en/"
      backLabel="Back to home"
      eyebrow="Legal information"
      revisionLabel="Last updated"
      title="Terms of use"
      updatedAt="11 July 2026"
      sections={sections}
    />
  );
}
