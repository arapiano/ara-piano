import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ARA PIANO | Life with Piano",
  description: "ピアノ演奏を日常に。作曲家・ピアニスト ARA PIANO の公式サイト。楽譜販売、YouTube、オリジナル音楽作品。",
  keywords: ["ARA PIANO", "ピアノ", "楽譜", "作曲家", "ピアニスト", "YouTube"],
  openGraph: {
    title: "ARA PIANO | Life with Piano",
    description: "ピアノ演奏を日常に。作曲家・ピアニスト ARA PIANO の公式サイト。",
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
