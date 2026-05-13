"use client";

import { useRouter } from "next/navigation";
import { CalendarGrid } from "@/components/calendar/CalendarGrid";
import { BS_MIN_YEAR, BS_MAX_YEAR, getTodayInKathmandu } from "@/lib/converter";

export function CalendarMonthClient({ year, month }: { year: number; month: number }) {
  const router = useRouter();
  const prevMonth = month === 1 ? 12 : month - 1;
  const prevYear = month === 1 ? year - 1 : year;
  const nextMonth = month === 12 ? 1 : month + 1;
  const nextYear = month === 12 ? year + 1 : year;

  const today = getTodayInKathmandu();
  const isCurrentMonth = year === today.bs.year && month === today.bs.month;

  return (
    <CalendarGrid
      year={year}
      month={month}
      showHeading={false}
      onPrev={() => {
        if (month === 1 && year <= BS_MIN_YEAR) return;
        router.push(`/calendar/${prevYear}/${prevMonth}`);
      }}
      onNext={() => {
        if (month === 12 && year >= BS_MAX_YEAR) return;
        router.push(`/calendar/${nextYear}/${nextMonth}`);
      }}
      onToday={() => router.push(`/calendar/${today.bs.year}/${today.bs.month}`)}
      isCurrentMonth={isCurrentMonth}
    />
  );
}
