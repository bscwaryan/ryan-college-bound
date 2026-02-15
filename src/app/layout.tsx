import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan College Bound | College Bound with Confidence",
  description:
    "Expert college consulting for Alabama families. Melissa Ryan provides individualized guidance from sophomore year through acceptance day — 33+ years of experience helping students find their perfect college fit.",
  keywords: [
    "college consulting",
    "Alabama college advisor",
    "college admissions help",
    "independent educational consultant",
    "college planning",
    "financial aid strategy",
    "SAT ACT prep guidance",
    "Melissa Ryan",
  ],
  openGraph: {
    title: "Ryan College Bound | College Bound with Confidence",
    description:
      "Expert college consulting for Alabama families — from sophomore year through acceptance day.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-bg text-text font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
