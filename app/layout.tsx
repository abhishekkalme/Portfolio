import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://AbhisheKalme.dev"), // ✅ required to fix metadataBase warning
  title: "Abhishek Kalme - Full-Stack Developer",
  description:
    "Full-stack developer with a passion for creating exceptional digital experiences",
  keywords: [
    "Frontend Developer",
    "Full-stack Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
  ],
  authors: [{ name: "Abhishek Kalme" }],
  openGraph: {
    title: "Abhishek Kalme - Full-stack Developer",
    description:
      "Full-stack developer with a passion for creating exceptional digital experiences",
    url: "https://AbhisheKalme.dev",
    siteName: "Abhishek Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Abhishek Kalme Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhishek Kalme - FullStack Developer",
    description:
      "Full-stack developer with a passion for creating exceptional digital experiences",
    images: ["/og-image.png"],
    creator: "@Abhishek_kalme", // ✅ Twitter handle (not full URL)
  },
  icons: {
    icon: "/favicon.ico",
  },
};

// ✅ Move themeColor here instead of metadata
export const viewport: Viewport = {
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
