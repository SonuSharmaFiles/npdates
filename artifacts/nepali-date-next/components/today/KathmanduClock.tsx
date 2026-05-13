"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

export function KathmanduClock() {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const utcMs = now.getTime() + now.getTimezoneOffset() * 60_000;
      const kathmandu = new Date(utcMs + 5.75 * 60 * 60_000);
      setTime(
        kathmandu.toLocaleTimeString("en-US", {
          hour12: true,
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
        }),
      );
    };
    tick();
    const timer = setInterval(tick, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-card border rounded-2xl p-6 shadow-sm hover-elevate">
      <div className="flex items-center gap-3 text-muted-foreground mb-4">
        <Clock className="w-5 h-5" />
        <h3 className="font-medium">Current Time</h3>
      </div>
      <div className="text-3xl font-bold font-mono tracking-tight">
        {time || "Loading..."}
      </div>
    </div>
  );
}
