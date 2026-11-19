import type { Metadata } from "next";
import { Anton, Bebas_Neue, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohammed Faiz — Engineering Meets Design",
  description:
    "Personal portfolio of Mohammed Faiz — Computer Science Engineering student, Full Stack Developer, and AI Enthusiast.",
  keywords: ["Mohammed Faiz", "portfolio", "software engineer", "full stack", "web developer", "AI"],
  authors: [{ name: "Mohammed Faiz", url: "https://faizlotiya.tech" }],
  openGraph: {
    title: "Mohammed Faiz — Engineering Meets Design",
    description: "Curious mind. Builder by nature. Engineer in progress.",
    type: "website",
    url: "https://faizlotiya.tech",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${anton.variable} ${bebasNeue.variable} ${inter.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
