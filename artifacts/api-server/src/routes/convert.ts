import { Router, type IRouter } from "express";
import {
  ConvertBsToAdQueryParams,
  ConvertBsToAdResponse,
  ConvertAdToBsQueryParams,
  ConvertAdToBsResponse,
  GetTodayResponse,
} from "@workspace/api-zod";
import { adToBs, bsToAd, todayInKathmandu } from "../lib/nepali/converter.js";

const router: IRouter = Router();

router.get("/convert/bs-to-ad", (req, res): void => {
  const parsed = ConvertBsToAdQueryParams.safeParse(req.query);
  if (!parsed.success) {
    const msg = parsed.error.issues.map((i) => i.message).join("; ");
    res.status(400).json({ error: msg });
    return;
  }
  try {
    const result = bsToAd(parsed.data.year, parsed.data.month, parsed.data.day);
    res.json(ConvertBsToAdResponse.parse(result));
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid date";
    req.log.warn({ err: msg }, "BS->AD conversion failed");
    res.status(400).json({ error: msg });
  }
});

router.get("/convert/ad-to-bs", (req, res): void => {
  const parsed = ConvertAdToBsQueryParams.safeParse(req.query);
  if (!parsed.success) {
    const msg = parsed.error.issues.map((i) => i.message).join("; ");
    res.status(400).json({ error: msg });
    return;
  }
  try {
    const result = adToBs(parsed.data.year, parsed.data.month, parsed.data.day);
    res.json(ConvertAdToBsResponse.parse(result));
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Invalid date";
    req.log.warn({ err: msg }, "AD->BS conversion failed");
    res.status(400).json({ error: msg });
  }
});

router.get("/today", (_req, res): void => {
  const result = todayInKathmandu();
  res.json(GetTodayResponse.parse(result));
});

export default router;
