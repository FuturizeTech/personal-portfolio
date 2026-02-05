"use client"

import dynamic from "next/dynamic";
import { Suspense, useState, useEffect } from "react";

const Lottie = dynamic(
  () => import("lottie-react").catch(err => {
    console.error('Failed to load lottie-react:', err);
    return { default: () => null };
  }),
  {
    loading: () => <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg animate-pulse"></div>,
    ssr: false
  }
);

const AnimationLottie = ({ animationPath, width }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);
  }, []);

  if (!isReady || !animationPath) {
    return <div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg animate-pulse"></div>;
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%',
      height: 'auto',
      maxWidth: '100%',
    },
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
      progressiveLoad: true,
    }
  };

  return (
    <Suspense fallback={<div className="w-full h-96 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg animate-pulse"></div>}>
      <div className="w-full flex justify-center items-center">
        <Lottie {...defaultOptions} />
      </div>
    </Suspense>
  );
};

export default AnimationLottie;