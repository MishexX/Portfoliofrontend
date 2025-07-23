'use client';
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Download() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (token) {
      window.location.href = `/api/download-cv/${token}`;
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-8 bg-[#0F0715]">
      <h1 className="text-2xl md:text-3xl font-bold text-purple-400 mb-4">Danke für dein Interesse!</h1>
      <p className="mb-2 text-lg text-white">Dein Download startet gleich automatisch.</p>
      <p className="mb-6 text-sm text-purple-300">Falls der Download nicht startet, <a href={token ? `/api/download-cv/${token}` : "#"} className="underline text-purple-400">klicke hier</a>.</p>
      <div className="animate-bounce mt-4">
        <svg className="w-16 h-16 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
}