import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { NepaliCalendarYearView, calendarYearMetadata } from "@/components/calendar/NepaliCalendarYearView";

export const metadata: Metadata = buildMetadata(calendarYearMetadata(2085));

export default function CalendarYear2085Page() {
  return <NepaliCalendarYearView year={2085} />;
}
