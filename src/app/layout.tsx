import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RQProvider from "./RQProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M+ ADMIN",
  description: "어드민 시스템",
  icons: {
    icon: "/faviconLogo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="/favicon3.ico" />
      </head> */}
      <body className={inter.className}>
        <RQProvider>{children}</RQProvider>
      </body>
    </html>
  );
}
