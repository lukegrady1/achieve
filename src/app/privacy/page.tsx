import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Achieve Performance Training",
  description: "Privacy policy for Achieve Performance Training.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This placeholder policy outlines how Achieve Performance Training handles information collected through this website and the Learning Platform. Replace with reviewed legal language."
      sections={[
        {
          heading: "Information We Collect",
          body: "We may collect information you provide directly — such as your name, email, and message — when you contact us, sign up, or subscribe. (Placeholder.)",
        },
        {
          heading: "How We Use Information",
          body: "Information is used to respond to inquiries, deliver services, manage subscriptions, and improve our programs and content. (Placeholder.)",
        },
        {
          heading: "Cookies & Analytics",
          body: "This site may use cookies or analytics to understand usage and improve the experience. You can control cookies through your browser settings. (Placeholder.)",
        },
        {
          heading: "Sharing",
          body: "We do not sell your personal information. We may share data with service providers strictly to operate the site and platform. (Placeholder.)",
        },
        {
          heading: "Contact",
          body: "For questions about this policy or your data, contact us through the contact page. (Placeholder.)",
        },
      ]}
    />
  );
}
