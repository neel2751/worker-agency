'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/layout/Container';
import { SearchBar } from '@/components/ui/SearchBar';
import { CompanyCard } from '@/components/ui/CompanyCard';
import { FilterSidebar } from '@/components/ui/FilterSidebar';
import { Pagination } from '@/components/ui/Pagination';
import { EmptyState } from '@/components/ui/EmptyState';
import { Building2, ArrowUpDown } from 'lucide-react';
import { COMPANIES } from '@/data/companies';
import { useSearchParams } from 'next/navigation';

const ITEMS_PER_PAGE = 12;

export default function CompaniesPage() {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<'size' | 'jobs' | 'recent'>('jobs');

  const filters = [
    {
      id: 'type',
      label: 'Company Type',
      type: 'checkbox' as const,
      options: [
        { id: 'large', label: 'Large Enterprise' },
        { id: 'mid', label: 'Mid-size' },
        { id: 'startup', label: 'Startup' },
        { id: 'sme', label: 'SME' },
      ],
    },
    {
      id: 'industry',
      label: 'Industry',
      type: 'checkbox' as const,
      options: [
        { id: 'real-estate', label: 'Real Estate' },
        { id: 'infrastructure', label: 'Infrastructure' },
        { id: 'engineering', label: 'Engineering' },
        { id: 'renovation', label: 'Renovation' },
      ],
    },
    {
      id: 'size',
      label: 'Company Size',
      type: 'radio' as const,
      options: [
        { id: 'any', label: 'Any Size' },
        { id: 'small', label: 'Small (1-50)' },
        { id: 'medium', label: 'Medium (51-500)' },
        { id: 'large', label: 'Large (500+)' },
      ],
    },
  ];

  const query = searchParams.get('q')?.toLowerCase() || '';
  const location = searchParams.get('location')?.toLowerCase() || '';

  const filteredCompanies = useMemo(() => {
    let companies = COMPANIES.filter((company) => {
      const matchesQuery = !query || 
        company.name.toLowerCase().includes(query) ||
company.industry.some((i) => i.toLowerCase().includes(query)) ||
        company.companyType.toLowerCase().includes(query);

      const matchesLocation = !location || (company.headquarters.city + ', ' + company.headquarters.state).toLowerCase().includes(location);

      return matchesQuery && matchesLocation;
    });

    // Apply sorting
    if (sortBy === 'jobs') {
      companies = [...companies].sort((a, b) => b.activeJobs - a.activeJobs);
    } else if (sortBy === 'size') {
      companies = [...companies].sort((a, b) => {
        const sizeOrder = { 'Startup': 1, 'SME': 2, 'Mid-size': 3, 'Large Enterprise': 4 };
        return (sizeOrder[b.size as keyof typeof sizeOrder] || 0) - (sizeOrder[a.size as keyof typeof sizeOrder] || 0);
      });
    }

    return companies;
  }, [query, location, sortBy]);

  const totalPages = Math.ceil(filteredCompanies.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedCompanies = filteredCompanies.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-brand-50 to-background dark:from-brand-950/20 dark:to-background border-b border-border/30 py-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Find Top Companies
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mb-8">
            Explore leading construction companies and join their teams
          </p>
          <div className="max-w-2xl">
            <SearchBar 
              placeholder="Search companies by name, industry..."
              action="companies"
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
              basePath="/companies"
              currentParams={new URLSearchParams()}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort Options */}
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/30">
              <p className="text-foreground/70">
                Showing {paginatedCompanies.length === 0 ? 0 : startIndex + 1}–{Math.min(startIndex + ITEMS_PER_PAGE, filteredCompanies.length)} of {filteredCompanies.length} companies
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
                  <option value="jobs">Most Jobs</option>
                  <option value="size">Company Size</option>
                  <option value="recent">Recently Active</option>
                </select>
              </div>
            </div>

            {/* Companies Grid */}
            {paginatedCompanies.length === 0 ? (
              <EmptyState
                icon={Building2}
                title="No companies found"
                description={
                  query || location
                    ? `No companies match "${query || location}". Try adjusting your search.`
                    : 'No companies available at the moment.'
                }
                action={{
                  label: 'Browse All Companies',
                  href: '/companies',
                }}
              />
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {paginatedCompanies.map((company) => (
                    <CompanyCard key={company.id} company={company} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    basePath="/companies"
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