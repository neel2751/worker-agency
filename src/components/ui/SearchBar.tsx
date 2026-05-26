'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, MapPin, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string, location: string) => void;
  defaultQuery?: string;
  defaultLocation?: string;
  action?: 'jobs' | 'workers' | 'projects' | 'companies';
  showSuggestions?: boolean;
}

const SUGGESTED_QUERIES = [
  'Carpenter',
  'Electrician',
  'Plumber',
  'Mason',
  'Welding',
  'Painting',
];

const SUGGESTED_LOCATIONS = [
  'Mumbai',
  'Delhi',
  'Bangalore',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Ahmedabad',
  'Kolkata',
];

export function SearchBar({
  placeholder = 'Search by role, skill, or trade',
  onSearch,
  defaultQuery = '',
  defaultLocation = '',
  action = 'jobs',
  showSuggestions = true,
}: SearchBarProps) {
  const [query, setQuery] = useState(defaultQuery);
  const [location, setLocation] = useState(defaultLocation);
  const [showQuerySuggestions, setShowQuerySuggestions] = useState(false);
  const [showLocationSuggestions, setShowLocationSuggestions] = useState(false);
  const [filteredQuerySuggestions, setFilteredQuerySuggestions] = useState<string[]>([]);
  const [filteredLocationSuggestions, setFilteredLocationSuggestions] = useState<string[]>([]);
  const queryInputRef = useRef<HTMLInputElement>(null);
  const locationInputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (query.trim() && showSuggestions) {
      const filtered = SUGGESTED_QUERIES.filter((s) =>
        s.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredQuerySuggestions(filtered);
      setShowQuerySuggestions(filtered.length > 0);
    } else {
      setShowQuerySuggestions(false);
    }
  }, [query, showSuggestions]);

  useEffect(() => {
    if (location.trim() && showSuggestions) {
      const filtered = SUGGESTED_LOCATIONS.filter((s) =>
        s.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredLocationSuggestions(filtered);
      setShowLocationSuggestions(filtered.length > 0);
    } else {
      setShowLocationSuggestions(false);
    }
  }, [location, showSuggestions]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowQuerySuggestions(false);
        setShowLocationSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (onSearch) {
      onSearch(query, location);
    } else {
      const params = new URLSearchParams();
      if (query) params.set('q', query);
      if (location) params.set('location', location);
      router.push(`/${action}?${params.toString()}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
      setShowQuerySuggestions(false);
      setShowLocationSuggestions(false);
    }
  };

  const selectQuerySuggestion = (suggestion: string) => {
    setQuery(suggestion);
    setShowQuerySuggestions(false);
    queryInputRef.current?.focus();
  };

  const selectLocationSuggestion = (suggestion: string) => {
    setLocation(suggestion);
    setShowLocationSuggestions(false);
    locationInputRef.current?.focus();
  };

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto">
      <div className="rounded-full border border-border/50 bg-background p-2 shadow-lg hover:border-brand-200 transition-all">
        <div className="flex items-center gap-2">
          <div className="relative flex-1">
            <Search size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/60" />
            <Input
              ref={queryInputRef}
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => query.trim() && showSuggestions && setShowQuerySuggestions(true)}
              className="pl-10 pr-4 py-3 bg-transparent border-0 focus:outline-none placeholder:text-foreground/50"
            />
            {showQuerySuggestions && filteredQuerySuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50">
                {filteredQuerySuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => selectQuerySuggestion(suggestion)}
                    className="w-full px-4 py-2 text-left text-sm text-foreground/80 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    <Search size={14} className="inline mr-2" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="h-6 w-px bg-border/30" />

          <div className="relative flex-1 max-w-xs">
            <MapPin size={18} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/60" />
            <Input
              ref={locationInputRef}
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={() => location.trim() && showSuggestions && setShowLocationSuggestions(true)}
              className="pl-10 pr-4 py-3 bg-transparent border-0 focus:outline-none placeholder:text-foreground/50"
            />
            {showLocationSuggestions && filteredLocationSuggestions.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-background border border-border rounded-lg shadow-lg z-50">
                {filteredLocationSuggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => selectLocationSuggestion(suggestion)}
                    className="w-full px-4 py-2 text-left text-sm text-foreground/80 hover:bg-muted transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    <MapPin size={14} className="inline mr-2" />
                    {suggestion}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            onClick={handleSearch}
            className="bg-brand-500 hover:bg-brand-600 text-white rounded-full px-6"
            size="sm"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}