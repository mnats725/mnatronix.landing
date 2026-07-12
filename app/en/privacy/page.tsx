import type { Metadata } from "next";
import { siteConfig } from "@/config/site-config";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: `Privacy policy | ${siteConfig.name}`,
  alternates: { canonical: "/en/privacy", languages: { ru: "/privacy", en: "/en/privacy" } },
};

const sections = [
  {
    title: "1. General",
    paragraphs: [
      `This policy explains how ${siteConfig.legalName} processes personal data submitted through ${siteConfig.url}.`,
      "By submitting the contact form, you confirm that the information is provided voluntarily.",
    ],
  },
  {
    title: "2. Data we process",
    paragraphs: [
      "We may process your name, phone or Telegram contact, email address, project details and estimated budget.",
      "Technical security data may include an IP address and browser information required to protect the form from abuse.",
    ],
  },
  {
    title: "3. Purpose and retention",
    paragraphs: [
      "We use the data to respond to your enquiry, prepare a proposal and communicate about the project.",
      "Data is retained only for as long as required for these purposes or by applicable law.",
    ],
  },
  {
    title: "4. Sharing and security",
    paragraphs: [
      "Hosting and email providers may process the minimum information required to deliver your enquiry.",
      "We use organisational and technical safeguards against unauthorised access.",
    ],
  },
  {
    title: "5. Your rights",
    paragraphs: [
      `To request correction or deletion of your data, email ${siteConfig.contacts.email}.`,
    ],
  },
];

export default function EnglishPrivacyPage() {
  return (
    <LegalPage
      locale="en"
      homeHref="/en/"
      backLabel="Back to home"
      eyebrow="Legal information"
      revisionLabel="Last updated"
      title="Privacy policy"
      updatedAt="11 July 2026"
      sections={sections}
    />
  );
}
