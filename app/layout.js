import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import '@fontsource/inter/index.css';

import "./css/card.scss";
import "./css/globals.scss";
import ClientLayout from "./components/ClientLayout";

export const metadata = {
  title: "Portfolio of Sarabjeet Singh - Software Developer",
  description:
    "This is the portfolio of Sarabjeet Singh. I am a full stack developer and a self taught developer...",
  icons: {
    icon: "/trace.svg",
  },
};

// Optimize: Preload critical fonts
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preload"
          href="/_next/static/media/trace.svg"
          as="image"
        />
      </head>
      <body className="font-sans antialiased">

        {process.env.NEXT_PUBLIC_GTM && (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        )}

        <ClientLayout>
          {children}
        </ClientLayout>

        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  );
}
