import { Inter } from "next/font/google";
import "./globals.css";

import { NextUIProvider } from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Talentmapp - Discover the Right Connections Faster Than Ever",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/icon.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https:talentmapp.co" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <NextUIProvider>
        <body className={inter.className}>{children}</body>
      </NextUIProvider>
    </html>
  );
}
