'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="orb-cyan w-[500px] h-[500px] top-0 left-0 opacity-30" />
      <div className="orb-purple w-[400px] h-[400px] bottom-0 right-0 opacity-30" />
      
      <div className="glass-card border border-cyan/25 p-8 md:p-12 max-w-lg text-center relative z-10">
        <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-6">
          <AlertCircle className="text-red-500" size={32} />
        </div>
        
        <h1 className="text-2xl md:text-3xl font-bold mb-4 font-orbitron">
          Oops! Something went wrong
        </h1>
        
        <p className="text-muted-foreground mb-8">
          We encountered an unexpected error. Don't worry, we're on it!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 btn-primary"
          >
            <RefreshCw size={18} />
            Try Again
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 btn-outline-gold"
          >
            <Home size={18} />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
