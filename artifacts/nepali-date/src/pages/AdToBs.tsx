import { Seo } from "@/components/Seo";
import { ConverterCard } from "@/components/ConverterCard";

export default function AdToBs() {
  return (
    <>
      <Seo
        title="AD to BS Converter | English Date to Nepali Date"
        description="Convert Gregorian (AD) dates to Nepali Bikram Sambat (BS) instantly. Fast, reliable English to Nepali date converter."
        path="/ad-to-bs-converter"
        breadcrumb={[
          { name: "Home", url: "/" },
          { name: "AD to BS Converter", url: "/ad-to-bs-converter" },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "AD to BS Converter",
          url: "https://npdates.app/ad-to-bs-converter",
          description: "Convert Gregorian (AD) to Bikram Sambat (BS) dates.",
          applicationCategory: "UtilitiesApplication",
        }}
      />

      <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
        <div className="mb-10">
          <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-foreground">
            AD to BS Converter
          </h1>
          <p className="text-lg text-muted-foreground">
            Convert English dates (Gregorian) to Nepali dates (Bikram Sambat) quickly and accurately.
          </p>
        </div>

        <div className="mb-16">
          <ConverterCard initialDirection="AD_TO_BS" />
        </div>

        <article className="prose prose-slate dark:prose-invert prose-headings:font-serif prose-headings:font-bold max-w-none">
          <h2>Why convert AD to BS?</h2>
          <p>
            While the Gregorian calendar (AD) is the international standard, Nepal officially uses the Bikram Sambat (BS) calendar. 
            All government documents, official records, property deeds, and local festivals in Nepal are tracked using BS dates.
          </p>
          <p>
            If you are a Nepali living abroad or a foreigner dealing with Nepali administration, you will frequently need to convert 
            standard AD dates back into their BS equivalents.
          </p>
          
          <h3>How accurate is this converter?</h3>
          <p>
            Our AD to BS converter is 100% accurate within the supported range (1913 AD to 2043 AD). It relies on the official historical tables rather than approximations.
          </p>
        </article>
      </div>
    </>
  );
}
