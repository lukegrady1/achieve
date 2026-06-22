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

export const metadata: Metadata = {
  title: "Achieve Performance Training | Strength & Conditioning in Clinton, MA",
  description:
    "Achieve Performance Training is a locally owned strength & conditioning and youth athletic development gym in Clinton, MA — building better athletes in person and online since 2010.",
  openGraph: {
    title: "Achieve Performance Training",
    description:
      "Physical Education, Youth Athletic Development, Strength & Conditioning, and Adult Fitness — in person in Clinton, MA and online.",
    type: "website",
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
