// app/components/client-layout.js
'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import dynamic from 'next/dynamic';
import { GoogleTagManager } from '@next/third-parties/google';

// Dynamically import ScrollToTop to avoid SSR crash
const ScrollToTop = dynamic(() => import('./helper/scroll-to-top'), {
    ssr: false,
});

export default function ClientLayout({ children }) {
    return (
        <>
            <ToastContainer />
            {children}
            <ScrollToTop />
            {/* {process.env.NEXT_PUBLIC_GTM && ( */}
            <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
            {/* )} */}
        </>
    );
}
