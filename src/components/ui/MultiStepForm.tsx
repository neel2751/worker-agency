'use client';

import { Button } from '@/components/ui/button';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface FormStep {
  title: string;
  description?: string;
}

interface MultiStepFormProps {
  steps: FormStep[];
  currentStep: number;
  onStepChange: (step: number) => void;
  onSubmit: () => void;
  children: ReactNode;
  isLoading?: boolean;
}

export function MultiStepForm({
  steps,
  currentStep,
  onStepChange,
  onSubmit,
  children,
  isLoading = false,
}: MultiStepFormProps) {
  const canGoPrev = currentStep > 0;
  const canGoNext = currentStep < steps.length - 1;
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = () => {
    if (canGoNext) {
      onStepChange(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (canGoPrev) {
      onStepChange(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-center flex-1">
              {/* Step Circle */}
              <button
                onClick={() => onStepChange(idx)}
                disabled={idx > currentStep}
                className={cn(
                  'w-10 h-10 rounded-full font-semibold flex items-center justify-center transition-all shrink-0',
                  idx === currentStep
                    ? 'bg-brand-500 text-white shadow-lg'
                    : idx < currentStep
                    ? 'bg-green-500 text-white'
                    : 'bg-muted text-foreground/60 cursor-not-allowed'
                )}
              >
                {idx < currentStep ? '✓' : idx + 1}
              </button>

              {/* Connector Line */}
              {idx < steps.length - 1 && (
                <div className="flex-1 h-1 mx-2 bg-border rounded-full">
                  <div
                    className={cn(
                      'h-full rounded-full transition-all',
                      idx < currentStep ? 'bg-green-500 w-full' : 'bg-transparent w-0'
                    )}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Labels */}
        <div className="flex justify-between gap-2">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={cn(
                'text-xs text-center flex-1',
                idx === currentStep ? 'text-foreground font-semibold' : 'text-foreground/60'
              )}
            >
              <p className="font-medium">{step.title}</p>
              {step.description && (
                <p className="text-xs text-foreground/50 mt-0.5">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8 min-h-96 p-6 rounded-xl border border-border/50 bg-background">
        {children}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between gap-4">
        <Button
          variant="outline"
          onClick={handlePrev}
          disabled={!canGoPrev || isLoading}
          size="lg"
        >
          <ChevronLeft size={18} className="mr-2" />
          Previous
        </Button>

        <div className="text-sm text-foreground/60">
          Step {currentStep + 1} of {steps.length}
        </div>

        {isLastStep ? (
          <Button
            onClick={handleSubmit}
            disabled={isLoading}
            className="bg-brand-500 hover:bg-brand-600 text-white"
            size="lg"
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        ) : (
          <Button
            onClick={handleNext}
            disabled={!canGoNext || isLoading}
            className="bg-brand-500 hover:bg-brand-600 text-white"
            size="lg"
          >
            Next
            <ChevronRight size={18} className="ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}