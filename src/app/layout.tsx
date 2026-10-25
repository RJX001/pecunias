import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider, themeInitScript } from "@/components/theme/ThemeProvider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["800"],
  variable: "--font-montserrat",
});

const TITLE = "Website Design, Apps & Digital Marketing · Pecunia Studios";
const DESCRIPTION =
  "Websites, apps, branding, advertising, SEO, automation and EPOS & CRM systems. Talk to Pecunia Studios about your next business or personal project.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pecuniastudios.co.uk"),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Pecunia Studios",
    locale: "en_GB",
    title: TITLE,
    description: DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
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
