import {
  BS_CALENDAR,
  BS_EPOCH_AD_ISO,
  BS_EPOCH_WEEKDAY,
  BS_MAX_YEAR,
  BS_MIN_YEAR,
  BS_MONTHS_EN,
  BS_MONTHS_NP,
  AD_MONTHS_EN,
  WEEKDAYS_EN,
  WEEKDAYS_NP,
  getDaysInBsMonth,
} from "@/data/bs-calendar-data";

export interface NepaliDate {
  year: number;
  month: number;
  day: number;
  monthName: string;
  monthNameNepali: string;
  weekday: number;
  weekdayName: string;
  weekdayNameNepali: string;
  formatted: string;
  formattedNepali: string;
}

export interface GregorianDate {
  year: number;
  month: number;
  day: number;
  monthName: string;
  weekday: number;
  weekdayName: string;
  iso: string;
  formatted: string;
}

export interface ConversionResult {
  bs: NepaliDate;
  ad: GregorianDate;
}

const NP_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

export function toNepaliNumeral(n: number): string {
  return String(n)
    .split("")
    .map((c) => (/\d/.test(c) ? NP_DIGITS[Number(c)] : c))
    .join("");
}

function utcDate(year: number, month: number, day: number): Date {
  return new Date(Date.UTC(year, month - 1, day));
}

function daysBetweenAdDates(a: Date, b: Date): number {
  const MS_PER_DAY = 86400000;
  return Math.round((b.getTime() - a.getTime()) / MS_PER_DAY);
}

function epochAdDate(): Date {
  const [y, m, d] = BS_EPOCH_AD_ISO.split("-").map(Number);
  return utcDate(y, m, d);
}

export function bsToAd(year: number, month: number, day: number): ConversionResult {
  if (!BS_CALENDAR[year]) {
    throw new Error(
      `BS year ${year} is out of supported range (${BS_MIN_YEAR}-${BS_MAX_YEAR}).`,
    );
  }
  if (month < 1 || month > 12) {
    throw new Error(`BS month must be between 1 and 12.`);
  }
  const monthDays = getDaysInBsMonth(year, month);
  if (day < 1 || day > monthDays) {
    throw new Error(
      `BS day must be between 1 and ${monthDays} for ${BS_MONTHS_EN[month - 1]} ${year}.`,
    );
  }

  let totalDays = 0;
  for (let y = BS_MIN_YEAR; y < year; y++) {
    const data = BS_CALENDAR[y];
    if (!data) throw new Error(`Missing BS calendar data for year ${y}.`);
    for (const d of data) totalDays += d;
  }
  for (let m = 1; m < month; m++) {
    totalDays += getDaysInBsMonth(year, m);
  }
  totalDays += day - 1;

  const ad = new Date(epochAdDate().getTime());
  ad.setUTCDate(ad.getUTCDate() + totalDays);

  const weekday = (BS_EPOCH_WEEKDAY + totalDays) % 7;

  return buildResult(
    { year, month, day, weekday },
    {
      year: ad.getUTCFullYear(),
      month: ad.getUTCMonth() + 1,
      day: ad.getUTCDate(),
      weekday,
    },
  );
}

export function adToBs(year: number, month: number, day: number): ConversionResult {
  const target = utcDate(year, month, day);
  const epoch = epochAdDate();
  let totalDays = daysBetweenAdDates(epoch, target);

  if (totalDays < 0) {
    throw new Error(`AD date is before the supported BS epoch (${BS_EPOCH_AD_ISO}).`);
  }

  let bsYear = BS_MIN_YEAR;
  while (bsYear <= BS_MAX_YEAR) {
    const data = BS_CALENDAR[bsYear];
    if (!data) throw new Error(`Missing BS calendar data for year ${bsYear}.`);
    const yearLen = data.reduce((s, n) => s + n, 0);
    if (totalDays < yearLen) break;
    totalDays -= yearLen;
    bsYear++;
  }
  if (bsYear > BS_MAX_YEAR) {
    throw new Error(`AD date is past supported BS range (max BS ${BS_MAX_YEAR}).`);
  }
  let bsMonth = 1;
  const yearData = BS_CALENDAR[bsYear];
  while (bsMonth <= 12) {
    const monthLen = yearData[bsMonth - 1];
    if (totalDays < monthLen) break;
    totalDays -= monthLen;
    bsMonth++;
  }
  const bsDay = totalDays + 1;

  const totalFromEpoch = daysBetweenAdDates(epoch, target);
  const weekday = (BS_EPOCH_WEEKDAY + totalFromEpoch) % 7;

  return buildResult(
    { year: bsYear, month: bsMonth, day: bsDay, weekday },
    { year, month, day, weekday },
  );
}

function buildResult(
  bs: { year: number; month: number; day: number; weekday: number },
  ad: { year: number; month: number; day: number; weekday: number },
): ConversionResult {
  const monthName = BS_MONTHS_EN[bs.month - 1];
  const monthNameNepali = BS_MONTHS_NP[bs.month - 1];
  const adIso = `${ad.year}-${String(ad.month).padStart(2, "0")}-${String(ad.day).padStart(2, "0")}`;

  return {
    bs: {
      year: bs.year,
      month: bs.month,
      day: bs.day,
      monthName,
      monthNameNepali,
      weekday: bs.weekday,
      weekdayName: WEEKDAYS_EN[bs.weekday],
      weekdayNameNepali: WEEKDAYS_NP[bs.weekday],
      formatted: `${monthName} ${bs.day}, ${bs.year} BS`,
      formattedNepali: `${toNepaliNumeral(bs.day)} ${monthNameNepali} ${toNepaliNumeral(bs.year)}`,
    },
    ad: {
      year: ad.year,
      month: ad.month,
      day: ad.day,
      monthName: AD_MONTHS_EN[ad.month - 1],
      weekday: ad.weekday,
      weekdayName: WEEKDAYS_EN[ad.weekday],
      iso: adIso,
      formatted: `${AD_MONTHS_EN[ad.month - 1]} ${ad.day}, ${ad.year}`,
    },
  };
}

export function getTodayInKathmandu(): ConversionResult {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  const kathmandu = new Date(utcMs + 5.75 * 60 * 60_000);
  return adToBs(
    kathmandu.getFullYear(),
    kathmandu.getMonth() + 1,
    kathmandu.getDate(),
  );
}

export interface CalendarDay {
  bsYear: number;
  bsMonth: number;
  bsDay: number;
  adIso: string;
  weekday: number;
  isHoliday: boolean;
  festival: string | null;
}

export interface CalendarMonth {
  year: number;
  month: number;
  monthName: string;
  monthNameNepali: string;
  daysInMonth: number;
  startWeekday: number;
  days: CalendarDay[];
}

export function getCalendarMonth(
  year: number,
  month: number,
  festivals?: ReadonlyArray<{ bsYear: number; bsMonth: number; bsDay: number; name: string; isPublicHoliday: boolean }>,
): CalendarMonth {
  const daysInMonth = getDaysInBsMonth(year, month);
  const days: CalendarDay[] = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const result = bsToAd(year, month, d);
    const fest = festivals?.find(
      (f) => f.bsYear === year && f.bsMonth === month && f.bsDay === d,
    );
    days.push({
      bsYear: year,
      bsMonth: month,
      bsDay: d,
      adIso: result.ad.iso,
      weekday: result.bs.weekday,
      isHoliday: result.bs.weekday === 6 || Boolean(fest?.isPublicHoliday),
      festival: fest?.name ?? null,
    });
  }
  return {
    year,
    month,
    monthName: BS_MONTHS_EN[month - 1],
    monthNameNepali: BS_MONTHS_NP[month - 1],
    daysInMonth,
    startWeekday: days[0].weekday,
    days,
  };
}

export interface FiscalYearWindow {
  label: string;
  startBs: NepaliDate;
  endBs: NepaliDate;
  startAd: GregorianDate;
  endAd: GregorianDate;
}

export function getFiscalYear(startBsYear: number): FiscalYearWindow {
  const start = bsToAd(startBsYear, 4, 1);
  const endMonthDays = getDaysInBsMonth(startBsYear + 1, 3);
  const end = bsToAd(startBsYear + 1, 3, endMonthDays);
  const shortEnd = String(startBsYear + 1).slice(-2);
  return {
    label: `FY ${startBsYear}/${shortEnd}`,
    startBs: start.bs,
    endBs: end.bs,
    startAd: start.ad,
    endAd: end.ad,
  };
}

export function dateDifferenceDays(fromIso: string, toIso: string): number {
  const a = new Date(fromIso + "T00:00:00Z");
  const b = new Date(toIso + "T00:00:00Z");
  return daysBetweenAdDates(a, b);
}

export function ageFromAd(birthIso: string, asOfIso?: string): {
  years: number;
  months: number;
  days: number;
  totalDays: number;
} {
  const birth = new Date(birthIso + "T00:00:00Z");
  const now = asOfIso
    ? new Date(asOfIso + "T00:00:00Z")
    : new Date(new Date().toISOString().slice(0, 10) + "T00:00:00Z");

  let years = now.getUTCFullYear() - birth.getUTCFullYear();
  let months = now.getUTCMonth() - birth.getUTCMonth();
  let days = now.getUTCDate() - birth.getUTCDate();
  if (days < 0) {
    months--;
    const prevMonth = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 0));
    days += prevMonth.getUTCDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days, totalDays: daysBetweenAdDates(birth, now) };
}

export {
  BS_MIN_YEAR,
  BS_MAX_YEAR,
  BS_MONTHS_EN,
  BS_MONTHS_NP,
  WEEKDAYS_EN,
  WEEKDAYS_NP,
  AD_MONTHS_EN,
  getDaysInBsMonth,
};
