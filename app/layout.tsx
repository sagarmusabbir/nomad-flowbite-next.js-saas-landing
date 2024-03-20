import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeModeScript } from "flowbite-react";
import DefaultHeaderNavigation from "./components/default";
import SitemapLinksFooterSection from "./components/sitemap-links";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "next-flowbite-react-landing",
  description: "Nextjs Flowbite React Starter | Saas Landing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Implements Dark Theme functionality */}
        <ThemeModeScript />
      </head>
      <body className={inter.className}>
        <DefaultHeaderNavigation />
        {children}
        <SitemapLinksFooterSection />
      </body>
    </html>
  );
}
