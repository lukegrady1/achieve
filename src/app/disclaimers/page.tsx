import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Disclaimers | Achieve Performance Training",
  description: "Disclaimers for Achieve Performance Training.",
};

export default function DisclaimersPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Disclaimers"
      intro="These placeholder disclaimers cover the health, fitness, and content nature of our programs and the Learning Platform. Replace with reviewed legal language."
      sections={[
        {
          heading: "Not Medical Advice",
          body: "Our programs and content are for general fitness and athletic-development purposes and are not a substitute for professional medical advice. Consult a physician before beginning any exercise program. (Placeholder.)",
        },
        {
          heading: "Assumption of Risk",
          body: "Physical training carries inherent risks. By participating, you acknowledge and accept those risks to the extent permitted by law. (Placeholder.)",
        },
        {
          heading: "Results May Vary",
          body: "Athletic and fitness outcomes depend on many individual factors. We make no guarantee of specific results. (Placeholder.)",
        },
        {
          heading: "External Links",
          body: "This site may link to third-party sites (such as our gear store or social media). We are not responsible for the content or practices of those sites. (Placeholder.)",
        },
      ]}
    />
  );
}
