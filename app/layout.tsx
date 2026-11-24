import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "XpressoAI - Autonomous AI Workforce",
  description: "Reimagine work with autonomous AI agents. Your on-demand AI workforce.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Script async src="https://www.googletagmanager.com/gtm.js?id=GTM-MKQQ93SP"></Script>
        <Script id="google-tag-manager">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
