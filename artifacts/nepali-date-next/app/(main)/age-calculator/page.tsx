import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AgeCalculatorForm } from "@/components/converter/AgeCalculatorForm";

export const metadata: Metadata = buildMetadata({
  title: "Nepali Age Calculator — Calculate Age in BS or AD",
  description:
    "Calculate your exact age in years, months, and days from a Bikram Sambat (BS) or Gregorian (AD) date of birth. Includes total days, weeks and next birthday countdown.",
  path: "/age-calculator",
  keywords: ["age calculator", "Nepali age calculator", "BS date of birth", "umer hisab"],
});

export default function AgeCalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-10 max-w-5xl">
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Age Calculator", path: "/age-calculator" }]} />

      <header className="mt-6 mb-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Age Calculator</h1>
        <p className="text-muted-foreground mt-3 text-lg">
          Calculate your exact age from any BS or AD date of birth.
        </p>
      </header>

      <AgeCalculatorForm />

      <section className="mt-14 max-w-3xl prose prose-neutral dark:prose-invert">
        <h2>How the age calculator works</h2>
        <p>
          Enter your date of birth in either Bikram Sambat or Gregorian format. We convert your BS
          date to its exact AD equivalent and calculate the difference to today's date in{" "}
          <strong>Asia/Kathmandu</strong> time. The result gives you a complete picture: years,
          months, days, and several useful totals — perfect for filling government forms, school
          applications or just satisfying curiosity.
        </p>
        <h2>Why does the BS year matter?</h2>
        <p>
          Many official documents in Nepal (citizenship, passports, school transcripts) use Bikram
          Sambat. Using the right calendar removes the common one-year-off mistake when converting
          birth dates between systems.
        </p>
      </section>
    </div>
  );
}
