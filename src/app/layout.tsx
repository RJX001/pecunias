import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider, themeInitScript } from "@/components/theme/ThemeProvider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: "800",
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Pecunia Studios",
  description:
    "Pecunia brings strategy, marketing, technology and automation together to help ambitious businesses move beyond where they are now.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${montserrat.variable} h-full`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
      </head>
      <body
        className={`${montserrat.className} min-h-full bg-bg font-sans text-fg antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
