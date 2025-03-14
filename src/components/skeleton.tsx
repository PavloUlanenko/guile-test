import { cn } from '@/lib/utils';
import type React from 'react';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div className={cn('bg-gray-07 animate-pulse rounded-md opacity-50', className)} {...props} />
  );
}
