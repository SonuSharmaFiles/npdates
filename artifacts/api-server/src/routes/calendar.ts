import { Router, type IRouter } from "express";
import {
  GetCalendarMonthParams,
  GetCalendarMonthResponse,
  ListFestivalsParams,
  ListFestivalsResponse,
  GetFiscalYearParams,
  GetFiscalYearResponse,
} from "@workspace/api-zod";
import {
  getCalendarMonth,
  getFiscalYear,
} from "../lib/nepali/converter.js";
import {
  festivalForBsDate,
  festivalsForYearWithAd,
} from "../lib/nepali/festivals.js";

const router: IRouter = Router();

router.get("/calendar/:year/:month", (req, res): void => {
  const parsed = GetCalendarMonthParams.safeParse(req.params);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  try {
    const month = getCalendarMonth(parsed.data.year, parsed.data.month);
    const enriched = {
      ...month,
      days: month.days.map((d) => {
        const fest = festivalForBsDate(d.bsYear, d.bsMonth, d.bsDay);
        return {
          ...d,
          isHoliday: d.weekday === 6 || Boolean(fest?.isPublicHoliday),
          festival: fest?.name ?? null,
        };
      }),
    };
    res.json(GetCalendarMonthResponse.parse(enriched));
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid month";
    req.log.warn({ err: msg }, "Calendar month failed");
    res.status(400).json({ error: msg });
  }
});

router.get("/festivals/:year", (req, res): void => {
  const parsed = ListFestivalsParams.safeParse(req.params);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  const list = festivalsForYearWithAd(parsed.data.year);
  res.json(ListFestivalsResponse.parse(list));
});

router.get("/fiscal-year/:year", (req, res): void => {
  const parsed = GetFiscalYearParams.safeParse(req.params);
  if (!parsed.success) {
    res.status(400).json({ error: parsed.error.message });
    return;
  }
  try {
    const fy = getFiscalYear(parsed.data.year);
    res.json(GetFiscalYearResponse.parse(fy));
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid year";
    req.log.warn({ err: msg }, "Fiscal year failed");
    res.status(400).json({ error: msg });
  }
});

export default router;
