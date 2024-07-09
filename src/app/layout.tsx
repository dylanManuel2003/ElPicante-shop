import type { Metadata } from "next";
import Head from "next/head";
import { gabarito, nosifer } from "@/app/utils/fonts"
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "ElPicante Clothes Shop",
  description: "Clothes Ecommerce",
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={` ${gabarito} ${nosifer} `}>
        <ThemeProvider attribute="class" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
