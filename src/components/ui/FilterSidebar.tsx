'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { ChevronDown, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterGroup {
  id: string;
  label: string;
  type: 'checkbox' | 'radio' | 'range' | 'search';
  options?: FilterOption[];
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}

interface FilterSidebarProps {
  filters: FilterGroup[];
  activeFilters: Record<string, string | string[] | number[]>;
  onChange?: (filters: Record<string, string | string[] | number[]>) => void;
  basePath: string;
  currentParams: URLSearchParams;
}

export function FilterSidebar({
  filters,
  activeFilters,
  onChange,
  basePath,
  currentParams,
}: FilterSidebarProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(filters.map((f) => f.id))
  );
  const [localFilters, setLocalFilters] = useState(activeFilters);
  const router = useRouter();

  const toggleGroup = (id: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedGroups(newExpanded);
  };

  const handleCheckboxChange = (groupId: string, optionId: string, checked: boolean) => {
    const current = (localFilters[groupId] as string[]) || [];
    let updated: string[];

    if (checked) {
      updated = [...current, optionId];
    } else {
      updated = current.filter((id) => id !== optionId);
    }

    const newFilters = { ...localFilters, [groupId]: updated };
    setLocalFilters(newFilters);
    if (onChange) onChange(newFilters);
    updateUrl(newFilters);
  };

  const handleRadioChange = (groupId: string, optionId: string) => {
    const newFilters = { ...localFilters, [groupId]: optionId };
    setLocalFilters(newFilters);
    if (onChange) onChange(newFilters);
    updateUrl(newFilters);
  };

  const handleRangeChange = (groupId: string, values: number[]) => {
    const newFilters = { ...localFilters, [groupId]: values };
    setLocalFilters(newFilters);
    if (onChange) onChange(newFilters);
    updateUrl(newFilters);
  };

  const handleSearchChange = (groupId: string, value: string) => {
    const newFilters = { ...localFilters, [groupId]: value };
    setLocalFilters(newFilters);
    if (onChange) onChange(newFilters);
    updateUrl(newFilters);
  };

  const updateUrl = (filters: Record<string, string | string[] | number[]>) => {
    const params = new URLSearchParams(currentParams);
    
    Object.entries(filters).forEach(([key, value]) => {
      params.delete(key);
      if (Array.isArray(value)) {
        if (value.length > 0) {
          params.set(key, value.join(','));
        }
      } else if (value !== '' && value !== undefined) {
        params.set(key, String(value));
      }
    });

    const queryString = params.toString();
    router.push(`${basePath}${queryString ? `?${queryString}` : ''}`);
  };

  const handleReset = () => {
    const emptyFilters: Record<string, string | string[] | number[]> = {};
    filters.forEach((f) => {
      if (f.type === 'checkbox') {
        emptyFilters[f.id] = [];
      } else if (f.type === 'range') {
        emptyFilters[f.id] = [f.min || 0, f.max || 100];
      } else {
        emptyFilters[f.id] = '';
      }
    });
    setLocalFilters(emptyFilters);
    if (onChange) onChange(emptyFilters);
    router.push(basePath);
  };

  const hasActiveFilters = Object.values(localFilters).some((v) => {
    if (Array.isArray(v)) return v.length > 0;
    return v !== '' && v !== undefined;
  });

  return (
    <div className="sticky top-24 w-full max-w-xs space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Filters</h3>
        {hasActiveFilters && (
          <button
            onClick={handleReset}
            className="text-xs text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium flex items-center gap-1"
          >
            <X size={14} /> Reset
          </button>
        )}
      </div>

      {/* Filter Groups */}
      <div className="space-y-3">
        {filters.map((group) => (
          <div key={group.id} className="border border-border/50 rounded-lg overflow-hidden">
            <button
              onClick={() => toggleGroup(group.id)}
              className="w-full px-4 py-3 flex items-center justify-between hover:bg-muted/50 transition-colors"
            >
              <span className="font-medium text-sm text-foreground">{group.label}</span>
              <ChevronDown
                size={16}
                className={cn(
                  'transition-transform',
                  expandedGroups.has(group.id) ? 'rotate-180' : ''
                )}
              />
            </button>

            {expandedGroups.has(group.id) && (
              <div className="px-4 py-3 border-t border-border/30 space-y-3 bg-background/50">
                {group.type === 'checkbox' && (
                  <div className="space-y-2">
                    {group.options?.map((option) => (
                      <div key={option.id} className="flex items-center gap-2">
                        <Checkbox
                          id={`${group.id}-${option.id}`}
                          checked={
                            Array.isArray(localFilters[group.id]) &&
                            (localFilters[group.id] as string[]).includes(option.id)
                          }
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(group.id, option.id, checked as boolean)
                          }
                        />
                        <Label
                          htmlFor={`${group.id}-${option.id}`}
                          className="text-sm text-foreground/80 cursor-pointer"
                        >
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                )}

                {group.type === 'radio' && (
                  <RadioGroup
                    value={String(localFilters[group.id] || '')}
                    onValueChange={(value) => handleRadioChange(group.id, value)}
                  >
                    <div className="space-y-2">
                      {group.options?.map((option) => (
                        <div key={option.id} className="flex items-center gap-2">
                          <RadioGroupItem
                            value={option.id}
                            id={`${group.id}-${option.id}`}
                          />
                          <Label
                            htmlFor={`${group.id}-${option.id}`}
                            className="text-sm text-foreground/80 cursor-pointer"
                          >
                            {option.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                )}

                {group.type === 'range' && (
                  <div className="space-y-3">
                    <Slider
                      min={group.min || 0}
                      max={group.max || 100}
                      step={group.step || 1}
                      value={(localFilters[group.id] as number[]) || [group.min || 0, group.max || 100]}
                      onValueChange={(value) => handleRangeChange(group.id, value)}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between text-xs text-foreground/60">
                      <span>
                        ₹{((localFilters[group.id] as number[])?.[0] || group.min || 0).toLocaleString('en-IN')}
                      </span>
                      <span>
                        ₹{((localFilters[group.id] as number[])?.[1] || group.max || 100).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                )}

                {group.type === 'search' && (
                  <Input
                    type="text"
                    placeholder={group.placeholder || 'Search...'}
                    value={(localFilters[group.id] as string) || ''}
                    onChange={(e) => handleSearchChange(group.id, e.target.value)}
                    className="text-sm"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}