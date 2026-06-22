import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Display: tall, condensed, athletic. Body: clean, legible, weights 300–700.
const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

// Base path on GitHub Pages (e.g. "/achieve"); empty locally. Used so the OG
// image URL includes the subpath when deployed.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  // PLACEHOLDER — set to the real production domain when you have one.
  metadataBase: new URL("https://lukegrady1.github.io"),
  title: "Achieve Performance Training | Strength & Conditioning in Clinton, MA",
  description:
    "Achieve Performance Training is a locally owned strength & conditioning and youth athletic development gym in Clinton, MA — building better athletes in person and online since 2010.",
  openGraph: {
    title: "Achieve Performance Training",
    description:
      "Physical Education, Youth Athletic Development, Strength & Conditioning, and Adult Fitness — in person in Clinton, MA and online.",
    type: "website",
    images: [
      {
        url: `${basePath}/logo.png`,
        width: 1834,
        height: 1204,
        alt: "Achieve Performance Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Achieve Performance Training",
    description:
      "Physical Education, Youth Athletic Development, Strength & Conditioning, and Adult Fitness — in person in Clinton, MA and online.",
    images: [`${basePath}/logo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bebas.variable} ${poppins.variable} scroll-smooth`}
    >
      <body className="min-h-screen overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
