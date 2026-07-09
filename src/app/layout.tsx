import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andy Anim | Portfolio & Services",
  description:
    "Personal portfolio showcasing projects, skills, and professional services. Specializing in software development and consulting.",
  keywords: [
    "portfolio",
    "developer",
    "software engineer",
    "consultant",
    "projects",
  ],
  authors: [{ name: "Andy Anim" }],
  openGraph: {
    title: "Andy Anim | Portfolio & Services",
    description:
      "Personal portfolio showcasing projects, skills, and professional services.",
    url: "https://andyanim.com",
    siteName: "Andy Anim Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andy Anim | Portfolio & Services",
    description:
      "Personal portfolio showcasing projects, skills, and professional services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}