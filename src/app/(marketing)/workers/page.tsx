'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/layout/Container';
import { SearchBar } from '@/components/ui/SearchBar';
import { WorkerCard } from '@/components/ui/WorkerCard';
import { FilterSidebar } from '@/components/ui/FilterSidebar';
import { Pagination } from '@/components/ui/Pagination';
import { EmptyState } from '@/components/ui/EmptyState';
import { Users, ArrowUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { WORKERS } from '@/data/workers';
import { useSearchParams } from 'next/navigation';

const ITEMS_PER_PAGE = 12;

export default function WorkersPage() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'rating' | 'experience' | 'recent'>('rating');

  const filters = [
    {
      id: 'trade',
      label: 'Trade',
      type: 'checkbox' as const,
      options: [
        { id: 'carpenter', label: 'Carpenter' },
        { id: 'electrician', label: 'Electrician' },
        { id: 'plumber', label: 'Plumber' },
        { id: 'mason', label: 'Mason' },
        { id: 'painter', label: 'Painter' },
      ],
    },
    {
      id: 'experience',
      label: 'Experience',
      type: 'checkbox' as const,
      options: [
        { id: '0-2', label: '0-2 years' },
        { id: '2-5', label: '2-5 years' },
        { id: '5-10', label: '5-10 years' },
        { id: '10+', label: '10+ years' },
      ],
    },
    {
      id: 'availability',
      label: 'Availability',
      type: 'checkbox' as const,
      options: [
        { id: 'available', label: 'Available' },
        { id: 'busy', label: 'Busy' },
        { id: 'on-project', label: 'On Project' },
      ],
    },
    {
      id: 'rating',
      label: 'Minimum Rating',
      type: 'radio' as const,
      options: [
        { id: 'any', label: 'Any' },
        { id: '3', label: '3+ Stars' },
        { id: '4', label: '4+ Stars' },
        { id: '4.5', label: '4.5+ Stars' },
      ],
    },
  ];

  const query = searchParams.get('q')?.toLowerCase() || '';
  const location = searchParams.get('location')?.toLowerCase() || '';

  const filteredWorkers = useMemo(() => {
    let workers = WORKERS.filter((worker) => {
      const matchesQuery =
        !query ||
        worker.name.toLowerCase().includes(query) ||
        worker.skills[0]?.toLowerCase().includes(query) ||
        worker.skills.some((s) => s.toLowerCase().includes(query));

      // FIX: worker.location is { city, state, willingToRelocate } — not a string
      const matchesLocation =
        !location ||
        worker.location.city.toLowerCase().includes(location) ||
        worker.location.state.toLowerCase().includes(location);

      return matchesQuery && matchesLocation;
    });

    if (sortBy === 'rating') {
      workers = [...workers].sort((a, b) => b.rating - a.rating);
    } else if (sortBy === 'experience') {
      workers = [...workers].sort((a, b) => b.experience.years - a.experience.years);
    }

    return workers;
  }, [query, location, sortBy]);

  const totalPages = Math.ceil(filteredWorkers.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedWorkers = filteredWorkers.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-50 to-background dark:from-brand-950/20 dark:to-background border-b border-border/30 py-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Skilled Workers
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mb-8">
            Connect with verified construction professionals in your area
          </p>
          <div className="max-w-2xl">
            <SearchBar
              placeholder="Search by trade, skill, or name..."
              action="workers"
              defaultQuery={query}
              defaultLocation={location}
            />
          </div>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <FilterSidebar
              filters={filters}
              activeFilters={{}}
              basePath="/workers"
              currentParams={new URLSearchParams()}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/30">
              <p className="text-foreground/70">
                Showing{' '}
                {paginatedWorkers.length === 0 ? 0 : startIndex + 1}–
                {Math.min(startIndex + ITEMS_PER_PAGE, filteredWorkers.length)} of{' '}
                {filteredWorkers.length} workers
              </p>
              <div className="flex items-center gap-2">
                <ArrowUpDown size={16} className="text-foreground/60" />
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value as typeof sortBy);
                    setCurrentPage(1);
                  }}
                  className="bg-background border border-border rounded-lg px-4 py-2 text-sm text-foreground focus:outline-none focus:border-brand-500"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="experience">Most Experienced</option>
                  <option value="recent">Recently Active</option>
                </select>
              </div>
            </div>

            {/* Workers Grid */}
            {paginatedWorkers.length === 0 ? (
              <EmptyState
                icon={Users}
                title="No workers found"
                description={
                  query || location
                    ? `No workers match "${query || location}". Try adjusting your search.`
                    : 'No workers available at the moment.'
                }
                action={{
                  label: 'Browse All Workers',
                  href: '/workers',
                }}
              />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {paginatedWorkers.map((worker) => (
                    // FIX: WorkerCard expects trade (string) and experience (number), not objects
                    <WorkerCard
                      key={worker.id}
                      worker={{
                        ...worker,
                        trade: worker.skills[0] ?? 'Construction Worker',
                        experience: worker.experience.years,
                      }}
                    />
                  ))}
                </div>

                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    basePath="/workers"
                    searchParams={{
                      q: query,
                      location,
                    }}
                  />
                )}
              </>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}