import { GoogleTagManager } from "@next/third-parties/google";

import '@fontsource/inter/index.css';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

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
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
