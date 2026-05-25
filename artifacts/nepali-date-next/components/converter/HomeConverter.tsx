"use client";

import { useState } from "react";
import { ConverterCard } from "./ConverterCard";

type Direction = "BS_TO_AD" | "AD_TO_BS";

export function HomeConverter() {
  const [direction, setDirection] = useState<Direction>("BS_TO_AD");
  const isBs = direction === "BS_TO_AD";

  return (
    <>
      <header className="mb-10">
        <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
          {isBs ? "BS to AD Converter" : "AD to BS Converter"}
        </h1>
        <p className="text-lg text-muted-foreground">
          {isBs
            ? "Convert Nepali dates (Bikram Sambat) to English dates (Gregorian) with absolute precision."
            : "Convert English dates (Gregorian) to Nepali dates (Bikram Sambat) with absolute precision."}
        </p>
      </header>

      <div className="mb-16">
        <ConverterCard initialDirection="BS_TO_AD" onDirectionChange={setDirection} />
      </div>
    </>
  );
}
