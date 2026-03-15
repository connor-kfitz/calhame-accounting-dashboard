import Link from "next/link";

import { cn } from "@/lib/utils";

interface YearSelectionProps {
  value: number;
  years: number[];
}

export default function YearSelection({ value, years }: YearSelectionProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium text-foreground">Year:</span>
      <div className="flex items-center gap-1">
        {years.map((year) => {
          const selected = value === year;
          return (
            <Link
              key={year}
              href={`?quarter=year&year=${year}`}
              className={cn(
                "px-3 py-1.5 text-sm rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                selected
                  ? "bg-primary text-primary-foreground font-medium"
                  : "bg-secondary hover:bg-secondary/80 text-secondary-foreground"
              )}
            >
              {year}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
