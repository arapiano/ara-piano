import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARA PIANO | Life with Piano.",
  description: "音楽を、もっと身近に。作曲・演奏・映像・教育を横断するクリエイティブブランド、ARA PIANO。",
  keywords: ["ARA PIANO", "新本和正", "Kazumasa Aramoto", "作曲", "ピアノ", "楽譜", "音楽教育"],
  openGraph: {
    title: "ARA PIANO | Life with Piano.",
    description: "作曲・演奏・映像・教育を横断するクリエイティブブランド。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
