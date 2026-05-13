import type { Metadata } from "next";
import { Providers } from "@/components/providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "HireNinjas — Elite Talent & Performance Marketing Dubai",
  description:
    "Performance-led digital agency for ambitious brands across Dubai and the UAE. Expert talent acquisition and digital marketing solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
