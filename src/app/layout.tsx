import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider, themeInitScript } from "@/components/theme/ThemeProvider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const SITE_DESCRIPTION =
  "Pecunia brings strategy, marketing, technology and automation together to help ambitious businesses move beyond where they are now.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pecuniastudios.co.uk"),
  title: "Pecunia Studios",
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Pecunia Studios",
    locale: "en_GB",
    title: "Pecunia Studios",
    description: SITE_DESCRIPTION,
    url: "/",
  },
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
