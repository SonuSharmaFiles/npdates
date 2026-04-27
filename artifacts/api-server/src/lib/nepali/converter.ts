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
} from "./bs-calendar-data.js";

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

function toNepaliNumeral(n: number): string {
  return String(n)
    .split("")
    .map((c) => (/\d/.test(c) ? NP_DIGITS[Number(c)] : c))
    .join("");
}

function utcDate(year: number, month: number, day: number): Date {
  return new Date(Date.UTC(year, month - 1, day));
}

function daysBetween(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / 86400000);
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
  const monthDays = getDaysInBsMonth(year, month);
  if (day < 1 || day > monthDays) {
    throw new Error(
      `BS day must be between 1 and ${monthDays} for ${BS_MONTHS_EN[month - 1]} ${year}.`,
    );
  }
  let totalDays = 0;
  for (let y = BS_MIN_YEAR; y < year; y++) {
    for (const d of BS_CALENDAR[y]) totalDays += d;
  }
  for (let m = 1; m < month; m++) {
    totalDays += getDaysInBsMonth(year, m);
  }
  totalDays += day - 1;

  const ad = new Date(epochAdDate().getTime());
  ad.setUTCDate(ad.getUTCDate() + totalDays);
  const weekday = (BS_EPOCH_WEEKDAY + totalDays) % 7;

  return build(
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
  let totalDays = daysBetween(epoch, target);
  if (totalDays < 0) {
    throw new Error(
      `AD date is before the supported BS epoch (${BS_EPOCH_AD_ISO}).`,
    );
  }
  let bsYear = BS_MIN_YEAR;
  while (bsYear <= BS_MAX_YEAR) {
    const yearLen = BS_CALENDAR[bsYear].reduce((s, n) => s + n, 0);
    if (totalDays < yearLen) break;
    totalDays -= yearLen;
    bsYear++;
  }
  if (bsYear > BS_MAX_YEAR) {
    throw new Error(
      `AD date is past supported BS range (max BS ${BS_MAX_YEAR}).`,
    );
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
  const totalFromEpoch = daysBetween(epoch, target);
  const weekday = (BS_EPOCH_WEEKDAY + totalFromEpoch) % 7;
  return build(
    { year: bsYear, month: bsMonth, day: bsDay, weekday },
    { year, month, day, weekday },
  );
}

function build(
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

export function todayInKathmandu(): ConversionResult {
  const now = new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
  const kathmandu = new Date(utcMs + 5.75 * 60 * 60_000);
  return adToBs(
    kathmandu.getFullYear(),
    kathmandu.getMonth() + 1,
    kathmandu.getDate(),
  );
}

export function getCalendarMonth(year: number, month: number) {
  const daysInMonth = getDaysInBsMonth(year, month);
  const days = [];
  for (let d = 1; d <= daysInMonth; d++) {
    const r = bsToAd(year, month, d);
    days.push({
      bsYear: year,
      bsMonth: month,
      bsDay: d,
      adIso: r.ad.iso,
      weekday: r.bs.weekday,
      isHoliday: r.bs.weekday === 6,
      festival: null as string | null,
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

export function getFiscalYear(startBsYear: number) {
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
