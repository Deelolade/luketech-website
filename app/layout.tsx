import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/navbar";
import WhatsAppFAB from "@/components/ui/whatsappFAB";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.luketechpdc.com"),

  title: {
    default:
      "Borehole Drilling Company in Lagos | Luketech Plumbing and Drilling Ltd",
    template: "%s | Luketech Plumbing and Drilling Ltd",
  },
  description:
    "Luketech Plumbing and Drilling Ltd offers professional borehole drilling, geophysical surveys, water exploration, borehole installation, pump systems, and maintenance services for homes, estates, farms, commercial, and industrial properties in Lagos and across Nigeria.",
  keywords: [
    "borehole drilling company in Lagos",
    "borehole drilling in Lagos",
    "borehole drilling Nigeria",
    "borehole installation",
    "borehole maintenance",
    "geophysical survey",
    "vertical electrical sounding",
    "VES survey",
    "water exploration",
    "water borehole",
    "borehole pump installation",
    "borehole services in Lagos",
  ],
  authors: [
    {
      name: "Luketech Plumbing and Drilling Ltd",
    },
  ],
  creator: "Luketech Plumbing and Drilling Ltd",
  publisher: "Luketech Plumbing and Drilling Ltd",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "/",
    siteName: "Luketech Plumbing and Drilling Ltd",

    title:
      "Professional Borehole Drilling & Water Solutions | Luketech Plumbing and Drilling Ltd",

    description:
      "Luketech Plumbing and Drilling Ltd delivers data-driven borehole drilling and water solutions, from geophysical surveys and water exploration to drilling, pump installation, completion, and ongoing maintenance in Lagos and across Nigeria.",

    images: [
      {
        url: "/images/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Luketech Plumbing and Drilling Ltd - Professional Borehole Drilling and Water Solutions",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Professional Borehole Drilling & Water Solutions | Luketech Plumbing and Drilling Ltd",

    description:
      "Professional borehole drilling, geophysical surveys, water exploration, pump installation, and maintenance services in Lagos and across Nigeria.",

    images: ["/images/og-image.jpeg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/images/logo-black.png",
    apple: "/images/logo-black.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <WhatsAppFAB />
      </body>
    </html>
  );
}
