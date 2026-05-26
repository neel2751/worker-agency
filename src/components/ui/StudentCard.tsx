import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, BookOpen, Briefcase, Award } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface Student {
  id: string;
  slug: string;
  name: string;
  institution: string;
  course: string;
  year: string;
  skills: string[];
  avatar: string;
  availability: string;
}

interface StudentCardProps {
  student: Student;
}

export function StudentCard({ student }: StudentCardProps) {
  const displayedSkills = student.skills.slice(0, 3);
  const hiddenSkillsCount = Math.max(0, student.skills.length - 3);

  return (
    <Link href={`/students/${student.slug}`}>
      <div className="rounded-xl border border-border/50 bg-background p-6 hover:border-brand-200 hover:shadow-card-hover transition-all cursor-pointer group">
        <div className="flex items-start gap-4 mb-4">
          <div className="relative w-16 h-16 shrink-0">
            <Image
              src={student.avatar}
              alt={student.name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-600 transition-colors mb-1">
              {student.name}
            </h3>
            <p className="text-sm text-foreground/70">
              {student.course}
            </p>
          </div>
        </div>

        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center gap-2 text-foreground/70">
            <BookOpen size={16} className="shrink-0" />
            <span>{student.institution}</span>
          </div>
          <div className="flex items-center gap-2 text-foreground/70">
            <Award size={16} className="shrink-0" />
            <span>Year {student.year}</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-xs">
              {student.availability}
            </Badge>
          </div>
        </div>

        <div className="mb-4">
          <p className="text-xs text-foreground/60 font-medium mb-2">Skills</p>
          <div className="flex flex-wrap gap-1.5">
            {displayedSkills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-muted/50 text-xs text-foreground/70 border border-border/30"
              >
                {skill}
              </span>
            ))}
            {hiddenSkillsCount > 0 && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs text-foreground/60">
                +{hiddenSkillsCount}
              </span>
            )}
          </div>
        </div>

        <Button className="w-full bg-brand-500 hover:bg-brand-600 text-white">
          View Profile
        </Button>
      </div>
    </Link>
  );
}