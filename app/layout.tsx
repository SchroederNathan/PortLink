import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portlink.me"),
  icons: {
    icon: [
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
  title: {
    default: "PortLink | Free Portfolio Builder in a URL",
    template: "%s | PortLink",
  },
  description:
    "Create a free portfolio website in 60 seconds. No hosting, no accounts, no database. Your entire portfolio is encoded into a shareable URL.",
  keywords: [
    "portfolio builder",
    "free portfolio",
    "developer portfolio",
    "no hosting portfolio",
    "portfolio generator",
    "url portfolio",
    "portfolio website",
    "online portfolio maker",
  ],
  authors: [{ name: "PortLink" }],
  creator: "PortLink",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portlink.me",
    siteName: "PortLink",
    title: "PortLink | Free Portfolio Builder in a URL",
    description:
      "Create a free portfolio website in 60 seconds. No hosting, no accounts, no database. Just a URL.",
    images: [
      {
        url: "/og",
        width: 1200,
        height: 630,
        alt: "PortLink - Build your portfolio in 60 seconds",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PortLink | Free Portfolio Builder in a URL",
    description:
      "Create a free portfolio website in 60 seconds. No hosting, no accounts. Just a URL.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-black",
        geistSans.variable,
        geistMono.variable
      )}
    >
      <body className="antialiased max-w-xl mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          {children}
        </main>
      </body>
    </html>
  );
}
