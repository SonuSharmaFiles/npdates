import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AD_MONTHS_EN } from "@/lib/converter";

interface AdDateSelectorProps {
  date: { year: number; month: number; day: number };
  onChange: (date: { year: number; month: number; day: number }) => void;
}

export function AdDateSelector({ date, onChange }: AdDateSelectorProps) {
  const [daysInMonth, setDaysInMonth] = useState(31);

  useEffect(() => {
    const isLeap =
      (date.year % 4 === 0 && date.year % 100 !== 0) || date.year % 400 === 0;
    const daysPerMonth = [
      31, isLeap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
    ];
    const days = daysPerMonth[date.month - 1] ?? 31;
    setDaysInMonth(days);
    if (date.day > days) {
      onChange({ ...date, day: days });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date.year, date.month, date.day]);

  // Support typical AD dates mapping to our BS range (~1913 to 2043)
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 140 }, (_, i) => currentYear + 50 - i);
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
            {AD_MONTHS_EN.map((m, i) => (
              <SelectItem key={i + 1} value={(i + 1).toString()}>
                {m}
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
