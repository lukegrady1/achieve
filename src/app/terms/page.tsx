import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service | Achieve Performance Training",
  description: "Terms of service for Achieve Performance Training.",
};

export default function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms of Service"
      intro="These placeholder terms describe the general expectations for using this website, our facility, and the Learning Platform. Replace with reviewed legal language."
      sections={[
        {
          heading: "Use of the Site",
          body: "By accessing this website you agree to use it lawfully and not to misuse its content or services. (Placeholder text — to be reviewed by the client.)",
        },
        {
          heading: "Programs & Participation",
          body: "Participation in any in-person program is subject to facility rules, waivers, and any health requirements communicated at sign-up. (Placeholder.)",
        },
        {
          heading: "Learning Platform Access",
          body: "Subscriptions to the Learning Platform are for individual or licensed group use as described at purchase. Sharing access outside your plan is not permitted. (Placeholder.)",
        },
        {
          heading: "Liability",
          body: "Achieve Performance Inc. provides programming and content on an as-is basis and is not liable for outcomes beyond what is required by applicable law. (Placeholder.)",
        },
        {
          heading: "Changes to These Terms",
          body: "We may update these terms from time to time. Continued use of the site constitutes acceptance of the current version. (Placeholder.)",
        },
      ]}
    />
  );
}
