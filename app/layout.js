
import { GoogleTagManager } from "@next/third-parties/google";

import '@fontsource/inter/index.css';

import "./css/card.scss";
import "./css/globals.scss";
import ClientLayout from "./components/ClientLayout";

export const metadata = {
  title: "Portfolio of Sarabjeet Singh- Software Developer",
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
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
