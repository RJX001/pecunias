import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
  weight: ["400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Pecunia Studios",
  description:
    "Pecunia is a growth systems company. One connected system across Digital, Acquisition, Automation, Commerce and Creative.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${archivo.variable} h-full`}>
      <body className="min-h-full bg-bg font-sans text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
