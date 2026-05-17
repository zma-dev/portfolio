import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio | 岩崎一真",
  description:
    "デジタルコンテンツクリエイター・SNS運用。言語化力×AI活用で、無形の価値を形にする。スキル、経歴、強みを紹介しています。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
