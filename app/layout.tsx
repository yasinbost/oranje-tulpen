import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Siteconfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: Siteconfig.name,
    template: `%s | ${Siteconfig.name}`,
  },
  description: Siteconfig.decription,

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
          <div>
            <Header />
            {children}
            {/* <Footer /> */}
          </div>
        </main>
      </body>
    </html>
  );
}
