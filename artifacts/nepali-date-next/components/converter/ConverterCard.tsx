"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { BsDateSelector } from "./BsDateSelector";
import { AdDateSelector } from "./AdDateSelector";
import { bsToAd, adToBs, getTodayInKathmandu, type ConversionResult } from "@/lib/converter";
import { Button } from "@/components/ui/button";
import { ArrowRightLeft, Copy, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

type Direction = "BS_TO_AD" | "AD_TO_BS";

interface HistoryItem {
  id: string;
  from: string;
  to: string;
  direction: Direction;
  timestamp: number;
}

export function ConverterCard({ initialDirection = "BS_TO_AD" }: { initialDirection?: Direction }) {
  const router = useRouter();
  const [direction, setDirection] = useState<Direction>(initialDirection);

  const today = getTodayInKathmandu();
  const [bsDate, setBsDate] = useState({ year: today.bs.year, month: today.bs.month, day: today.bs.day });
  const [adDate, setAdDate] = useState({ year: today.ad.year, month: today.ad.month, day: today.ad.day });

  const [copied, setCopied] = useState(false);

  // Compute synchronously so the very first render (SSR + initial client) shows
  // a real conversion — not "Invalid date combination" until the effect fires.
  const result: ConversionResult | null = useMemo(() => {
    try {
      if (direction === "BS_TO_AD") return bsToAd(bsDate.year, bsDate.month, bsDate.day);
      return adToBs(adDate.year, adDate.month, adDate.day);
    } catch {
      return null;
    }
  }, [direction, bsDate, adDate]);

  const [history, setHistory] = useState<HistoryItem[]>([]);
  useEffect(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("nd:history") : null;
    if (saved) {
      try {
        setHistory(JSON.parse(saved));
      } catch {}
    }
  }, []);

  const addToHistory = useCallback((res: ConversionResult, dir: Direction) => {
    const item: HistoryItem = {
      id: Math.random().toString(36).substring(7),
      from: dir === "BS_TO_AD" ? res.bs.formatted : res.ad.formatted,
      to: dir === "BS_TO_AD" ? res.ad.formatted : res.bs.formatted,
      direction: dir,
      timestamp: Date.now(),
    };
    setHistory((prev) => {
      const updated = [item, ...prev].slice(0, 5);
      localStorage.setItem("nd:history", JSON.stringify(updated));
      return updated;
    });
  }, []);


  const handleCopy = () => {
    if (!result) return;
    const text = direction === "BS_TO_AD"
      ? `${result.bs.formatted} = ${result.ad.formatted}`
      : `${result.ad.formatted} = ${result.bs.formatted}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const switchDirection = () => {
    setDirection((prev) => (prev === "BS_TO_AD" ? "AD_TO_BS" : "BS_TO_AD"));
  };

  const handleNavigate = () => {
    if (!result) return;
    addToHistory(result, direction);
    if (direction === "BS_TO_AD") {
      router.push(`/bs-to-ad/${result.bs.year}/${result.bs.month}/${result.bs.day}`);
    } else {
      router.push(`/ad-to-bs/${result.ad.year}/${result.ad.month}/${result.ad.day}`);
    }
  };

  return (
    <div className="bg-card border rounded-2xl shadow-sm overflow-hidden">
      <div className="flex border-b">
        <button
          onClick={() => setDirection("BS_TO_AD")}
          className={`flex-1 py-4 text-sm font-semibold transition-colors ${
            direction === "BS_TO_AD" ? "bg-primary/5 text-primary border-b-2 border-primary" : "text-muted-foreground hover:bg-muted/50"
          }`}
        >
          BS to AD
        </button>
        <button
          onClick={() => setDirection("AD_TO_BS")}
          className={`flex-1 py-4 text-sm font-semibold transition-colors ${
            direction === "AD_TO_BS" ? "bg-primary/5 text-primary border-b-2 border-primary" : "text-muted-foreground hover:bg-muted/50"
          }`}
        >
          AD to BS
        </button>
      </div>

      <div className="p-6 md:p-8">
        <div className="mb-6">
          <h2 className="font-serif font-bold text-xl mb-4">
            {direction === "BS_TO_AD" ? "Enter Bikram Sambat Date" : "Enter Gregorian (AD) Date"}
          </h2>
          {direction === "BS_TO_AD" ? (
            <BsDateSelector date={bsDate} onChange={setBsDate} />
          ) : (
            <AdDateSelector date={adDate} onChange={setAdDate} />
          )}
        </div>

        <div className="relative py-4 my-2">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-border"></div>
          </div>
          <div className="relative flex justify-center">
            <button
              onClick={switchDirection}
              className="bg-background border border-border text-muted-foreground rounded-full p-2 hover:text-primary hover:border-primary transition-colors hover-elevate"
              aria-label="Switch conversion direction"
            >
              <ArrowRightLeft className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-6 bg-muted/30 rounded-xl p-6 border text-center relative overflow-hidden group">
          {result ? (
            <>
              <p className="text-sm font-medium text-muted-foreground mb-1 uppercase tracking-wider">
                {direction === "BS_TO_AD" ? "Gregorian (AD) Date" : "Bikram Sambat (BS) Date"}
              </p>
              <div className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
                {direction === "BS_TO_AD" ? result.ad.formatted : result.bs.formatted}
              </div>
              <div className="text-lg text-muted-foreground flex items-center justify-center gap-2">
                <span>{direction === "BS_TO_AD" ? result.ad.weekdayName : `${result.bs.weekdayNameNepali} / ${result.bs.weekdayName}`}</span>
              </div>

              <div className="mt-6 flex justify-center gap-3">
                <Button variant="outline" onClick={handleCopy} className="gap-2">
                  {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? "Copied" : "Copy"}
                </Button>
                <Button onClick={handleNavigate} className="gap-2">View Details</Button>
              </div>
            </>
          ) : (
            <div className="py-8 text-muted-foreground">Invalid date combination. Please adjust your selection.</div>
          )}
        </div>

        {history.length > 0 && (
          <div className="mt-8 pt-6 border-t">
            <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Recent Conversions</h4>
            <div className="space-y-2">
              {history.map((h) => (
                <div key={h.id} className="flex justify-between items-center text-sm p-2 rounded hover:bg-muted/50 transition">
                  <span className="text-muted-foreground">{h.from}</span>
                  <ArrowRightLeft className="w-3 h-3 text-muted-foreground/50 mx-2 flex-shrink-0" />
                  <span className="font-medium">{h.to}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
