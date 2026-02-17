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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans">

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
