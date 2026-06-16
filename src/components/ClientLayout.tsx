'use client';

import { useEffect, useState } from 'react';
import { LoadingScreen } from './ui/LoadingScreen';
import { LenisProvider } from './LenisProvider';

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prefetch and load assets
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      )}
      <LenisProvider>
        {children}
      </LenisProvider>
    </>
  );
};