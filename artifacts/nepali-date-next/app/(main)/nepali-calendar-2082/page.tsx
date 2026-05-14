import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { NepaliCalendarYearView, calendarYearMetadata } from "@/components/calendar/NepaliCalendarYearView";

export const metadata: Metadata = buildMetadata(calendarYearMetadata(2082));

export default function CalendarYear2082Page() {
  return <NepaliCalendarYearView year={2082} />;
}
