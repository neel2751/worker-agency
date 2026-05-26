import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  basePath: string;
  searchParams?: Record<string, string>;
}

function buildUrl(basePath: string, page: number, searchParams?: Record<string, string>) {
  const params = new URLSearchParams(searchParams);
  params.set('page', String(page));
  return `${basePath}?${params.toString()}`;
}

function getPaginationRange(current: number, total: number) {
  const range = [];
  const window = 2;

  // Always show first page
  range.push(1);

  // Add ellipsis if needed
  if (current - window > 2) {
    range.push('...');
  }

  // Add surrounding pages
  for (let i = Math.max(2, current - window); i <= Math.min(total - 1, current + window); i++) {
    range.push(i);
  }

  // Add ellipsis if needed
  if (current + window < total - 1) {
    range.push('...');
  }

  // Always show last page if total > 1
  if (total > 1) {
    range.push(total);
  }

  return range;
}

export function Pagination({
  currentPage,
  totalPages,
  basePath,
  searchParams = {},
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const paginationRange = getPaginationRange(currentPage, totalPages);

  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      {/* Previous Button */}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === 1}
        asChild={currentPage > 1}
        className={currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}
      >
        {currentPage > 1 ? (
          <Link href={buildUrl(basePath, currentPage - 1, searchParams)}>
            <ChevronLeft size={16} className="mr-1" />
            Previous
          </Link>
        ) : (
          <>
            <ChevronLeft size={16} className="mr-1" />
            Previous
          </>
        )}
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {paginationRange.map((page, idx) => {
          if (page === '...') {
            return (
              <span key={`ellipsis-${idx}`} className="px-2 py-2 text-foreground/50">
                ...
              </span>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <Button
              key={pageNum}
              variant={isActive ? 'default' : 'outline'}
              size="sm"
              className={cn(
                'min-w-10 h-10 p-0',
                isActive && 'bg-brand-500 hover:bg-brand-600 text-white'
              )}
              asChild={!isActive}
            >
              {isActive ? (
                <span>{pageNum}</span>
              ) : (
                <Link href={buildUrl(basePath, pageNum, searchParams)}>
                  {pageNum}
                </Link>
              )}
            </Button>
          );
        })}
      </div>

      {/* Next Button */}
      <Button
        variant="outline"
        size="sm"
        disabled={currentPage === totalPages}
        asChild={currentPage < totalPages}
        className={currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}
      >
        {currentPage < totalPages ? (
          <Link href={buildUrl(basePath, currentPage + 1, searchParams)}>
            Next
            <ChevronRight size={16} className="ml-1" />
          </Link>
        ) : (
          <>
            Next
            <ChevronRight size={16} className="ml-1" />
          </>
        )}
      </Button>
    </div>
  );
}