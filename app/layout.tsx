import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "HireNinjas — Elite Talent & Performance Marketing Dubai",
  description:
    "Performance-led digital agency for ambitious brands across Dubai and the UAE. Expert talent acquisition and digital marketing solutions.",
  verification: {
    google: "BZifbLylq9P9DryHfVT2AHE_XSwuWMy2WnKPohUzRrM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <SiteHeader />
          {children}
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
