import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BS_MIN_YEAR, BS_MAX_YEAR, BS_MONTHS_EN, BS_MONTHS_NP, getDaysInBsMonth } from "@/lib/converter";

interface BsDateSelectorProps {
  date: { year: number; month: number; day: number };
  onChange: (date: { year: number; month: number; day: number }) => void;
}

export function BsDateSelector({ date, onChange }: BsDateSelectorProps) {
  const [daysInMonth, setDaysInMonth] = useState(31);

  useEffect(() => {
    try {
      const days = getDaysInBsMonth(date.year, date.month);
      setDaysInMonth(days);
      if (date.day > days) {
        onChange({ ...date, day: days });
      }
    } catch {
      // Ignore if out of bounds during transition
    }
    // onChange is intentionally excluded: it's stable by convention (parent
    // should wrap in useCallback), and including it would cause infinite loops
    // when the parent re-renders without memoization.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date.year, date.month, date.day]);

  const years = Array.from({ length: BS_MAX_YEAR - BS_MIN_YEAR + 1 }, (_, i) => BS_MAX_YEAR - i);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-3 gap-2">
      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Year</label>
        <Select
          value={date.year.toString()}
          onValueChange={(v) => onChange({ ...date, year: parseInt(v) })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {years.map((y) => (
              <SelectItem key={y} value={y.toString()}>
                {y}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Month</label>
        <Select
          value={date.month.toString()}
          onValueChange={(v) => onChange({ ...date, month: parseInt(v) })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Month" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {BS_MONTHS_EN.map((m, i) => (
              <SelectItem key={i + 1} value={(i + 1).toString()}>
                {m} <span className="text-muted-foreground ml-1 text-xs">{BS_MONTHS_NP[i]}</span>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">Day</label>
        <Select
          value={date.day.toString()}
          onValueChange={(v) => onChange({ ...date, day: parseInt(v) })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Day" />
          </SelectTrigger>
          <SelectContent className="max-h-[300px]">
            {days.map((d) => (
              <SelectItem key={d} value={d.toString()}>
                {d}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
