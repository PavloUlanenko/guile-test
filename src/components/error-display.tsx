'use client';

import { AlertTriangle } from 'lucide-react';

interface ErrorDisplayProps {
  message?: string;
  onRetry: () => void;
}

export function ErrorDisplay({
  message = 'Failed to load appointments',
  onRetry,
}: ErrorDisplayProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <AlertTriangle className="mb-4 h-12 w-12 text-red-500" />
      <h3 className="text-white-02 mb-2 text-xl font-semibold">Something went wrong</h3>
      <p className="text-gray-04 mb-6 max-w-md">{message}</p>
      <button
        onClick={onRetry}
        className="bg-gray-06 text-black-01 text-title-14 h-[37px] rounded-full px-6 hover:bg-gray-200 disabled:opacity-50"
      >
        Try Again
      </button>
    </div>
  );
}
