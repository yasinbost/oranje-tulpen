import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { siteconfig } from "@/config/site";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteconfig.name,
    template: `%s | ${siteconfig.name}`,
  },
  description: siteconfig.decription,

  icons: [
    {
      url: "/favicon.ico",
      href: "/favicon.ico", // changed page icon
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <div className="flex-grow flex-1">{children} </div>
        </main>
      </body>
    </html>
  );
}
