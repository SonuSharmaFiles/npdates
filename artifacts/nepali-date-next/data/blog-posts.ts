export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  readingMinutes: number;
  publishedIso: string;
  body: string; // Markdown-style HTML
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "what-is-bikram-sambat",
    title: "What is Bikram Sambat? A complete guide to Nepal's official calendar",
    description: "Bikram Sambat (BS) is Nepal's official solar calendar, running about 56 years and 8 months ahead of the Gregorian AD calendar. Learn its origin, structure, and modern use.",
    readingMinutes: 7,
    publishedIso: "2025-09-12",
    body: `<p><strong>Bikram Sambat</strong> (Devanagari: विक्रम सम्बत, abbreviated <strong>BS</strong> or <strong>B.S.</strong>) is the official solar calendar of Nepal. It is named after the legendary king Vikramaditya and pre-dates the Gregorian (AD) calendar by approximately 56 years and 8 months. While much of the world organises civic life by the Western calendar, Nepalis schedule their fiscal year, school terms, government deadlines, religious festivals, and a large share of daily life by BS.</p>

<p>If you have ever looked at a Nepali citizenship card, a school certificate, or a property document and seen a date like <em>15 Shrawan 2078</em>, you have already met Bikram Sambat. This guide explains where the calendar came from, how it is put together, why it still runs Nepal's civic clock, and how you can move between BS and AD without making the classic mistakes.</p>

<h2>A short history of Bikram Sambat</h2>
<p>The Bikram Sambat era starts in 57 BCE. Tradition attributes the start of the era to King Vikramaditya of Ujjain, who is said to have inaugurated the calendar after a military victory. The historical record is thinner than the legend, but the era has been in continuous use across parts of South Asia for more than two thousand years.</p>

<p>In Nepal, Bikram Sambat was formally adopted as the official calendar in the early twentieth century during the Rana administration, replacing the older Shaka Sambat in government use. Since then it has remained the calendar of record for the state — every government office, every tax return, every gazette notice, and every civil document in Nepal carries a BS date as its primary timestamp.</p>

<h2>How the calendar is structured</h2>
<p>Bikram Sambat is a <strong>sidereal solar calendar</strong>. That phrase is worth unpacking, because it explains almost everything that surprises newcomers about how BS behaves.</p>

<ul>
<li><strong>Solar</strong> means the year is tied to the sun's apparent motion through the sky — specifically, to the time it takes the sun to return to the same position relative to the fixed stars.</li>
<li><strong>Sidereal</strong> means the reference frame is the fixed stars (the zodiac), not the equinoxes. This makes BS roughly 24 minutes longer per year than the tropical Gregorian year.</li>
<li>Each of the twelve months begins when the sun enters a new zodiac sign (rashi). Because the sun does not spend exactly the same number of days in each sign, the months are not all the same length.</li>
</ul>

<p>The result is a calendar in which a single month can be 29, 30, 31, or even 32 days long, and the length of any given month varies slightly from year to year. This is unlike the Gregorian calendar, where January is always 31 days and April is always 30. The annual <em>patro</em> — Nepal's published almanac — sets out the exact month lengths for the year ahead.</p>

<h2>The twelve Nepali months</h2>
<p>In order, the months are <strong>Baisakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, and Chaitra</strong>. In Devanagari they are written बैशाख, जेठ, असार, साउन, भदौ, असोज, कार्तिक, मंसिर, पुस, माघ, फाल्गुन, चैत. The year begins on <strong>1 Baisakh</strong>, which falls in mid-April of the Gregorian calendar — most commonly on 13 or 14 April.</p>

<p>If you would like a fuller tour of the months — their names, average lengths, and the festivals each contains — see our piece on <a href="/blog/nepali-months-in-order/">the 12 Nepali months in order</a>.</p>

<h2>Why does Nepal still use Bikram Sambat?</h2>
<p>Most countries that historically used regional calendars have shifted to Gregorian for civic life. India did so in 1957 for administrative use. Nepal kept Bikram Sambat for several reasons:</p>

<ul>
<li><strong>Astronomical accuracy.</strong> The sidereal solar method tracks seasons reliably, which matters for an agrarian society planning sowing and harvest.</li>
<li><strong>Cultural identity.</strong> BS is woven into festivals, naming ceremonies, weddings, and rituals. Replacing it would touch far more than civil paperwork.</li>
<li><strong>Institutional inertia.</strong> Once every law, contract, and historical record is written in BS, a switch becomes prohibitively expensive.</li>
</ul>

<p>In practice modern Nepalis use both calendars in parallel. A schoolchild knows that the new academic session starts in Baisakh; a software developer knows that an international flight leaves on a specific Gregorian date; a government clerk knows that a tender deadline is set in BS. The two calendars sit comfortably side by side.</p>

<h2>The most common conversion confusion</h2>
<p>Many newcomers (and quite a few Nepalis) assume that adding 56 or 57 to an AD year always gives the correct BS year. This is only roughly correct. Because the BS new year falls in mid-April:</p>

<ul>
<li>From <strong>mid-April to 31 December</strong>, the offset is generally <strong>+57</strong> (e.g. 1 June 2025 AD = 18 Jestha 2082 BS).</li>
<li>From <strong>1 January to mid-April</strong>, the offset is generally <strong>+56</strong> (e.g. 1 January 2026 AD = 17 Poush 2082 BS, not 2083).</li>
</ul>

<p>Because the cut-over date drifts by a day or two each year, the only reliable approach is to use a converter that consults a table of month lengths. Our <a href="/ad-to-bs-converter/">AD to BS converter</a> handles this correctly, and the reverse <a href="/">BS to AD converter</a> is the home page. For the detailed mechanics, see <a href="/blog/how-bs-to-ad-conversion-works/">how BS to AD conversion actually works</a>.</p>

<h2>Where you will see BS in daily life</h2>
<p>Bikram Sambat shows up on far more documents than most outsiders expect:</p>

<ul>
<li>Citizenship certificates (nagarikta)</li>
<li>Passports — printed in both BS and AD</li>
<li>School-leaving certificates (SLC / SEE) and transcripts</li>
<li>University admit cards and result sheets</li>
<li>Government tenders and gazette notices</li>
<li>Tax filings and PAN-related documents</li>
<li>Property registration and land ownership documents (lalpurja)</li>
<li>Marriage certificates and birth certificates</li>
<li>Bank statements from state-owned banks</li>
</ul>

<p>For Nepalis living abroad — and for foreigners working with Nepali partners — the practical need is to translate between BS and AD quickly and accurately. That is what tools like our <a href="/age-calculator/">age calculator</a> and <a href="/date-difference/">date-difference tool</a> exist for. For developers, the same logic is available through our <a href="/api-docs/">JSON API</a>.</p>

<h2>Frequently asked questions</h2>
<h3>Is Bikram Sambat the same as Vikram Samvat used in India?</h3>
<p>They share the same era and name, but the regional implementations diverge slightly. Indian states that still observe Vikram Samvat (mainly for religious calendars) use somewhat different month-length conventions and sometimes a different new-year day. Nepal's Bikram Sambat is the version used in Nepali civic life.</p>

<h3>How accurate is the BS calendar over long periods?</h3>
<p>Because BS is sidereal, it drifts very slowly relative to the seasons — about 24 minutes per year compared to the tropical Gregorian year. Over a single human lifetime the drift is invisible. Over centuries the months would drift, but the annual recalculation by the Calendar Determination Committee keeps practical use accurate.</p>

<h3>Can I write a BS date on an international document?</h3>
<p>No. International forms, visa applications, foreign universities, and banks all want AD dates. Convert before you submit. For specific guidance, see our notes on <a href="/blog/bs-date-for-visa-application/">BS dates for visa applications</a> and <a href="/blog/how-to-convert-date-of-birth-bs-to-ad/">converting your date of birth</a>.</p>

<h3>Does the BS year ever skip or repeat?</h3>
<p>No. Like any solar calendar, BS years run consecutively. The year after 2082 is 2083, and the year after that is 2084. There are no leap years in the Gregorian sense, but month lengths absorb the extra fractional days each year.</p>

<h3>Where can I see today's BS date?</h3>
<p>Our <a href="/today-nepali-date/">today in Nepali date</a> page shows the current BS date alongside the Gregorian date and the day of the week.</p>

<h2>Practical takeaway</h2>
<p>Bikram Sambat is not a quirky historical relic — it is the live, primary calendar of the Nepali state and Nepali daily life. If you work with Nepali documents, hire Nepali staff, do business with Nepali institutions, or just want to wish a Nepali friend a happy new year on the right day, learning to read BS dates and using a reliable converter is a small investment that pays off every time. Keep our <a href="/">BS to AD converter</a> bookmarked, and you will rarely be caught out by the mid-April year boundary again.</p>`,
  },
  {
    slug: "how-bs-to-ad-conversion-works",
    title: "How BS to AD conversion actually works (and why it's tricky)",
    description: "Behind every Nepali date converter sits a hand-curated table of month lengths. Learn the algorithm, the data sources, and where naive year arithmetic goes wrong.",
    readingMinutes: 7,
    publishedIso: "2025-09-22",
    body: `<p>Converting between Bikram Sambat (BS) and the Gregorian calendar (AD) sounds like the sort of problem you should be able to solve with a one-line formula. In reality, every reliable Nepali date converter — including ours — sits on top of a hand-curated table that is updated by Nepal's calendar authorities every year. This article explains exactly why, walks through the algorithm step by step, and shows where the obvious shortcuts go wrong.</p>

<h2>The naive approach — and why it fails</h2>
<p>The first thing most people try is something like:</p>

<ul>
<li><strong>AD = BS - 57</strong>, or</li>
<li><strong>AD = BS - 56</strong></li>
</ul>

<p>These rules land you in the correct year roughly 70 to 75 percent of the time. The other 25 to 30 percent of dates fall on the wrong side of the BS new year, which sits in mid-April. From 1 Baisakh (mid-April) through 31 Chaitra (mid-April the next year), the BS year is fixed; in the AD calendar that same span crosses a year boundary on 1 January. So:</p>

<ul>
<li>1 Jestha 2082 BS is 15 May 2025 AD. The offset is 57.</li>
<li>1 Magh 2082 BS is 14 January 2026 AD. The offset is now effectively 56, because the AD year has rolled over but the BS year has not.</li>
</ul>

<p>If you mechanically subtract 57 from every BS year, all your January–April dates will be wrong by exactly one year. This is the single most common mistake in Nepali date arithmetic. It is also the reason we wrote the <a href="/">BS to AD converter</a> in the first place.</p>

<h2>Why the calendar resists a closed-form formula</h2>
<p>Bikram Sambat is a <strong>sidereal solar</strong> calendar. Each month begins when the sun enters a new sign of the zodiac (a <em>rashi</em>). Because the sun does not move at a perfectly uniform apparent speed across the year, the time it spends in each sign varies. Translated to calendar days:</p>

<ul>
<li>Most BS months are 30 or 31 days long.</li>
<li>Some are 29 days long.</li>
<li>A few (often Ashadh and Shrawan) stretch to 32 days.</li>
</ul>

<p>Worse, the length of any given month is not the same every year. Baisakh 2082 might be 31 days while Baisakh 2080 was 30. There is no formula like "April has 30 days, June has 30 days" — every year has to be calculated from astronomical data.</p>

<p>In Nepal, the <strong>Calendar Determination Committee</strong> (Panchang Nirnayak Samiti) is responsible for publishing the official month lengths for each upcoming year. They use astronomical observations and Jyotish calculations to determine the date and time of each zodiac transit, and they publish the resulting table well before the new year so the printed patros and digital calendars can be prepared.</p>

<h2>The right algorithm, step by step</h2>
<p>A correct BS-to-AD converter relies on three building blocks:</p>

<ol>
<li><strong>An epoch date.</strong> A known, verified mapping between a specific BS date and its AD equivalent. We use <strong>1 Baisakh 1970 BS = 13 April 1913 AD</strong>. This becomes the zero point from which we count.</li>
<li><strong>A month-length table.</strong> For every BS year in range (we cover 1970 BS through 2099 BS), a list of how many days each month has.</li>
<li><strong>Day arithmetic.</strong> Count the number of days from the epoch to the target BS date, then add that count to the AD epoch.</li>
</ol>

<p>The procedure for converting a BS date to AD is:</p>

<ol>
<li>Validate the input. Is the day within the month's published length for that year? If you ask for 32 Kartik 2083 and Kartik 2083 is only 30 days long, the input is invalid.</li>
<li>From the epoch (1 Baisakh 1970 BS), add up the days in every complete BS year between 1970 and the target year minus one.</li>
<li>Add the days in every complete month from Baisakh up to the month before the target month.</li>
<li>Add the day-of-month value, minus one.</li>
<li>You now have a single number: total days since the epoch.</li>
<li>Add that number of days to 13 April 1913 AD using standard Gregorian arithmetic.</li>
</ol>

<p>The result is exact to the day, including the day of the week. The reverse operation — AD to BS — is the same logic in reverse, used by our <a href="/ad-to-bs-converter/">AD to BS converter</a>.</p>

<h2>Worked example</h2>
<p>Say you want to convert <strong>15 Jestha 2080 BS</strong> to AD.</p>

<ol>
<li>Days from 1 Baisakh 1970 to 1 Baisakh 2080: sum of all monthly days across 110 BS years. From our table this is a large fixed number — call it N.</li>
<li>Days from 1 Baisakh 2080 to 1 Jestha 2080: 31 (Baisakh 2080 has 31 days).</li>
<li>Day offset within Jestha: 15 - 1 = 14.</li>
<li>Total days from epoch: N + 31 + 14.</li>
<li>Add that to 13 April 1913 AD. The answer is <strong>29 May 2023 AD</strong>.</li>
</ol>

<p>If you tried the naive approach — subtract 57 from 2080 — you would land in 2023 by luck. Try the same for a date in Magh and you would be off by a year.</p>

<h2>How we maintain the month-length table</h2>
<p>Our internal table is sourced from the annual patro publications and the gazette of the Government of Nepal. Each BS year, we cross-check the official month lengths against multiple printed and online patros to catch any transcription errors. The data is then stored as a simple two-dimensional array — one row per BS year, twelve numbers per row — and shipped with the application so no network call is needed to do a conversion.</p>

<p>This is also why date converters covering very old or very far-future BS years are rare. Years before 1970 BS were calculated retrospectively using historical patros; years beyond 2099 BS have not yet been published authoritatively. Our coverage of 1970 through 2099 BS handles essentially every birth date, document date, and planning horizon a user is likely to need.</p>

<h2>Why your converter result matters</h2>
<p>When the result of a date conversion ends up on a passport, a visa form, or a government certificate, a one-day error is not a rounding issue — it is a legal mismatch that can take weeks or months to fix. The point of using a converter that consults a real month-length table is precisely to remove that risk. The cost is a tiny lookup; the benefit is correctness.</p>

<h2>Frequently asked questions</h2>
<h3>Can I just use a spreadsheet formula?</h3>
<p>Only if the spreadsheet has the full month-length table embedded as data. There is no "convert BS to AD" function in Excel or Google Sheets out of the box. People who try to write one often fall back to the +57 shortcut and produce wrong answers near the year boundary.</p>

<h3>What about leap years?</h3>
<p>Bikram Sambat does not have leap years in the Gregorian sense. Instead, the extra fractional day each year is absorbed into the variable month lengths. The Gregorian leap-year rule still matters for the AD side of the conversion: 29 February is a real date, and our converter handles it correctly.</p>

<h3>How accurate is the day of the week?</h3>
<p>Exact. Both calendars share the same seven-day week (आइतबार through शनिबार). Once the days-from-epoch count is correct, the weekday is a simple modulo-seven operation.</p>

<h3>Why does the BS new year shift by one day some years?</h3>
<p>Because 1 Baisakh begins when the sun enters Aries (Mesh rashi). The exact Gregorian date of that transit varies slightly from year to year — most often 13 or 14 April, occasionally 12 or 15.</p>

<h3>Is there an API for this?</h3>
<p>Yes. Our <a href="/api-docs/">JSON API</a> exposes the same conversion logic for use in apps, internal tools, and integrations. The endpoint takes a BS date and returns the AD date, weekday, and metadata.</p>

<h2>Practical takeaway</h2>
<p>BS-to-AD conversion is genuinely a table-driven problem, not a formula. Any tool that claims to do it without a real month-length table is making approximations. For day-of-birth, visa applications, contract durations, and any document that will be checked against another, use a converter you trust. Our <a href="/">BS to AD converter</a> and <a href="/ad-to-bs-converter/">AD to BS converter</a> use the full table; for two-date spans, the <a href="/date-difference/">date difference tool</a> applies the same logic across both endpoints.</p>`,
  },
  {
    slug: "difference-between-bs-and-ad",
    title: "BS vs AD: every difference between the two calendars, explained",
    description: "Bikram Sambat and Gregorian use different epochs, different month systems, different new-year days, and converge only on the weekday. Here's exactly how they differ.",
    readingMinutes: 7,
    publishedIso: "2025-10-01",
    body: `<p>Nepalis live with two calendars at once. The Bikram Sambat (BS) calendar runs the country's official paperwork, festivals, fiscal year, and school cycle. The Gregorian (AD) calendar runs international travel, foreign business, online services, and most of what people see on global news. Most of the time you can ignore the difference; the rest of the time, getting it wrong creates real problems. This article lays out every meaningful difference between the two calendars and shows where the practical implications matter.</p>

<h2>Different starting points</h2>
<p>The first and most basic difference is the <strong>epoch</strong> — the year each calendar counts as year one.</p>

<ul>
<li>The <strong>Gregorian calendar</strong> counts years from the traditional birth year of Christ. The year before 1 AD is 1 BC. The system is the international civil standard, used by every UN body and most national governments.</li>
<li><strong>Bikram Sambat</strong> counts years from 57 BCE, the era associated with King Vikramaditya. That gives a constant offset: BS is roughly <strong>56 years and 8 months ahead</strong> of AD.</li>
</ul>

<p>The key word is <em>ahead</em>. BS is never behind AD. 2026 AD overlaps with 2082 BS and 2083 BS, not 1969 BS or any earlier year. If you ever see a number that looks smaller than the AD year, something is wrong.</p>

<h2>Different new-year days</h2>
<p>The Gregorian new year falls on <strong>1 January</strong>. The Bikram Sambat new year falls on <strong>1 Baisakh</strong>, which lands in mid-April — most commonly on 13 or 14 April. The exact AD date shifts by a day or two from year to year, because the BS new year is tied to the sun's entry into Aries (Mesh rashi), not to a fixed Gregorian date.</p>

<p>This single fact is responsible for most of the confusion when people try to convert between the two systems. When the AD calendar rolls over from 31 December to 1 January, nothing happens in BS — the BS year only changes three and a half months later. For more on the 2083 transition specifically, see our guide on <a href="/blog/nepali-new-year-2083/">Nepali New Year 2083</a>.</p>

<h2>Different month structures</h2>
<p>Gregorian months have fixed lengths. January is always 31 days, February is 28 or 29, and so on. Once you have memorised the rhyme, you know every month forever.</p>

<p>Bikram Sambat is different. Months can be <strong>29, 30, 31, or 32 days</strong> long, and the length of any given month varies from year to year. This is because BS is a sidereal solar calendar: a month begins when the sun enters a new zodiac sign, and the time the sun spends in each sign is not uniform. The annual patro published by Nepal's Calendar Determination Committee specifies the lengths for each year ahead of time.</p>

<p>Practical implications:</p>

<ul>
<li>You cannot assume "three months equals about 90 days" in BS. It might be 88, 91, or 93 depending on which months are involved.</li>
<li>You cannot write "32 Chaitra" without checking — Chaitra is usually 30 or 31 days, but Shrawan and Ashadh often stretch to 32.</li>
<li>Validation matters. Our <a href="/">BS to AD converter</a> refuses invalid day-month combinations.</li>
</ul>

<h2>Different month names</h2>
<p>The twelve Gregorian months are January, February, March, April, May, June, July, August, September, October, November, December. The twelve BS months are <strong>Baisakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, Chaitra</strong>. There is no one-to-one mapping — Baisakh straddles mid-April to mid-May, Jestha straddles mid-May to mid-June, and so on. A full month-by-month reference is in our piece on <a href="/blog/nepali-months-in-order/">the 12 Nepali months in order</a>.</p>

<h2>Same week, same weekdays</h2>
<p>This is the one place the two calendars agree. Both share the same seven-day cycle, and the weekday on any given physical day is identical in both. Sunday is आइतबार, Monday is सोमबार, Tuesday is मंगलबार, Wednesday is बुधबार, Thursday is बिहीबार, Friday is शुक्रबार, and Saturday is शनिबार.</p>

<p>This consistency is why BS converters can give you a reliable day of the week without ambiguity. If our converter says 15 Magh 2082 falls on a Wednesday, the corresponding AD date (28 January 2026) is also a Wednesday.</p>

<h2>Different leap-year mechanics</h2>
<p>The Gregorian calendar uses an explicit leap-year rule: every four years gets a 29 February, with corrections every 100 and 400 years. The rule is purely arithmetic; you can determine whether any year is a leap year with a one-line formula.</p>

<p>Bikram Sambat has no equivalent. The extra fractional day each year is absorbed by varying the month lengths. There is no "leap day" in BS, just months that quietly stretch by a day when needed. This is why a closed-form BS-to-AD formula does not exist and why every reliable converter relies on a pre-computed table. For the full story, see <a href="/blog/how-bs-to-ad-conversion-works/">how BS-to-AD conversion actually works</a>.</p>

<h2>Different fiscal years</h2>
<p>The Nepali fiscal year runs from <strong>1 Shrawan to the end of Ashadh</strong> — roughly mid-July to mid-July in AD. The Gregorian-aligned international fiscal year (used by the IMF, World Bank, and most multilateral bodies) runs January to December. This means Nepal's budget cycle, audit cycle, and tax filings all sit on the BS calendar, while reports to international partners may need to be re-cut to a Gregorian year-end. For a deeper look, see our piece on <a href="/blog/nepali-fiscal-year-explained/">why FY 2082/83 starts in mid-July</a>.</p>

<h2>Different uses in everyday life</h2>
<p>Which calendar matters depends on what you are doing.</p>

<ul>
<li><strong>Civil documents in Nepal</strong> — citizenship, passports, school certificates, property papers, tax returns — primary date is BS, often with AD secondary.</li>
<li><strong>International travel and visas</strong> — exclusively AD. Embassies do not accept BS dates.</li>
<li><strong>Religious observances</strong> — most are tied to BS or to the lunar tithi calendar that runs alongside it.</li>
<li><strong>Banking</strong> — state-owned Nepali banks lean toward BS; private and international banks tend toward AD.</li>
<li><strong>News and journalism</strong> — Nepali-language outlets default to BS; English-language outlets default to AD.</li>
<li><strong>Software and APIs</strong> — generally AD internally, with BS as a display layer. Our <a href="/api-docs/">JSON API</a> exposes both formats.</li>
</ul>

<h2>Why does Nepal keep BS as the official calendar?</h2>
<p>Three reasons:</p>

<ol>
<li><strong>Cultural continuity.</strong> Festivals, agricultural cycles, family observances, and the popular vocabulary of seasons all run on BS. Switching the civic calendar would not erase the BS-based reality of daily life.</li>
<li><strong>Astronomical accuracy.</strong> The sidereal solar approach tracks the actual position of the sun against the stars. It is not necessarily "better" than the Gregorian system, but it is internally consistent and well-suited to Nepal's agrarian rhythm.</li>
<li><strong>Institutional inertia.</strong> Every law, contract, gazette, and archival record in Nepal is dated in BS. Migrating the entire institutional memory of a state to a different calendar would be enormous.</li>
</ol>

<h2>Frequently asked questions</h2>
<h3>If I add 57 to an AD year, will I always get the BS year?</h3>
<p>No. From January through mid-April the correct offset is 56, not 57. After mid-April it switches to 57 for the rest of the year. The cleanest fix is to use a real converter and stop relying on mental arithmetic.</p>

<h3>Is the time of day different in the two calendars?</h3>
<p>No. Nepal Standard Time (UTC+5:45) is the same regardless of which calendar you are reading. The calendar only changes how you label the date, not how you measure the day.</p>

<h3>What about the lunar calendar?</h3>
<p>Many Hindu festivals run on the lunar tithi calendar, which sits alongside BS. The patro publishes both — the BS solar date and the tithi — so people can plan observances. For more on this dual layout, see our <a href="/blog/nepali-patro-guide/">Nepali patro guide</a>.</p>

<h3>Can I express my date of birth in either calendar?</h3>
<p>Yes, but international forms always want AD. Your Nepali passport already prints both. For a step-by-step on converting your DOB safely, see <a href="/blog/how-to-convert-date-of-birth-bs-to-ad/">how to convert your date of birth</a>.</p>

<h3>Why does the BS year not change at midnight on 31 December?</h3>
<p>Because the BS year starts on 1 Baisakh, which falls in mid-April. The midnight of 31 December is just an ordinary day in the middle of Poush.</p>

<h2>Practical takeaway</h2>
<p>You do not need to choose between BS and AD — Nepal uses both. What you do need is a clear sense of when each calendar applies, and a reliable way to translate between them when it matters. Use the <a href="/">BS to AD converter</a> for Nepali documents you want to read in AD, the <a href="/ad-to-bs-converter/">AD to BS converter</a> for the reverse, and the <a href="/today-nepali-date/">today in Nepali date</a> page when you simply want to know what today is in both systems.</p>`,
  },
  {
    slug: "nepali-fiscal-year-explained",
    title: "Nepali fiscal year explained: why FY 2082/83 starts in mid-July",
    description: "Nepal's fiscal year runs from 1 Shrawan to the end of Ashadh. Learn how the FY label works, when budgets are presented, and how to map any date to its FY.",
    readingMinutes: 7,
    publishedIso: "2025-10-09",
    body: `<p>Nepal's <strong>fiscal year</strong> (आर्थिक वर्ष, <em>arthik barsha</em>) does not align with either the Gregorian calendar year or the Bikram Sambat calendar year. It runs from <strong>1 Shrawan</strong> to the last day of <strong>Ashadh</strong> the following BS year — roughly mid-July to mid-July in AD terms. This piece walks through how the fiscal year is structured, why it begins in Shrawan, how to read FY labels, when the budget is presented, and how to figure out which fiscal year any given date belongs to.</p>

<h2>The fiscal year window in plain terms</h2>
<p>Nepal's fiscal year consists of twelve consecutive months of the Bikram Sambat calendar, beginning with Shrawan (the fourth month) and ending with Ashadh (the third month) the following year. In AD terms:</p>

<ul>
<li>The fiscal year starts in <strong>mid-July</strong> of one AD year.</li>
<li>The fiscal year ends in <strong>mid-July</strong> of the next AD year.</li>
<li>The exact start and end dates shift slightly year to year, depending on how 1 Shrawan and the last day of Ashadh fall in AD.</li>
</ul>

<p>For <strong>FY 2082/83</strong>, the window is approximately <strong>17 July 2025</strong> to <strong>16 July 2026</strong>. For <strong>FY 2083/84</strong>, it runs from approximately <strong>17 July 2026</strong> to <strong>16 July 2027</strong>. You can confirm the exact dates using the <a href="/">BS to AD converter</a>.</p>

<h2>How to read FY labels</h2>
<p>You will see fiscal years written in several ways:</p>

<ul>
<li><strong>FY 2082/83</strong></li>
<li><strong>FY 2082-83</strong></li>
<li><strong>आ.व. 2082/083</strong></li>
<li><strong>आर्थिक वर्ष 2082/083</strong></li>
</ul>

<p>The first number is the BS year in which Shrawan (the start month) falls. The two- or three-digit second number is the BS year in which Ashadh (the end month) falls. So FY 2082/83 begins in Shrawan 2082 and ends at the end of Ashadh 2083. The crucial point: the second number is always one greater than the first.</p>

<p>Some government documents use the older Nepali convention of writing the second year with three digits (083 rather than 83). The meaning is identical.</p>

<h2>Why does the fiscal year start in Shrawan?</h2>
<p>The mid-July start has deep agricultural roots. Shrawan is the heart of the monsoon, the month when paddy planting begins. Historically:</p>

<ul>
<li>The previous harvest had been threshed, traded, and (where applicable) taxed.</li>
<li>The treasury could close its books once the rural economy had settled accounts.</li>
<li>The new planting season needed government support — seed distribution, irrigation works — at the start of Shrawan.</li>
</ul>

<p>Aligning the fiscal year to this rhythm meant the budget was published when farmers needed it and audited when the harvest had been counted. The administrative calendar still carries the imprint of that agrarian logic, even though Nepal's modern economy is far more diverse than it was when the FY window was set.</p>

<h2>Budget day and the FY cycle</h2>
<p>The federal budget is presented to the Federal Parliament on <strong>15 Jestha</strong> — about six weeks before the fiscal year begins. This is set by Article 119 of the Constitution of Nepal. The cycle for any fiscal year FY X/Y therefore looks like this:</p>

<ol>
<li><strong>15 Jestha (BS year X)</strong> — Budget presented to Parliament.</li>
<li><strong>Jestha to end of Ashadh</strong> — Parliament debates and passes the Appropriations Bill.</li>
<li><strong>1 Shrawan (BS year X)</strong> — Fiscal year begins; new programmes and budget allocations take effect.</li>
<li><strong>Through Magh</strong> — Mid-year review (typically presented in Magh or early Falgun).</li>
<li><strong>End of Ashadh (BS year Y)</strong> — Fiscal year ends. Final accounts close.</li>
<li><strong>Shrawan onwards (BS year Y)</strong> — Office of the Auditor General audits the closed FY; reports follow over the next several months.</li>
</ol>

<p>For provinces and local levels, the same cycle applies. Provincial and local governments must present their own budgets in line with the federal calendar. They typically do so in late Jestha or early Ashadh, after the federal budget has set the broad envelope.</p>

<h2>What changes on 1 Shrawan</h2>
<p>On the first day of Shrawan each year, a long list of fiscal and administrative changes take effect:</p>

<ul>
<li>New tax rates and threshold changes from the budget become applicable.</li>
<li>Government salary scales, allowances, and grade revisions take effect.</li>
<li>New budget headings and programme codes activate in the public accounting system.</li>
<li>Government contracts dated to the new FY become active.</li>
<li>Annual progress reporting for the previous FY closes.</li>
</ul>

<p>For private businesses, the fiscal year matters for income tax filing under the Income Tax Act 2058. Most Nepali businesses are required to use the FY (Shrawan to Ashadh) as their tax year, although some have approval to operate on a different cycle for accounting purposes.</p>

<h2>Mapping a date to its fiscal year</h2>
<p>Pick any BS date. To find the FY it belongs to:</p>

<ol>
<li>If the month is <strong>Baisakh, Jestha, or Ashadh</strong>, the date belongs to the FY <em>ending</em> in that BS year. For example, 10 Jestha 2083 is in FY 2082/83.</li>
<li>If the month is <strong>Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, or Chaitra</strong>, the date belongs to the FY <em>starting</em> in that BS year. For example, 5 Mangsir 2083 is in FY 2083/84.</li>
</ol>

<p>Put differently: the BS year of Shrawan is always the first number in the FY label. The BS year of Ashadh is always the second.</p>

<h2>How the FY interacts with the calendar year</h2>
<p>Because the BS calendar year (1 Baisakh to 30 Chaitra) does not coincide with the fiscal year (1 Shrawan to 30 Ashadh), every BS year overlaps two fiscal years:</p>

<ul>
<li>BS year 2083 contains the last quarter of FY 2082/83 (Baisakh, Jestha, Ashadh of 2083) and the first three quarters of FY 2083/84 (Shrawan through Chaitra of 2083).</li>
<li>FY 2083/84 contains the last three quarters of BS year 2083 and the first quarter of BS year 2084.</li>
</ul>

<p>This is why government reports, statistical bulletins, and audit documents are usually careful to say "FY 2082/83" rather than just "2082" or "2083" — the FY label is unambiguous while the BS year alone is not.</p>

<h2>Practical examples</h2>
<ul>
<li>You want to know which FY a property purchase on 25 Bhadra 2082 falls under. Bhadra is after Shrawan, so the date is in <strong>FY 2082/83</strong>.</li>
<li>You want to file taxes for income earned in Magh 2083. Magh is after Shrawan 2083, so this is income for <strong>FY 2083/84</strong>.</li>
<li>A tender deadline of 10 Ashadh 2084 closes in <strong>FY 2083/84</strong> — Ashadh 2084 is the last month of that FY.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>Why does Nepal use a different fiscal year from India?</h3>
<p>India's fiscal year runs 1 April to 31 March, aligned to the British colonial inheritance. Nepal never adopted that system; it kept the Shrawan-to-Ashadh window that matches the agricultural and traditional revenue cycle.</p>

<h3>Can a business set its own fiscal year?</h3>
<p>Most Nepali businesses must use the FY for tax purposes. Some — typically subsidiaries of foreign companies — apply for approval to use a calendar-year accounting basis, but the income tax computation still ultimately aligns with the FY window.</p>

<h3>When is the supplementary budget presented?</h3>
<p>If the government needs additional appropriations mid-year, a supplementary budget is presented later in the FY — usually in Magh or Falgun, after the mid-year review.</p>

<h3>How does FY interact with monthly salary cycles?</h3>
<p>Government salaries are paid monthly on a BS calendar basis. The new FY does not change the pay cycle, but it can change pay scales, allowances, and tax deductions starting from 1 Shrawan.</p>

<h3>What if the budget is not passed before 1 Shrawan?</h3>
<p>The Constitution allows the government to issue a vote on account or use the previous year's budget for up to four months while the new appropriation is finalised. This has happened during politically unstable periods.</p>

<h2>Practical takeaway</h2>
<p>Nepal's fiscal year is a fixed feature of public and business life: 1 Shrawan to end of Ashadh, every year. Remembering the rule — the first number in the FY label is the BS year of Shrawan, and the second is the BS year of Ashadh — keeps you from misreading government documents, tax notices, and budget reports. If you need to convert a fiscal year start or end date to AD, the <a href="/">BS to AD converter</a> is the quickest route, and the <a href="/date-difference/">date-difference tool</a> handles the full 365-day FY span if you need to count working days or remaining time.</p>`,
  },
  {
    slug: "dashain-2083-dates",
    title: "Dashain 2083 dates and how the festival is structured day by day",
    description: "Dashain 2083 begins with Ghatasthapana and ends with Kojagrat Purnima. Here are the key dates, the meaning of each ritual day, and how to plan around the festival.",
    readingMinutes: 7,
    publishedIso: "2025-10-15",
    body: `<p><strong>Dashain</strong> (दशैं) is the longest and most widely observed festival in Nepal. It runs for fifteen days, drawing the entire country into a single rhythm of preparation, ritual, family travel, and blessing. Government offices close, schools shut, markets pulse with shoppers, buses fill up with relatives heading home, and airline tickets sell out weeks in advance. This article walks through the structure of Dashain 2083 BS, the meaning of each major day, the approximate AD dates, and what to plan for if you are travelling or working through the festival window.</p>

<h2>What Dashain is and why it matters</h2>
<p>Dashain commemorates the victory of the goddess Durga over the buffalo demon Mahishasura, and more broadly the triumph of good over evil. It also marks the end of the monsoon harvest cycle — paddy is in the field, the rains have eased, and families have the time and resources to gather. The combination of religious and agricultural significance is what gives Dashain its scale: it is at once a sacred observance and a national homecoming.</p>

<p>The festival is shared with Hindu communities across South Asia (as Navaratri and Dussehra), but the Nepali form has a distinct character: the central role of <em>jamara</em> grown from barley seeds, the use of red-and-white <em>tika</em> on the forehead, the practice of elders blessing every younger relative they can reach, and the deeply ingrained habit of travelling home regardless of distance.</p>

<h2>Dashain 2083 BS: approximate dates</h2>
<p>Dashain runs from the bright fortnight (शुक्ल पक्ष) of Ashwin into the early days of Kartik. The 2083 BS observance falls in <strong>late September to mid-October 2026 AD</strong>. Exact tithi-based dates are confirmed by the annual patro published at the start of the BS year.</p>

<p>Key milestones, in order:</p>

<ul>
<li><strong>Ghatasthapana</strong> — the first day. Falls in mid Ashwin 2083 (approximately third week of September 2026).</li>
<li><strong>Phulpati</strong> — the seventh day of Navaratri.</li>
<li><strong>Maha Ashtami</strong> — the eighth day.</li>
<li><strong>Maha Navami</strong> — the ninth day.</li>
<li><strong>Vijaya Dashami</strong> — the tenth day. Falls in early Kartik 2083 (approximately first week of October 2026).</li>
<li><strong>Kojagrat Purnima</strong> — the fifteenth and final day.</li>
</ul>

<p>For the exact AD dates, plug 1 Ashwin 2083 into the <a href="/">BS to AD converter</a> and count forward through the tithis. A printed patro for the year will give you the day-by-day mapping in one place.</p>

<h2>The fifteen days, day by day</h2>

<h3>Day 1: Ghatasthapana</h3>
<p>The festival opens with <em>Ghatasthapana</em> — literally "placing the pot". A clay pot (<em>ghata</em>) is set in the family puja room, filled with holy water, and surrounded by a bed of sand into which barley seeds are sown. Over the next nine days these seeds sprout into <em>jamara</em>, the yellow-green grass that will be placed in elders' hands during the tika ritual on Vijaya Dashami. The household priest or senior family member performs Kalash Sthapana, invoking the goddess into the pot for the duration of the festival.</p>

<h3>Days 2 to 6</h3>
<p>These days are devoted to the worship of Durga's nine forms (Navadurga). Devotees visit Shakti Peethas — temples of the goddess — and read the Devi Mahatmya. Many families fast or eat only vegetarian food during this period. The household ritual is daily: water the jamara, offer flowers and incense to the pot, recite the prescribed mantras.</p>

<h3>Day 7: Phulpati</h3>
<p><strong>Phulpati</strong> is the day when a ceremonial bundle of flowers, plants, and jamara is carried from the ancient royal estate at Gorkha to the Hanuman Dhoka palace in Kathmandu. It is one of the most photographed days of Dashain — soldiers in dress uniform escort the bundle, brass bands play, and the President receives the procession with state honours. Most provincial and district headquarters hold parallel ceremonies.</p>

<h3>Day 8: Maha Ashtami</h3>
<p><strong>Maha Ashtami</strong> is one of the most intense days of the festival. Animal sacrifices — historically buffalo, goats, and chickens — are offered to Durga at temples across the country. Kalratri, the dark form of the goddess, is worshipped at midnight. Many families now substitute vegetarian offerings; the practice varies by household and region.</p>

<h3>Day 9: Maha Navami</h3>
<p><strong>Maha Navami</strong> is the day when tools, vehicles, and machines are worshipped (<em>Visvakarma Puja</em>). Office computers, taxis, factory equipment, military weapons, and the family motorbike all receive a tika and a strand of marigold. The idea is that the instruments that work for you deserve a moment of recognition before the year ahead.</p>

<h3>Day 10: Vijaya Dashami</h3>
<p><strong>Vijaya Dashami</strong> is the heart of Dashain. Elders place a paste of red rice, yogurt, and vermillion on the foreheads of younger family members and tuck a sprig of jamara behind their ears. With it comes a blessing — usually a short Sanskrit verse — and often a cash gift (<em>dakshina</em>). The ritual is repeated up and down the family hierarchy: parents bless children, grandparents bless grandchildren, in-laws bless nephews and nieces. It is the day people make impossible journeys to be home for.</p>

<h3>Days 11 to 14</h3>
<p>The tika ritual continues. Families that could not gather on the tenth day visit relatives over the following days. People who returned home for the festival often use this stretch to travel back to work, especially if they live abroad or in distant cities.</p>

<h3>Day 15: Kojagrat Purnima</h3>
<p>The full moon day closes the festival. Lakshmi, the goddess of wealth, is worshipped through the night; legend says she visits and blesses households that remain awake. It is a quieter, more reflective end to the long Dashain arc.</p>

<h2>Why dates shift each year</h2>
<p>Dashain follows the lunar tithi cycle, not the solar BS date. Ghatasthapana is always on Pratipada tithi of the bright fortnight of Ashwin; Vijaya Dashami is always on Dashami tithi. Because lunar months drift relative to the solar Bikram Sambat calendar, the BS date of each Dashain day shifts by a few days every year, and the AD date shifts accordingly. This is also why two BS years can give different patterns of how Dashain straddles Ashwin and Kartik.</p>

<h2>Planning around Dashain</h2>
<p>If you are travelling to, from, or within Nepal during Dashain, factor in the following:</p>

<ul>
<li><strong>Flights</strong> book out weeks in advance. International tickets for diaspora returning home, and domestic seats to Biratnagar, Bhairahawa, Dhangadhi, and Pokhara, fill especially fast.</li>
<li><strong>Bus tickets</strong> for the days before Phulpati and Maha Ashtami are oversubscribed. Long queues form at Gongabu and other terminals.</li>
<li><strong>Banks</strong> are typically closed from Phulpati through Vijaya Dashami. Plan cash withdrawals ahead.</li>
<li><strong>Government offices</strong> close for the full festival window. Visa processing, passport issuance, and licence applications pause.</li>
<li><strong>Schools and universities</strong> close for a Dashain–Tihar break that often runs three to four weeks combined.</li>
<li><strong>Markets</strong> are crowded for clothes shopping in the week before Ghatasthapana. Tailors stop accepting orders early because they cannot keep up.</li>
</ul>

<p>If you are working with Nepali partners, expect deliverables to slow significantly through the Dashain–Tihar block. Plan deadlines around it rather than through it.</p>

<h2>Frequently asked questions</h2>
<h3>How does Dashain differ from Indian Dussehra?</h3>
<p>The underlying religious basis is the same — the victory of Durga over Mahishasura. The Nepali form gives more weight to the household tika ritual, the jamara, and the cross-country homecoming. The Indian form puts more weight on the public Ramleela performances and the burning of Ravana effigies on the tenth day.</p>

<h3>What is the difference between Dashain and Navaratri?</h3>
<p>Navaratri is the nine-night Hindu observance of the goddess Durga, observed in both spring (Chaitra) and autumn (Ashwin). Nepali Dashain is the autumn Navaratri extended through Vijaya Dashami and on to Kojagrat Purnima. Spring Navaratri exists in Nepal but is observed much more quietly.</p>

<h3>Is non-vegetarian food required?</h3>
<p>No. Many Nepali Hindu families do offer meat (goat or chicken) during Dashain, but the practice is not universal. Buddhist Newars, Vaishnava families, and many urban households observe Dashain entirely vegetarian.</p>

<h3>Can I take leave from a Nepali job during Dashain?</h3>
<p>Yes. Nepali employers are legally required to grant Dashain leave; private employers typically also pay a one-month Dashain bonus (<em>dashain kharcha</em>) ahead of the festival.</p>

<h3>When does the next big festival start after Dashain?</h3>
<p>Tihar begins about two weeks after Vijaya Dashami, in late Kartik. See our companion piece on <a href="/blog/tihar-2083-dates/">Tihar 2083 dates</a> for the full five-day breakdown.</p>

<h2>Practical takeaway</h2>
<p>Dashain is not a single day to plan around — it is a fifteen-day rhythm that bends the entire country's schedule. Knowing the structure helps you book travel early, set realistic work deadlines, and join the rituals you care about without scrambling. To pin down the exact AD dates of Ghatasthapana, Phulpati, and Vijaya Dashami for 2083 BS, the <a href="/">BS to AD converter</a> and the published annual patro are your two best references. For other 2083 holidays, see our <a href="/blog/list-of-public-holidays-nepal/">public holidays list</a> and the broader <a href="/blog/nepali-calendar-2083-guide/">2083 BS calendar guide</a>.</p>`,
  },
  {
    slug: "tihar-2083-dates",
    title: "Tihar 2083 dates and the meaning of each of the five days",
    description: "Tihar (Deepawali) spans five days from Kaag Tihar to Bhai Tika. Here are the approximate 2083 BS dates and what each day commemorates.",
    readingMinutes: 7,
    publishedIso: "2025-10-30",
    body: `<p><strong>Tihar</strong> (तिहार), also called <strong>Deepawali</strong> or <em>Yamapanchak</em>, is Nepal's festival of lights. It runs for five consecutive days in late Kartik and closes the long Dashain–Tihar festive arc that defines the autumn season. Where Dashain centres on the goddess Durga and the family's vertical hierarchy of elders blessing the young, Tihar takes a different shape: it honours animals, the goddess of wealth, the bond between brother and sister, and the household itself. This guide walks through Tihar 2083 BS day by day, explains the symbolism, lists the approximate dates, and covers what changes practically across the country during the festival.</p>

<h2>What Tihar celebrates</h2>
<p>The unifying theme of Tihar is acknowledging the relationships humans depend on — with animals, with abundance, with the natural world, and with siblings. Each of the five days marks one of these relationships. Lamps (<em>diyo</em>), oil-and-cotton wicks burning quietly in window niches, are the visible signature of the festival; rangoli patterns made from rice flour, coloured powder, and flower petals decorate doorsteps; marigold garlands hang from doorways and over family shrines.</p>

<p>The Yamapanchak interpretation describes Tihar as the five days when Yama (the god of death) is appeased and his sister Yamuna is honoured. The Lakshmi interpretation centres on the goddess of wealth visiting illuminated homes. The two layers coexist in modern Nepali practice.</p>

<h2>Tihar 2083 BS at a glance</h2>
<p>Tihar 2083 falls in <strong>late Kartik 2083 BS</strong>, which corresponds to approximately <strong>late October to early November 2026 AD</strong>. The exact tithi-based dates are confirmed in the annual patro at the start of the BS year. Day-by-day:</p>

<ol>
<li><strong>Kaag Tihar</strong> — crows are honoured as messengers of Yama.</li>
<li><strong>Kukur Tihar</strong> — dogs are honoured as the loyal companions of humans.</li>
<li><strong>Gai Tihar and Laxmi Puja</strong> — cows are worshipped in the morning; Lakshmi is welcomed at dusk. Lamps are lit across the home.</li>
<li><strong>Goru Tihar / Govardhan Puja / Mha Puja</strong> — oxen are worshipped; Newar communities perform Mha Puja (self-purification ritual) marking their new year.</li>
<li><strong>Bhai Tika</strong> — sisters bless their brothers with seven-colour tika, garlands, and prayers for long life.</li>
</ol>

<p>Use the <a href="/">BS to AD converter</a> to pin down the exact AD dates once your patro is in hand.</p>

<h2>Day 1: Kaag Tihar (Crow Day)</h2>
<p>The first day of Tihar honours crows. Households place food — rice, sweets, water — on rooftops, balconies, and courtyards. The symbolism is layered: crows are considered messengers of Yama, the god of death, and feeding them is meant to keep grief and untimely death away from the household. It is also a quiet acknowledgement that crows, despite their unglamorous reputation, share the human environment and deserve respect.</p>

<p>Practically, this day is the lowest-key of the five. Most offices and shops remain open. The ritual is a brief morning observance.</p>

<h2>Day 2: Kukur Tihar (Dog Day)</h2>
<p><strong>Kukur Tihar</strong> is the day Nepal's dogs — pets, working dogs, and street dogs alike — are honoured. They are bathed, garlanded with marigold, and offered tika on the forehead. Special meals (often meat and milk-based) are prepared. The day has become one of the most photographed and shared aspects of Nepali culture internationally; images of police dogs and stray dogs alike receiving tika circulate widely.</p>

<p>The religious basis is that dogs are loyal companions of humans and guardians of the gates of the afterlife in some Hindu traditions. The everyday significance is broader: a culture that takes a day to honour its dogs reveals something about how it sees the natural and animal world.</p>

<h2>Day 3: Gai Tihar and Laxmi Puja</h2>
<p>The third day is divided in two. In the morning, cows — sacred in Hindu tradition and historically central to Nepali household life — are worshipped, fed, and garlanded. <strong>Gai Tihar</strong> recognises the cow as the mother who provides milk, fuel, fertiliser, and labour.</p>

<p>By dusk, attention turns to <strong>Laxmi Puja</strong>. Lakshmi, the goddess of wealth and prosperity, is believed to visit homes that are clean and well-lit. Households spend the day cleaning thoroughly, then in the evening set rows of small oil lamps along doorways, windows, walls, and rooftops. The home is welcomed by light, the goddess is invited inside, and a puja is performed to the family's account books, cash drawer, and gold ornaments. Sweets are distributed; children go house to house singing <em>bhailo</em>.</p>

<p>This is the night Tihar most resembles its name. Streets in cities and villages glow with thousands of lamps; the air carries the scent of marigold and incense.</p>

<h2>Day 4: Goru Tihar, Govardhan Puja, Mha Puja</h2>
<p>The fourth day takes on different forms in different communities. For Hindu farming households, <strong>Goru Tihar</strong> honours the ox — the working partner of every traditional household plough. <strong>Govardhan Puja</strong> commemorates the legend of Krishna lifting Mount Govardhan to shelter villagers from torrential rain.</p>

<p>For Newar communities, the same day is <strong>Mha Puja</strong> — a self-purification ritual and the start of Nepal Sambat (the Newar new year). Each household member performs a puja to their own body and soul, sitting around a ritual mandap inside the home. It is one of the few rituals worldwide that explicitly worships the self. The day is also marked with a great feast of Newar specialities.</p>

<p>Boys also go from house to house singing <em>deusi</em>, the male counterpart to bhailo. Households welcome the singers and reward them with sweets, fruit, money, or a small portion of the family's Tihar feast.</p>

<h2>Day 5: Bhai Tika</h2>
<p>The festival closes with <strong>Bhai Tika</strong>. Sisters bless their brothers with a multi-coloured tika (often seven colours — saptarangi), drape marigold and globe-amaranth (<em>makhamali</em>) garlands around their necks, and recite prayers for their brothers' long life. Brothers return blessings and gifts in turn. The ritual is deeply personal; many Nepalis describe Bhai Tika as the day of Tihar that matters most to them emotionally.</p>

<p>The mythology behind Bhai Tika is the story of Yama and Yamuna. Yamuna's devotion to her brother Yama is said to have given him an extension of life; the ritual is a re-enactment that asks for the same boon for one's own brother. Sisters without brothers, or brothers without sisters, often pair with cousins or close family friends for the ritual; many also visit older relatives to receive and give tika.</p>

<p>By the end of Bhai Tika, the long arc of Dashain and Tihar — close to a month of intensive family-centred ritual — is complete. Schools and offices reopen; markets shift into Magh wedding-season planning; the country exhales.</p>

<h2>What changes practically during Tihar</h2>
<ul>
<li><strong>Government offices and banks</strong> close for Laxmi Puja and Bhai Tika. Some also close for Goru Tihar.</li>
<li><strong>Schools and universities</strong> are typically still on Dashain break.</li>
<li><strong>Traffic and crowds</strong> peak at New Road, Asan, and other shopping districts in the days before Laxmi Puja.</li>
<li><strong>Power supply</strong> in some areas is supplemented to ensure illuminated homes can stay lit.</li>
<li><strong>Domestic flights</strong> and buses are busy in both directions — outgoing for those returning to work, incoming for late Bhai Tika travellers.</li>
<li><strong>Firecrackers</strong>, though discouraged in many municipalities for noise and air-quality reasons, still feature in some neighbourhoods on Laxmi Puja night.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>How is Tihar different from Indian Diwali?</h3>
<p>Both share the lights-and-Lakshmi core. Nepali Tihar is structurally distinct in its five-day animal sequence (crow, dog, cow, ox), in the central role of Bhai Tika, and in the Newar Mha Puja that runs in parallel. Indian Diwali emphasises Ram's return from exile and is concentrated into a more compressed couple of days.</p>

<h3>What is the difference between bhailo and deusi?</h3>
<p>Bhailo is sung by girls and women on Laxmi Puja night; deusi is sung by boys and men on Govardhan Puja night. Both involve going from house to house, singing traditional verses, and receiving offerings in return. The songs invoke blessings on the household.</p>

<h3>Why is Bhai Tika so important?</h3>
<p>It directly enacts a sister's prayer for her brother's longevity. In a society where many cultural practices emphasise male lines of inheritance, Bhai Tika is one of the most visible rituals that gives the sister's role precedence. The bond is taken seriously enough that many Nepalis travel home from abroad specifically for this single day.</p>

<h3>Can non-Hindus celebrate Tihar?</h3>
<p>Many do. Buddhist Newars perform Mha Puja and observe the lights without conflict. Christian and Muslim families in mixed neighbourhoods often join in the household visits and meal exchanges, even when they do not perform the religious puja.</p>

<h3>What is the Newar new year?</h3>
<p>Nepal Sambat begins on the day of Mha Puja. It is the calendar era of the Newar community, established in 879 AD, and runs in parallel with Bikram Sambat. The new Nepal Sambat year is celebrated at Basantapur with public events and processions.</p>

<h2>Practical takeaway</h2>
<p>Tihar is short, dense, and richly textured. The five days run in a tight sequence — crow, dog, cow and Lakshmi, ox and Mha, sister and brother — and each carries its own meaning, its own offerings, and its own household rhythm. If you are planning around the festival, expect business to be effectively closed from Laxmi Puja through Bhai Tika. For the exact 2083 BS dates of each day, refer to the annual patro or the <a href="/">BS to AD converter</a>. For the broader autumn festival calendar, see our companion guide on <a href="/blog/dashain-2083-dates/">Dashain 2083 dates</a> and the full <a href="/blog/list-of-public-holidays-nepal/">list of public holidays in Nepal</a>.</p>`,
  },
  {
    slug: "nepali-calendar-2082-guide",
    title: "Nepali calendar 2082 BS — your complete month, festival, and FY guide",
    description: "A complete guide to the year 2082 BS: month-by-month layout, festival cluster, fiscal year window, public holidays, and the AD overlap.",
    readingMinutes: 7,
    publishedIso: "2025-04-14",
    body: `<p>Year <strong>2082 of the Bikram Sambat calendar</strong> begins on <strong>14 April 2025 AD</strong> and runs to <strong>13 April 2026 AD</strong>. It contains the usual twelve Nepali months, the full Dashain–Tihar autumn cluster, the budget cycle of FY 2082/83, and a long list of religious and civic observances. This guide gives you a single reference for the year — month-by-month structure, fiscal calendar, key festivals, public holidays, and conversion notes for daily use.</p>

<p>If you live, work, study, or have family in Nepal, 2082 BS is the year your school terms, tax filings, festival travel, and bureaucratic deadlines will run on. The guide below is built to be a one-page reference you can return to whenever a date needs to be cross-checked, a deadline planned, or a festival noted on the calendar.</p>

<h2>2082 BS at a glance</h2>
<ul>
<li><strong>BS year</strong>: 2082</li>
<li><strong>Starts</strong>: 1 Baisakh 2082 = 14 April 2025 AD</li>
<li><strong>Ends</strong>: 30 Chaitra 2082 = 13 April 2026 AD</li>
<li><strong>Total days</strong>: 365 (Baisakh through Chaitra)</li>
<li><strong>Fiscal year (containing Shrawan)</strong>: FY 2082/83, 1 Shrawan 2082 to end of Ashadh 2083</li>
<li><strong>Year before</strong>: 2081 BS</li>
<li><strong>Year after</strong>: 2083 BS</li>
<li><strong>AD years overlapped</strong>: 2025 and 2026</li>
</ul>

<h2>Month-by-month layout</h2>
<p>Bikram Sambat months are not fixed in length. For 2082 BS the published month lengths are:</p>

<table>
<thead><tr><td><strong>Month</strong></td><td><strong>Days</strong></td><td><strong>Approx AD window</strong></td></tr></thead>
<tbody>
<tr><td>Baisakh</td><td>31</td><td>14 Apr – 14 May 2025</td></tr>
<tr><td>Jestha</td><td>31</td><td>15 May – 14 Jun 2025</td></tr>
<tr><td>Ashadh</td><td>31</td><td>15 Jun – 16 Jul 2025</td></tr>
<tr><td>Shrawan</td><td>32</td><td>17 Jul – 17 Aug 2025</td></tr>
<tr><td>Bhadra</td><td>31</td><td>18 Aug – 17 Sep 2025</td></tr>
<tr><td>Ashwin</td><td>31</td><td>18 Sep – 17 Oct 2025</td></tr>
<tr><td>Kartik</td><td>30</td><td>18 Oct – 16 Nov 2025</td></tr>
<tr><td>Mangsir</td><td>29</td><td>17 Nov – 15 Dec 2025</td></tr>
<tr><td>Poush</td><td>30</td><td>16 Dec 2025 – 14 Jan 2026</td></tr>
<tr><td>Magh</td><td>29</td><td>15 Jan – 12 Feb 2026</td></tr>
<tr><td>Falgun</td><td>30</td><td>13 Feb – 14 Mar 2026</td></tr>
<tr><td>Chaitra</td><td>30</td><td>15 Mar – 13 Apr 2026</td></tr>
</tbody>
</table>

<p>The AD windows shift by a day if 1 Baisakh falls on 13 rather than 14 April; use the <a href="/">BS to AD converter</a> for exact day-of-week and AD date lookups.</p>

<h2>Fiscal year 2082/83</h2>
<p>Although the BS calendar year starts in Baisakh, the fiscal year (आर्थिक वर्ष) runs <strong>1 Shrawan 2082 to end of Ashadh 2083</strong>. Budget day for FY 2082/83 falls on <strong>15 Jestha 2082</strong> (approximately 29 May 2025 AD), when the federal budget is presented to Parliament. The first three months of 2082 BS (Baisakh, Jestha, Ashadh) close out the previous FY 2081/82.</p>

<p>Practical implications:</p>

<ul>
<li>Tax filings for the income year ending Ashadh 2082 are due in early FY 2082/83.</li>
<li>Government salary scales for FY 2082/83 apply from 1 Shrawan 2082.</li>
<li>New tax rates from the budget take effect at the start of Shrawan.</li>
<li>Mid-year budget review typically falls in Magh 2082.</li>
</ul>

<p>For a deeper look at how the FY label works, see <a href="/blog/nepali-fiscal-year-explained/">Nepali fiscal year explained</a>.</p>

<h2>Major festivals in 2082 BS</h2>
<p>Festival dates either follow the solar BS calendar (fixed) or the lunar tithi cycle (shifting). The 2082 BS year contains:</p>

<ul>
<li><strong>Nepali New Year (Navabarsha 2082)</strong> — 1 Baisakh 2082 (14 April 2025).</li>
<li><strong>Buddha Jayanti</strong> — Baisakh Purnima, full-moon day of Baisakh.</li>
<li><strong>Republic Day (Ganatantra Diwas)</strong> — 15 Jestha.</li>
<li><strong>Janai Purnima and Raksha Bandhan</strong> — Shrawan Purnima.</li>
<li><strong>Gai Jatra</strong> — day after Janai Purnima.</li>
<li><strong>Krishna Janmashtami</strong> — eighth tithi of Bhadra dark fortnight.</li>
<li><strong>Teej (Haritalika)</strong> — Bhadra Shukla Tritiya.</li>
<li><strong>Indra Jatra</strong> — Bhadra full moon, Kathmandu's classical street festival.</li>
<li><strong>Constitution Day (Sambidhan Diwas)</strong> — 3 Ashwin.</li>
<li><strong>Dashain</strong> — Ghatasthapana in Ashwin, Vijaya Dashami in Kartik.</li>
<li><strong>Tihar (Deepawali)</strong> — five days in late Kartik.</li>
<li><strong>Chhath</strong> — sixth day of Kartik Shukla, especially in the Terai.</li>
<li><strong>Maghe Sankranti</strong> — 1 Magh.</li>
<li><strong>Prajatantra Diwas (Democracy Day)</strong> — 26 Magh.</li>
<li><strong>Maha Shivaratri</strong> — Falgun dark fortnight.</li>
<li><strong>Holi (Fagu Purnima)</strong> — Falgun full moon; Hill and Terai observe on consecutive days.</li>
<li><strong>Chaite Dashain (Ram Navami)</strong> — Chaitra Shukla Navami.</li>
</ul>

<p>For the dedicated list of gazetted holidays, see our <a href="/blog/list-of-public-holidays-nepal/">complete list of public holidays in Nepal</a>.</p>

<h2>The AD overlap</h2>
<p>BS year 2082 overlaps two AD years:</p>

<ul>
<li><strong>2025 AD</strong> — from 14 April 2025 (1 Baisakh 2082) to 31 December 2025 (mid-Poush 2082).</li>
<li><strong>2026 AD</strong> — from 1 January 2026 (mid-Poush 2082) to 13 April 2026 (30 Chaitra 2082).</li>
</ul>

<p>This is also where the year-arithmetic mistake bites. From January through mid-April 2026, the AD year has rolled over to 2026 but the BS year is still 2082. People who subtract 57 mechanically will write "2083" — a year ahead of reality. Always use a real <a href="/ad-to-bs-converter/">AD to BS converter</a> for dates in this window.</p>

<h2>School and exam calendar</h2>
<p>The Nepali academic year usually starts in <strong>Baisakh</strong> for community schools and many private schools, with secondary school examinations (SEE) typically held in <strong>Chaitra</strong>. University academic calendars vary. Tribhuvan University and other major universities run sessions that span the BS year but not always aligned exactly to it.</p>

<h2>Notable seasonal markers</h2>
<ul>
<li><strong>Pre-monsoon</strong> — Baisakh to early Ashadh: hot, dry, dust storms in the Terai, occasional pre-monsoon thunderstorms.</li>
<li><strong>Monsoon</strong> — Mid-Ashadh through Ashwin: heavy rains, landslide risk in the hills, flood risk in the Terai.</li>
<li><strong>Festive autumn</strong> — Late Ashwin through Mangsir: clearest mountain views, Dashain–Tihar, wedding season picks up.</li>
<li><strong>Winter</strong> — Poush, Magh, early Falgun: cold in the hills, dense fog in the Terai, occasional cold-wave casualties.</li>
<li><strong>Spring</strong> — Falgun, Chaitra: rhododendrons bloom, Holi, the agricultural calendar restarts.</li>
</ul>

<h2>Planning around the festival cluster</h2>
<p>The biggest planning challenge in any BS year is the back-to-back Dashain and Tihar window. In 2082 BS this runs from Ghatasthapana in mid-late Ashwin through Bhai Tika in early Kartik — roughly three weeks of intense festival activity in late September through early November 2025 AD. During this window:</p>

<ul>
<li><strong>Domestic and international flights</strong> to Nepal book out two to three months in advance. Diaspora-heavy routes (Kuala Lumpur, Doha, Dubai, the US East Coast) see the steepest premiums.</li>
<li><strong>Long-distance buses</strong> from Kathmandu to provincial centres sell out for the days before Phulpati and Maha Ashtami. Plan early or accept higher tourist-coach fares.</li>
<li><strong>Government offices, courts, and banks</strong> are effectively shut for the longer holidays. Visa applications, land registrations, and bank transactions queue up before and after.</li>
<li><strong>Markets</strong> are at their busiest in the week before Ghatasthapana. New clothes, sweets, and household items move in volume.</li>
<li><strong>Schools and universities</strong> close for the combined Dashain–Tihar break, often running into a longer winter break in some institutions.</li>
</ul>

<p>For a full breakdown of each festival's structure see <a href="/blog/dashain-2083-dates/">Dashain dates</a> and <a href="/blog/tihar-2083-dates/">Tihar dates</a>. Although those pieces use 2083 dates, the structure and the day-by-day rituals are identical for 2082.</p>

<h2>Cross-checking BS and AD dates in 2082</h2>
<p>A few date-checking habits save trouble during this year:</p>

<ul>
<li>From <strong>14 April to 31 December 2025</strong>, the AD year (2025) plus 57 gives the BS year (2082). Easy.</li>
<li>From <strong>1 January to 13 April 2026</strong>, the AD year (2026) plus 56 gives the BS year (2082). The naive +57 here would land you in 2083 — a year off.</li>
<li>Always cross-check year boundaries near 1 Baisakh (mid-April) and 1 January.</li>
<li>The <a href="/age-calculator/">age calculator</a> uses 2082-aware logic, so it correctly handles people born just before or just after the BS or AD year flip.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>How many days are in 2082 BS?</h3>
<p>365 days. Adding the months from the table: 31+31+31+32+31+31+30+29+30+29+30+30 = 365.</p>

<h3>When does 2083 BS start?</h3>
<p>14 April 2026 AD. See our <a href="/blog/nepali-new-year-2083/">Nepali New Year 2083</a> piece for the transition details.</p>

<h3>What is the difference between 2082 and FY 2082/83?</h3>
<p>2082 is a calendar year (1 Baisakh 2082 to 30 Chaitra 2082). FY 2082/83 is a fiscal year (1 Shrawan 2082 to end of Ashadh 2083). They share the Shrawan-to-Chaitra part of 2082 but diverge in Baisakh-Ashadh.</p>

<h3>Is there a 2082 BS holiday I am likely to miss?</h3>
<p>The most often overlooked are Constitution Day (3 Ashwin), Prajatantra Diwas (26 Magh), and Chaite Dashain (Chaitra Shukla Navami). All three are gazetted nationally.</p>

<h3>How do I look up today's date in 2082 BS?</h3>
<p>Use the <a href="/today-nepali-date/">today in Nepali date</a> page. It shows the current BS date, the corresponding AD date, and the day of the week.</p>

<h2>Practical takeaway</h2>
<p>2082 BS is a standard-length year with the expected festival cluster and a normal FY 2082/83 budget cycle. If you keep one reference open while working with Nepali dates this year, make it the month-length table above — it lets you reason about any deadline, contract, or festival date without making the year-arithmetic mistake. Pair it with the <a href="/">BS to AD converter</a> for exact day mappings and the <a href="/date-difference/">date-difference tool</a> for spans across months and years. For year-on-year planning, see also our <a href="/blog/nepali-calendar-2083-guide/">2083 BS calendar guide</a>.</p>`,
  },
  {
    slug: "convert-government-form-dates",
    title: "How to fill BS dates on Nepali government forms without the usual errors",
    description: "Citizenship, passport, school, tax, and PAN forms in Nepal need BS dates. Avoid the most common conversion mistakes with this practical, mistake-by-mistake guide.",
    readingMinutes: 7,
    publishedIso: "2025-11-04",
    body: `<p>If you are filling out a Nepali government form — citizenship application, passport renewal, school registration, tax return, PAN application, property transfer, or any of a hundred other documents — you are going to be writing dates in <strong>Bikram Sambat (BS)</strong>. Get the dates right and the form moves; get them wrong and the form goes back across the counter with a red mark. This guide walks through the most common mistakes Nepalis (and non-Nepalis) make when converting and writing BS dates on official forms, and shows how to avoid each one.</p>

<h2>Why BS dates are unforgiving on forms</h2>
<p>Civil registration in Nepal is built on the Bikram Sambat calendar. Your citizenship certificate, your school-leaving certificate, your land record, and your PAN registration all carry primary BS dates. Once a BS date is recorded against your identity, every later form has to match it — not just "about right," but exactly.</p>

<p>The system has no tolerance for one-day errors. A passport application that gives your date of birth as 15 Magh 2050 when your citizenship certificate says 14 Magh 2050 will be flagged. Inconsistencies of this kind are the leading cause of rejected applications, and they almost always trace back to one of the five mistakes below.</p>

<h2>Mistake 1: subtracting 57 every time</h2>
<p>The most common error is converting an AD year to BS by adding 57 to every date, or going the other way by subtracting 57. This is wrong from January through mid-April, when the correct offset is <strong>56</strong>, not 57.</p>

<p>Worked example. If you were born on 5 January 1990 AD:</p>

<ul>
<li>Naive math: 1990 + 57 = 2047 BS. <strong>Wrong.</strong></li>
<li>Correct: 5 January 1990 = 21 Poush 2046 BS.</li>
</ul>

<p>Why? Because the BS new year does not arrive until mid-April. From 1 January to mid-April, the BS year is still the lower number. People born in this window — and there are many — routinely have their year mis-converted by people doing the math in their head.</p>

<p>The fix: always use the <a href="/ad-to-bs-converter/">AD to BS converter</a> or the reverse <a href="/">BS to AD converter</a>, which apply the full month-length table and handle the year boundary correctly. For a deeper look at the conversion mechanics, see <a href="/blog/how-bs-to-ad-conversion-works/">how BS to AD conversion actually works</a>.</p>

<h2>Mistake 2: writing a day that does not exist in the month</h2>
<p>Some BS months have 32 days (typically Shrawan, sometimes Ashadh), some have 29 (often Poush, Magh, Mangsir, Falgun). The Gregorian intuition that every month has 30 or 31 days does not transfer.</p>

<p>Common errors include:</p>

<ul>
<li>Writing "32 Magh 2080" when Magh 2080 only has 29 days.</li>
<li>Writing "31 Kartik 2083" when Kartik 2083 has 30 days.</li>
<li>Writing "30 Falgun 2082" when Falgun 2082 has 30 days (here you would be right, but it is worth verifying).</li>
</ul>

<p>The fix: use a converter that validates the input. Ours rejects 32 Magh outright. Alternatively, consult an annual patro before writing a day above 30 in any month.</p>

<h2>Mistake 3: confusing day, month, year order</h2>
<p>Nepali government forms typically use <strong>DD/MM/YYYY</strong> in BS notation — sometimes written as <em>gate / mahina / sal</em>. This is the same order as British and Indian conventions but the opposite of the US-style MM/DD/YYYY.</p>

<p>If you copy from a US-formatted source (say, an international visa application that uses MM/DD/YYYY), the day and month can get swapped on transfer. Always read out the date in words — "the fifteenth of Magh, two thousand and eighty-three" — before writing the digits. This trips up bilingual filers most often.</p>

<h2>Mistake 4: ignoring the day of the week</h2>
<p>Some Nepali forms require both the BS date and the day of the week (<em>bar</em>). The day of the week is identical in BS and AD because both calendars share the same seven-day cycle, but if you guess instead of copying from your converter, you can end up off by a day. Sunday is आइतबार; Monday is सोमबार; and so on.</p>

<p>The fix: always copy the weekday from the converter's output, not from memory.</p>

<h2>Mistake 5: inconsistent dates across documents</h2>
<p>This is the most damaging mistake. Citizenship, passport, school certificate, and PAN often have to be cross-referenced when you apply for anything substantial — a visa, a property transfer, a bank loan, a government job. If your DOB on the passport reads 17 Baisakh 2055 and the citizenship reads 16 Baisakh 2055, every future form will be tangled.</p>

<p>Where the discrepancy comes from:</p>

<ul>
<li>Original documents copied by hand at different times, with different offsets applied.</li>
<li>A passport issued by converting the AD date back to BS naively.</li>
<li>A school certificate that used the academic-year convention rather than the actual DOB.</li>
</ul>

<p>The fix: <strong>treat your citizenship certificate as the master document</strong>. Use the BS date on it as the canonical reference. Convert that single BS date to AD using a real converter, and use the result on every international form. Do not mix and match across documents. If you discover a genuine inconsistency between your citizenship and your passport, address it through the relevant office (District Administration Office for the citizenship, Department of Passports for the passport) rather than papering over it.</p>

<h2>How to fill the most common forms correctly</h2>

<h3>Citizenship application</h3>
<p>Bring your birth certificate or the parents' citizenships. The DOB on the form must be in BS. Convert from your birth certificate (which may be in AD) using the <a href="/ad-to-bs-converter/">AD to BS converter</a>. Write the day, month name (in Devanagari is preferred), and year, plus the bar (weekday).</p>

<h3>Passport application</h3>
<p>Your DOB section requires both BS and AD. The BS date comes from the citizenship certificate exactly as printed. The AD date is calculated using the <a href="/">BS to AD converter</a>. Do not invent the AD date from year arithmetic.</p>

<h3>PAN registration</h3>
<p>The PAN form requires BS date of birth and BS date of registration. Both should be written in DD/MM/YYYY format. Reference the citizenship for DOB.</p>

<h3>Tax filing</h3>
<p>Income tax forms (Internal Revenue Department) require dates in BS for the income year. Your income year for FY 2082/83 runs from 1 Shrawan 2082 to end of Ashadh 2083. All transaction dates should be in BS.</p>

<h3>Property documents (lalpurja, sale deed)</h3>
<p>Property registration is exclusively in BS. The day of registration, the BS year of last revenue payment, and the date of any prior transfers are all written in BS. Land Revenue Offices do not accept AD dates on the primary fields.</p>

<h3>School registration / SEE forms</h3>
<p>Your DOB must match the BS date on your birth certificate, and the school year of registration is written in BS. Inconsistencies here can cause problems years later when applying for university or jobs that need a verified DOB.</p>

<h2>If you have already submitted a wrong date</h2>
<p>Get ahead of it. Rejected applications are easier to fix when you spot the error early. If a form has been processed with an incorrect date, contact the issuing office promptly, bring the correct underlying document (the citizenship certificate), and request a correction. The bureaucratic process is slow but it is faster than the cascading consequences of an unresolved discrepancy.</p>

<h2>Frequently asked questions</h2>
<h3>Should I write months in Devanagari or English?</h3>
<p>Either is generally accepted, but Devanagari is preferred on Nepali-language forms ("माघ" rather than "Magh"). On English-language forms, English transliteration is fine. Just be consistent.</p>

<h3>Can I write the year with two digits?</h3>
<p>No. Always write the four-digit BS year. "82" could mean 1982 BS or 2082 BS or 2182 BS — write the full year.</p>

<h3>Is there a single online tool that does all this?</h3>
<p>For conversion, yes — see our <a href="/">converter homepage</a>. For the actual form filling, no; you still have to write each date by hand. The converter helps you avoid producing a wrong date in the first place.</p>

<h3>What if my birth certificate and citizenship disagree?</h3>
<p>The citizenship certificate is the senior document for adult identity in Nepal. Use it. If the discrepancy bothers you, you can apply for a corrected citizenship at the District Administration Office, but expect that to take time.</p>

<h3>How do I check my own DOB conversion?</h3>
<p>Two ways. Plug your BS DOB into the <a href="/">BS to AD converter</a>, then cross-check the AD result against your Nepali passport (which prints both). If they match, you are safe to use the result on international forms. For step-by-step instructions, see <a href="/blog/how-to-convert-date-of-birth-bs-to-ad/">how to convert your date of birth</a> and the more visa-specific <a href="/blog/bs-date-for-visa-application/">BS date for visa application</a> piece.</p>

<h2>Practical takeaway</h2>
<p>Filling BS dates on government forms is a small task with outsized consequences. The five mistakes above — wrong offset, invalid day, swapped order, guessed weekday, mismatched documents — cause almost all rejected applications. Use a real converter, treat your citizenship certificate as the master record, and write each date in full DD/MM/YYYY (BS) form. Two minutes of care saves weeks of corrections.</p>`,
  },
  {
    slug: "list-of-public-holidays-nepal",
    title: "Complete list of public holidays in Nepal (2082 BS / 2025-26 AD)",
    description: "All gazetted national, religious, and regional public holidays in Nepal for 2082 BS — with dates, descriptions, and what to expect on each day.",
    readingMinutes: 7,
    publishedIso: "2025-04-20",
    body: `<p>Nepal has one of the longer public-holiday calendars in the region. A typical year carries somewhere between 25 and 35 gazetted holidays, depending on how many fall on weekends and whether regional days are counted. This list covers the public holidays observed in 2082 BS (mid-April 2025 to mid-April 2026 AD), grouped by category, with brief notes on each day. For festivals tied to the lunar tithi cycle, exact AD dates shift each year — confirm against the annual patro published at the start of the BS year.</p>

<h2>National civic holidays</h2>
<p>These are tied to the solar Bikram Sambat calendar and fall on the same BS date every year.</p>

<ul>
<li><strong>Nepali New Year (Navabarsha)</strong> — 1 Baisakh. The first day of the BS year, celebrated nationwide with family gatherings, new clothes, and outdoor processions.</li>
<li><strong>Loktantra Diwas (Democracy Day)</strong> — 11 Baisakh. Commemorates the 2006 People's Movement and the restoration of democracy.</li>
<li><strong>International Labour Day</strong> — 18 Baisakh (1 May AD). A workers' holiday observed across the public and organised private sector.</li>
<li><strong>Republic Day (Ganatantra Diwas)</strong> — 15 Jestha. Marks the 2008 declaration of Nepal as a federal democratic republic.</li>
<li><strong>Constitution Day (Sambidhan Diwas)</strong> — 3 Ashwin. Celebrates the 2015 promulgation of the Constitution of Nepal.</li>
<li><strong>Prajatantra Diwas (Democracy Day)</strong> — 26 Magh (later renamed in some traditions). Commemorates the 1951 movement that ended the Rana regime.</li>
<li><strong>International Women's Day</strong> — 8 March AD (around 24 Falgun in 2082 BS). Public holiday for women.</li>
</ul>

<h2>Religious and cultural holidays — Hindu</h2>
<p>These follow the lunar tithi cycle and shift by a few days each year. The list below names the festival and the BS month it falls in for 2082 BS.</p>

<ul>
<li><strong>Ram Navami</strong> — Chaitra Shukla Navami. Birthday of Lord Ram, marking the end of Chaite Dashain.</li>
<li><strong>Buddha Jayanti</strong> — Baisakh Purnima. Birth, enlightenment, and parinirvana of the Buddha, observed by both Hindu and Buddhist communities.</li>
<li><strong>Janai Purnima and Raksha Bandhan</strong> — Shrawan Purnima. Brahmin and Chhetri men change the sacred thread (janai); sisters tie protective bands on brothers' wrists.</li>
<li><strong>Gai Jatra</strong> — day after Janai Purnima. Newar festival commemorating departed family members with a public procession.</li>
<li><strong>Krishna Janmashtami</strong> — Bhadra Krishna Ashtami. Birthday of Lord Krishna; observed with night-long bhajans and temple visits.</li>
<li><strong>Haritalika Teej</strong> — Bhadra Shukla Tritiya. Women's festival with day-long fasting, red saris, and visits to Shiva temples. See our companion piece on <a href="/blog/teej-festival-dates-2083/">Teej festival dates</a>.</li>
<li><strong>Indra Jatra</strong> — Bhadra Purnima. Kathmandu's classical street festival, with the Kumari procession at Hanuman Dhoka.</li>
<li><strong>Ghatasthapana</strong> — Ashwin Shukla Pratipada. Start of Dashain.</li>
<li><strong>Phulpati</strong> — Ashwin Shukla Saptami. Public procession from Gorkha to Kathmandu.</li>
<li><strong>Maha Ashtami</strong> — Ashwin Shukla Ashtami. Day of major Durga worship.</li>
<li><strong>Maha Navami</strong> — Ashwin Shukla Navami. Vishwakarma puja (worship of tools and vehicles).</li>
<li><strong>Vijaya Dashami</strong> — Ashwin or Kartik Shukla Dashami. The tika day of Dashain.</li>
<li><strong>Kojagrat Purnima</strong> — Ashwin or Kartik Purnima. Final day of Dashain.</li>
<li><strong>Laxmi Puja</strong> — Kartik Krishna Trayodashi or Amavasya. Central day of Tihar; lamps lit across homes.</li>
<li><strong>Govardhan Puja / Mha Puja</strong> — Kartik Shukla Pratipada. Fourth day of Tihar, also the Newar new year.</li>
<li><strong>Bhai Tika</strong> — Kartik Shukla Dwitiya. Fifth day of Tihar.</li>
<li><strong>Chhath</strong> — Kartik Shukla Shashthi. Sun and Chhathi Maiya worship, particularly in the Terai.</li>
<li><strong>Maghe Sankranti</strong> — 1 Magh. Winter harvest festival, solar transit into Capricorn. See our piece on <a href="/blog/maghe-sankranti-explained/">Maghe Sankranti explained</a>.</li>
<li><strong>Saraswati Puja (Basant Panchami)</strong> — Magh Shukla Panchami. Worship of the goddess of learning; many students start their first day of school on this day.</li>
<li><strong>Maha Shivaratri</strong> — Falgun Krishna Chaturdashi. Major Shaiva festival; Pashupatinath sees hundreds of thousands of visitors.</li>
<li><strong>Holi / Fagu Purnima</strong> — Falgun Purnima. Festival of colours. Hill regions and Terai observe on consecutive days under the gazette.</li>
<li><strong>Chaite Dashain</strong> — Chaitra Shukla Ashtami / Navami. Spring Dashain, smaller in scale than autumn Dashain.</li>
</ul>

<h2>Religious and cultural holidays — Buddhist, Tibetan, and other</h2>
<ul>
<li><strong>Sonam Lhosar</strong> — falls in Magh. New year for Tamang community.</li>
<li><strong>Gyalpo Lhosar</strong> — falls in Falgun. New year for Sherpa, Tibetan, and Yolmo communities.</li>
<li><strong>Tamu Lhosar (Lhochhar)</strong> — 15 Poush. New year for Gurung community; gazetted holiday.</li>
<li><strong>Buddha Jayanti</strong> — Baisakh Purnima. Listed under Hindu observances above; the day is the central Buddhist holiday of the year.</li>
<li><strong>Eid al-Fitr</strong> — observed by Muslim communities; date set by lunar Islamic calendar, varies sharply year to year.</li>
<li><strong>Eid al-Adha (Bakra Eid)</strong> — observed by Muslim communities; also varies year to year.</li>
<li><strong>Christmas Day</strong> — 25 December AD (around 10–11 Poush). Public holiday for Christian community.</li>
</ul>

<h2>Regional and community holidays</h2>
<p>Some holidays are gazetted only for specific regions or only for specific communities:</p>

<ul>
<li><strong>Holi (Hill)</strong> and <strong>Holi (Terai)</strong> — observed on consecutive days; only one is a holiday in any given district depending on location.</li>
<li><strong>Chhath</strong> — major holiday in the Terai; less observed in the hills, though gazetted nationally.</li>
<li><strong>Madhesh Provincial Days</strong> — additional regional holidays gazetted by the Madhesh province government.</li>
<li><strong>Janajati holidays</strong> — Lhosar holidays apply principally to the respective ethnic communities, though they are gazetted nationally for those communities.</li>
<li><strong>Maithili new year (Jur Sital)</strong> — observed in the eastern Terai around mid-April.</li>
</ul>

<h2>Restricted and observance days</h2>
<p>Some days are observed but not full public holidays — government offices stay open, schools may have programmes, and certain communities or sectors close.</p>

<ul>
<li><strong>Martyr's Day (Sahid Diwas)</strong> — 16 Magh. Public homage at Sahid Gate; flag at half-mast.</li>
<li><strong>Independence Day of various nations</strong> — observed by foreign embassies, not by the Nepali public.</li>
<li><strong>Children's Day</strong> — falls in mid-Bhadra.</li>
<li><strong>Teachers' Day</strong> — Guru Purnima, Ashadh Purnima.</li>
</ul>

<h2>What changes on a public holiday</h2>
<ul>
<li><strong>Government offices</strong>, including District Administration Offices, Land Revenue Offices, the Department of Passports, and the Department of Customs, are closed.</li>
<li><strong>Schools and universities</strong> are closed. The Dashain–Tihar window typically includes a longer extended break.</li>
<li><strong>Banks</strong> are closed on most gazetted holidays. The Nepal Rastra Bank publishes the official list each year; double-check the calendar at the start of FY 2082/83.</li>
<li><strong>Courts</strong> are closed.</li>
<li><strong>Markets and shops</strong> vary. Major festivals like Vijaya Dashami and Laxmi Puja see most shops closed; smaller holidays may pass with shops open.</li>
<li><strong>Public transport</strong> generally runs, though long-distance buses may be overbooked around festivals.</li>
<li><strong>Health services</strong> at hospitals and emergency clinics remain open.</li>
</ul>

<h2>How holiday dates are decided</h2>
<p>The Government of Nepal publishes an annual list of gazetted holidays through the Ministry of Home Affairs. The list is built from:</p>

<ol>
<li>Fixed BS calendar dates (1 Baisakh, 15 Jestha, 3 Ashwin, 26 Magh, etc.).</li>
<li>Lunar tithi-based festival dates, calculated by the Calendar Determination Committee.</li>
<li>Religious observances confirmed by community religious authorities (e.g. Eid dates by Muslim community leaders, Lhosar dates by Buddhist and ethnic community organisations).</li>
<li>Regional gazettes from provincial governments adding province-specific days.</li>
</ol>

<p>For exact dates each year, refer to the printed patro or the gazette notice issued by the Ministry of Home Affairs.</p>

<h2>Frequently asked questions</h2>
<h3>How many public holidays does Nepal have in a year?</h3>
<p>Typically 25 to 35, depending on how regional holidays and weekend overlaps are counted. The exact count varies year to year because of how tithi-based festivals fall.</p>

<h3>If a holiday falls on a Saturday, is Friday or Monday a holiday too?</h3>
<p>No. Unlike some Western systems, Nepal does not generally observe substitute holidays for weekend overlaps. The holiday is simply absorbed into the weekend.</p>

<h3>Are private-sector employees entitled to public holidays?</h3>
<p>Yes, under the Labour Act 2074. Private employers must grant leave on gazetted holidays, though some sectors (hospitality, transport, healthcare) may require staff to work with overtime compensation.</p>

<h3>Where can I check the exact AD date of a religious holiday?</h3>
<p>Use the <a href="/">BS to AD converter</a> once you know the BS date from the patro, or check the <a href="/today-nepali-date/">today in Nepali date</a> page on the morning of a likely holiday.</p>

<h3>Do banks always close on Saturdays?</h3>
<p>Yes. Saturday is the standard weekly off for banks and most government offices in Nepal. The week effectively runs Sunday through Friday.</p>

<h2>Practical takeaway</h2>
<p>Nepal's public-holiday list is long, varied, and woven from civic, religious, and regional threads. Knowing which days will close offices and which will close shops helps you plan everything from passport applications to flight bookings. For the specific dates each year, lean on the published patro and the <a href="/">BS to AD converter</a>; for deeper context on the bigger festivals, see <a href="/blog/dashain-2083-dates/">Dashain 2083 dates</a>, <a href="/blog/tihar-2083-dates/">Tihar 2083 dates</a>, and the <a href="/blog/nepali-calendar-2082-guide/">2082 BS year guide</a>.</p>`,
  },
  {
    slug: "nepali-months-in-order",
    title: "The 12 Nepali months in order — names, days, seasons and festivals",
    description: "Baisakh through Chaitra: the 12 Bikram Sambat months in order, with typical day counts, seasonal meaning, the festivals each contains, and a mnemonic.",
    readingMinutes: 6,
    publishedIso: "2025-08-12",
    body: `<p>Anyone working with Nepali dates eventually needs to memorise the twelve months of the Bikram Sambat (BS) calendar in the right order. Whether you are reading a citizenship card, planning a trip around Dashain, looking up a fiscal-year deadline, or simply trying to keep up with your relatives in Kathmandu, the month names are the foundation on which everything else rests. This guide walks through all twelve in sequence, explains roughly how long each one is, what season it covers in the AD calendar, and which major festivals or civic events you can expect inside it.</p>

<h2>Why the order matters</h2>
<p>Unlike the Gregorian calendar, where January through December are fixed in name and length, the Bikram Sambat months follow a sidereal solar cycle. Their lengths shift slightly from year to year because they are tied to the sun's transit through the zodiac. The order, however, never changes. Once you internalise the sequence Baisakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, Chaitra, the rest of the calendar starts to make sense — when the new year falls, when the fiscal year flips, when the monsoon hits, when Dashain arrives.</p>

<h2>The twelve months in order</h2>
<ol>
<li><strong>Baisakh</strong> (बैशाख) — Mid-April to mid-May, typically 30 or 31 days. The first month of the BS year. It opens with Nepali New Year on 1 Baisakh and contains Buddha Jayanti on Baisakh Purnima. Weather is warm and dry, with the first pre-monsoon showers in the hills.</li>
<li><strong>Jestha</strong> (जेठ) — Mid-May to mid-June, usually 31 or 32 days. The hottest month in much of the country. Republic Day falls on 15 Jestha, and the federal budget is traditionally presented to parliament around the same time. Pre-monsoon storms become heavier toward the end.</li>
<li><strong>Ashadh</strong> (असार) — Mid-June to mid-July, generally 31 or 32 days. The monsoon arrives in full force. Ashadh is the last month of the fiscal year, so government offices race to close projects and clear pending payments. Paddy planting begins in the hills and Terai.</li>
<li><strong>Shrawan</strong> (साउन) — Mid-July to mid-August, often 31 or 32 days. The new fiscal year starts on 1 Shrawan. It is the holy month of Shiva — devotees fast on Mondays (<em>somvar vrat</em>), wear green bangles, and visit Pashupatinath and other Shiva temples in large numbers. Janai Purnima also falls during Shrawan.</li>
<li><strong>Bhadra</strong> (भदौ) — Mid-August to mid-September, around 31 or 32 days. Heavy rain continues. The month contains Krishna Janmashtami, Gai Jatra (the Newar festival of cows), and Haritalika Teej — one of the most visible women's festivals in Nepal.</li>
<li><strong>Ashwin</strong> (असोज) — Mid-September to mid-October, typically 30 or 31 days. The monsoon recedes, skies clear, and Constitution Day is observed on 3 Ashwin. Dashain — Nepal's longest festival — begins in Ashwin with Ghatasthapana and continues into Kartik.</li>
<li><strong>Kartik</strong> (कार्तिक) — Mid-October to mid-November, usually 29 or 30 days. Dashain concludes early in Kartik with Vijaya Dashami, and Tihar (the festival of lights) follows about two weeks later. Weather turns crisp and clear.</li>
<li><strong>Mangsir</strong> (मंसिर) — Mid-November to mid-December, around 29 or 30 days. Traditionally considered an auspicious month for weddings because the weather is dry and cool. Harvest is largely complete.</li>
<li><strong>Poush</strong> (पुस) — Mid-December to mid-January, typically 29 or 30 days. The coldest month, particularly in the hills and high mountains. Many Newar communities observe <em>Yomari Punhi</em> in early Poush. Schools often take a winter break during Poush.</li>
<li><strong>Magh</strong> (माघ) — Mid-January to mid-February, around 29 or 30 days. Magh begins with Maghe Sankranti on 1 Magh, when families gather for til ko laddu, chaku and sweet potato. Prajatantra Diwas falls on 26 Magh. Sonam and Gyalpo Lhosar are usually celebrated by Tibetan-Buddhist communities in this period.</li>
<li><strong>Falgun</strong> (फाल्गुन) — Mid-February to mid-March, typically 29 or 30 days. Maha Shivaratri is observed on the dark fortnight of Falgun, with massive crowds gathering at Pashupatinath. Holi (Fagu Purnima) closes the month in the hill region; the Terai usually celebrates a day later.</li>
<li><strong>Chaitra</strong> (चैत) — Mid-March to mid-April, around 30 or 31 days. The last month of the BS year, often warm and dry. Chaite Dashain and Ram Navami fall here. The annual patro for the next BS year is finalised and goes on sale before Chaitra ends.</li>
</ol>

<h2>How long is each month, really?</h2>
<p>The simple Gregorian rhyme "thirty days hath September" does not work for BS. Each month can be 29, 30, 31 or 32 days, and the exact length is decided each year by Nepal's Calendar Determination Committee based on the sun's sidereal position. Broadly:</p>
<ul>
<li>The summer-monsoon months (Ashadh through Bhadra) tend to be the longest, often 31 or 32 days.</li>
<li>The winter months (Mangsir, Poush, Magh) tend to be the shortest, usually 29 or 30 days.</li>
<li>The spring months (Baisakh, Jestha, Falgun, Chaitra) sit in between.</li>
</ul>
<p>Because of this variation, you cannot reliably calculate "date plus N days" by guessing month lengths. Use a real <a href="/date-difference/">date difference calculator</a> or check the <a href="/today-nepali-date/">today's Nepali date</a> page for the current month's exact length.</p>

<h2>Seasons mapped to months</h2>
<p>Nepalis loosely divide the year into six seasons (<em>ritu</em>), each spanning roughly two BS months:</p>
<ul>
<li><strong>Basanta</strong> (spring) — Chaitra and Baisakh</li>
<li><strong>Grishma</strong> (summer) — Jestha and Ashadh</li>
<li><strong>Barsha</strong> (monsoon) — Shrawan and Bhadra</li>
<li><strong>Sharad</strong> (early autumn) — Ashwin and Kartik</li>
<li><strong>Hemanta</strong> (late autumn) — Mangsir and Poush</li>
<li><strong>Shishir</strong> (winter) — Magh and Falgun</li>
</ul>
<p>This six-season framing is older than the Gregorian four-season scheme and remains visible in classical poetry, ayurveda, and traditional farming calendars.</p>

<h2>Mnemonics for memorising the order</h2>
<p>Most Nepalis learn the months as a single rhythmic chant — "Baisakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, Chaitra." Read it aloud half a dozen times and it tends to stick. If you are learning from outside the country and prefer an associative trick, anchor each season to a festival you already know: Baisakh is New Year, Shrawan is Shiva, Ashwin is Dashain, Kartik is Tihar, Magh is Maghe Sankranti, Falgun is Holi. The festival names form natural milestones around the year.</p>

<h2>Where the month names come from</h2>
<p>The names are Sanskrit in origin and almost all are derived from <em>nakshatras</em> — the lunar mansions through which the moon passes during that month at the time of full moon. For example, Chaitra full moon traditionally falls in the Chitra nakshatra; Baisakh full moon in Vishakha; Jestha in Jyeshtha. The Bikram Sambat calendar applies these old lunar names to a solar calendar, which is why the link between name and lunar position is now historical rather than literal.</p>

<h2>Practical takeaway</h2>
<p>Memorise the twelve names and their rough AD windows once, and you will navigate Nepali documents, festivals, and government deadlines far more easily. For exact day-by-day conversion, lean on the <a href="/">BS to AD converter</a> or the <a href="/ad-to-bs-converter/">AD to BS converter</a> rather than counting in your head — month lengths shift year to year, and even Nepalis who have used the calendar all their life check the patro before booking anything important.</p>

<h2>Frequently asked questions</h2>
<h3>Which Nepali month is January?</h3>
<p>January overlaps with the end of Poush and the start of Magh. Maghe Sankranti on 1 Magh almost always falls on 14 or 15 January AD, which is the simplest anchor.</p>

<h3>Which Nepali month has the most days?</h3>
<p>Shrawan or Ashadh — both are commonly 31 or 32 days. The exact answer changes year to year and is published in the official patro.</p>

<h3>Which Nepali month is the new year?</h3>
<p>Baisakh. The BS year flips on 1 Baisakh, which falls on 13, 14 or 15 April in the AD calendar.</p>

<h3>Are the Nepali months lunar or solar?</h3>
<p>The Bikram Sambat calendar is a sidereal solar calendar — months are tied to the sun's transit through zodiac signs, not to the moon. However, the month names come from lunar nakshatras, and many religious observances inside each month are scheduled by lunar tithi.</p>

<h3>Do the months always start on the same AD date?</h3>
<p>Close, but not exact. Most months shift by one day from year to year because of the varying sidereal positions. Always check the converter rather than assuming.</p>
`,
  },
  {
    slug: "nepali-new-year-2083",
    title: "Nepali New Year 2083 BS — date, traditions and what to expect",
    description: "Nepali New Year 2083 (Navabarsha) falls on 14 April 2026 AD. Date, regional traditions, public holiday details and how to convert any 2083 BS date to AD.",
    readingMinutes: 7,
    publishedIso: "2026-01-10",
    body: `<p>Nepali New Year, known in Nepali as <em>Navabarsha</em> (नववर्ष), is the day the Bikram Sambat (BS) year ticks over. It falls on <strong>1 Baisakh</strong> every year, which lands somewhere between 13 and 15 April in the Gregorian (AD) calendar. For BS 2083, the date is <strong>14 April 2026 AD</strong> — a Tuesday. It is a national public holiday, a culturally significant family day, and the symbolic start of the spring planting season. Unlike the Gregorian 1 January, which arrives at the depth of winter and has no astronomical anchor in this part of the world, the BS new year arrives with spring, with the rhododendron bloom in the high hills, with the start of the warm season, and with the symbolic promise of new growth. This guide explains the date, the traditions surrounding it, and how to plan around it.</p>

<h2>When exactly is 1 Baisakh 2083?</h2>
<p>1 Baisakh 2083 BS = 14 April 2026 AD. The day will be a Tuesday. If you need to confirm any other 2083 BS date, use the <a href="/">BS to AD converter</a>; for an AD date you want to express in BS, use the <a href="/ad-to-bs-converter/">AD to BS converter</a>. Both tools use the official month-length tables published by Nepal's Calendar Determination Committee, so the day-of-week and AD date will match your citizenship card or patro.</p>

<p>The exact AD date drifts by a day from year to year because the BS calendar is sidereal solar — it tracks the sun's actual position against the fixed stars rather than the tropical zodiac that the Gregorian calendar implicitly assumes. The small mismatch between these two systems causes the one-day drift you sometimes see between successive years. Across the past two decades, 1 Baisakh has landed on 13 April three or four times, on 14 April most years, and occasionally on 15 April. The 2083 BS date is on 14 April.</p>

<h2>Why 1 Baisakh and not 1 January?</h2>
<p>Bikram Sambat is a sidereal solar calendar — its months align with the sun crossing zodiac signs. The new year begins when the sun enters the Mesh rashi (Aries), which happens in mid-April. This is also the date observed as the solar new year across much of South and Southeast Asia: Vaisakhi in Punjab, Songkran in Thailand, Pohela Boishakh in Bengal, and the Tamil New Year all share roughly the same date. The Gregorian 1 January, by contrast, has no astronomical significance in this tradition.</p>

<h2>How Nepali New Year is celebrated</h2>
<p>For most Nepali families, Navabarsha is a quieter holiday than Dashain or Tihar — but it has its own clear rhythm. Common observances include:</p>
<ul>
<li><strong>New clothes</strong> — many families buy and wear new clothes on 1 Baisakh, as a fresh start.</li>
<li><strong>Family meals</strong> — a special lunch with extended family, often featuring sel roti, dahi, and seasonal vegetables.</li>
<li><strong>Receiving elders' blessings</strong> — younger family members touch the feet of elders (<em>dhog</em>) and receive blessings (<em>aashirvad</em>) and sometimes a small cash gift.</li>
<li><strong>Buying a new patro</strong> — the year's almanac is purchased, often as a small printed booklet, listing month-by-month festival dates and auspicious times.</li>
<li><strong>Cleaning and re-organising the home</strong> — many families do a deep clean a day or two before, similar to spring cleaning.</li>
<li><strong>Visiting temples</strong> — devotees offer special pujas, particularly at Pashupatinath, Swayambhunath and Manakamana.</li>
</ul>

<h2>Regional variations</h2>
<p>Nepal's geographic and cultural diversity means New Year looks different in different parts of the country:</p>
<ul>
<li><strong>Kathmandu Valley</strong> — Public events at Basantapur Durbar Square, Patan Darbar and Bhaktapur. The famous <em>Bisket Jatra</em> chariot festival of Bhaktapur peaks around 1 Baisakh; pulling the towering chariot of Bhairav and Bhadrakali through the narrow streets is one of the most striking sights of the Nepali calendar.</li>
<li><strong>Hill regions</strong> — Communities organise traditional music and dance — <em>maruni</em>, <em>sorathi</em>, <em>balan</em> — and many villages host their own small fairs.</li>
<li><strong>Terai</strong> — The new year overlaps with the Maithili and Bhojpuri agricultural new year traditions; families visit the Janaki Mandir in Janakpur and other regional temples.</li>
<li><strong>Diaspora</strong> — Nepali communities in the UK, US, Australia, the Gulf and South Korea host cultural programmes, with concerts, dance performances and traditional food. The Non-Resident Nepali Association branches in major cities typically organise the largest events.</li>
</ul>

<h2>Public holiday and business closures</h2>
<p>1 Baisakh is a gazetted national public holiday. Government offices, schools, banks and most private businesses are closed. Restaurants, hotels and tourist-facing businesses remain open and often run special menus. International flights operate normally, though domestic flights see increased demand from people travelling home for the holiday. Public transport in Kathmandu is somewhat lighter than usual on the morning of 1 Baisakh, since fewer people commute to offices, but cultural and tourist sites such as Patan Durbar Square, Bhaktapur and Pashupatinath are noticeably busier than on an ordinary weekday.</p>

<p>The holiday is observed on 1 Baisakh itself; if it falls on a weekend, government offices do not generally compensate with an additional day off the way some Western calendars do. Schools that begin their new academic session shortly after typically schedule the first day of classes within a week of 1 Baisakh, so families plan around an early-Baisakh return to school.</p>

<h2>Baisakh in the fiscal year context</h2>
<p>Although Navabarsha opens the new calendar year, Baisakh sits in the last quarter of the fiscal year. Nepal's fiscal year — see our <a href="/blog/nepali-fiscal-year-explained/">fiscal year explainer</a> — runs from 1 Shrawan to the end of Ashadh, so the budget cycle and the calendar cycle do not align. For schools, civil servants and accountants, 1 Baisakh marks the start of the year on the patro but not on the office calendar. The new fiscal year (FY 2083/84) begins on 1 Shrawan 2083, which is 17 July 2026 AD.</p>

<h2>What changes on 1 Baisakh 2083?</h2>
<p>Practically speaking, several real-world things flip on Navabarsha:</p>
<ul>
<li>School class promotions are formally announced; the new academic session begins shortly after.</li>
<li>Newspapers and magazines publish the new patro and a flurry of "year in review" features.</li>
<li>Some agricultural calendars reset — particularly for vegetable rotations in the hills.</li>
<li>Tax filing forms and many official templates begin using the new BS year in their date fields.</li>
<li>Subscriptions tied to the BS year (some magazines, religious memberships, traditional almanacs) renew.</li>
</ul>

<h2>Cultural meaning of Navabarsha</h2>
<p>Nepali New Year is not associated with a single mythological event the way Dashain or Tihar are. It is more of a civic and seasonal marker — a fresh page, the symbolic start of the spring growing season, and a quiet expression of cultural identity. The 1903 AD decision to adopt Bikram Sambat as Nepal's official calendar — see <a href="/blog/what-is-bikram-sambat/">our explainer on what Bikram Sambat is</a> — gave 1 Baisakh added civic weight, since it is the day every government document, financial record and scholastic schedule rolls forward.</p>

<p>For Nepalis abroad, Navabarsha is often the most important occasion of the year to gather as a community, more so than Dashain or Tihar in places where Hindu festivals do not align with the working week. Embassies and consulates host receptions; cultural organisations stage music and dance programmes; many diaspora families wear traditional clothing for the day even when no other ritual is observed. The date provides a portable, secular anchor for Nepali identity outside the country — much the way Chinese New Year or Lunar New Year functions for Chinese and Korean diasporas.</p>

<h2>Planning around Nepali New Year 2083</h2>
<ul>
<li><strong>Travelling to Nepal</strong> — Mid-April is one of the best windows for trekking and sightseeing: the weather is warm, the rhododendrons are blooming in the high hills, and visibility is generally good before the pre-monsoon haze arrives in May.</li>
<li><strong>Travelling within Nepal</strong> — Domestic flights and long-distance buses fill up around the holiday. Book at least a week in advance if you want a guaranteed seat.</li>
<li><strong>Visiting family</strong> — Many people return to their ancestral village or town for the holiday. Markets are open through 31 Chaitra but most close on 1 Baisakh itself.</li>
<li><strong>Business deadlines</strong> — Avoid scheduling important business meetings on or immediately around 1 Baisakh — most counterparts will be on leave.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>What date is Nepali New Year 2083 BS?</h3>
<p>14 April 2026 AD, a Tuesday.</p>

<h3>Is Nepali New Year the same as Indian New Year?</h3>
<p>It shares the date with several solar new year celebrations across South Asia (Vaisakhi, Pohela Boishakh, Puthandu), but India does not have a single national new year — many regions use the Gregorian 1 January for civic purposes.</p>

<h3>Is Navabarsha a religious or secular holiday?</h3>
<p>It is mostly civic and cultural. There are some Hindu observances (Bisket Jatra in Bhaktapur is partly religious) but no countrywide religious obligation. People of all faiths in Nepal observe it as a national holiday.</p>

<h3>Will banks and offices be closed on 1 Baisakh 2083?</h3>
<p>Yes — government offices, schools, banks and most private offices close. Hospitality and tourism businesses remain open.</p>

<h3>How do I convert other 2083 BS dates to AD?</h3>
<p>Use the <a href="/">BS to AD converter</a> on the homepage. For a full month-by-month layout of the year, see our <a href="/blog/nepali-calendar-2083-guide/">2083 BS calendar guide</a>.</p>
`,
  },
  {
    slug: "nepali-calendar-2083-guide",
    title: "Nepali calendar 2083 BS — month-by-month guide and festivals",
    description: "Complete guide to the year 2083 BS: month lengths, AD windows, major festivals, fiscal year dates, public holidays and conversion tips for daily use.",
    readingMinutes: 7,
    publishedIso: "2026-01-20",
    body: `<p>Year <strong>2083 of the Bikram Sambat calendar</strong> begins on <strong>14 April 2026 AD</strong> and runs until <strong>13 April 2027 AD</strong>. It is the year immediately after 2082 BS and shares its underlying structure with every other BS year: twelve solar months of varying lengths, a fiscal year that starts in Shrawan, a set of national and religious public holidays, and a mix of festivals tied to either the solar grid or the lunar tithi. This guide walks through the year month by month, with all the dates and details you need to plan around it.</p>

<h2>2083 BS at a glance</h2>
<ul>
<li><strong>First day:</strong> 1 Baisakh 2083 = 14 April 2026 AD (Tuesday)</li>
<li><strong>Last day:</strong> 30 Chaitra 2083 = 13 April 2027 AD</li>
<li><strong>Total days:</strong> 365 (the BS year is approximately the same length as the AD year)</li>
<li><strong>Fiscal year:</strong> FY 2083/84 begins on 1 Shrawan 2083 (17 July 2026 AD)</li>
<li><strong>Year before:</strong> <a href="/blog/nepali-calendar-2082-guide/">2082 BS calendar guide</a></li>
<li><strong>Calendar season:</strong> the year covers most of AD 2026 and the first quarter of AD 2027</li>
</ul>

<p>Because the BS and AD calendars are both solar, each BS year contains roughly the same number of days as a Gregorian year (around 365). Where they differ is in how those days are distributed across the twelve months. The BS calendar uses sidereal solar months that vary in length from 29 to 32 days; the Gregorian calendar uses fixed-length months adjusted by a single leap day. So a single AD year overlaps with the end of one BS year and the start of the next; 2083 BS, for example, occupies the last seven months of AD 2026 plus the first three and a half months of AD 2027.</p>

<h2>Month lengths in 2083 BS</h2>
<p>Month lengths in Bikram Sambat are not fixed — they are recalculated each year by the Nepal Calendar Determination Committee based on the sun's sidereal position. For 2083 BS the structure is as follows.</p>
<table>
<tr><td><strong>Month</strong></td><td><strong>Days</strong></td><td><strong>Approx AD window</strong></td></tr>
<tr><td>Baisakh</td><td>31</td><td>14 Apr – 14 May 2026</td></tr>
<tr><td>Jestha</td><td>31</td><td>15 May – 14 Jun 2026</td></tr>
<tr><td>Ashadh</td><td>32</td><td>15 Jun – 16 Jul 2026</td></tr>
<tr><td>Shrawan</td><td>31</td><td>17 Jul – 16 Aug 2026</td></tr>
<tr><td>Bhadra</td><td>31</td><td>17 Aug – 16 Sep 2026</td></tr>
<tr><td>Ashwin</td><td>31</td><td>17 Sep – 17 Oct 2026</td></tr>
<tr><td>Kartik</td><td>30</td><td>18 Oct – 16 Nov 2026</td></tr>
<tr><td>Mangsir</td><td>29</td><td>17 Nov – 15 Dec 2026</td></tr>
<tr><td>Poush</td><td>30</td><td>16 Dec 2026 – 14 Jan 2027</td></tr>
<tr><td>Magh</td><td>29</td><td>15 Jan – 12 Feb 2027</td></tr>
<tr><td>Falgun</td><td>30</td><td>13 Feb – 14 Mar 2027</td></tr>
<tr><td>Chaitra</td><td>30</td><td>15 Mar – 13 Apr 2027</td></tr>
</table>

<h2>Fiscal year in 2083 BS</h2>
<p>Nepal's fiscal year always runs from 1 Shrawan to the last day of Ashadh in the following BS year. So during 2083 BS you are actually inside two different fiscal years:</p>
<ul>
<li><strong>FY 2082/83</strong> ends on the last day of Ashadh 2083 (16 July 2026 AD). The first three months of 2083 BS — Baisakh, Jestha and Ashadh — belong to this outgoing FY.</li>
<li><strong>FY 2083/84</strong> begins on 1 Shrawan 2083 (17 July 2026 AD) and ends on the last day of Ashadh 2084. The final nine months of 2083 BS belong to this new FY.</li>
</ul>
<p>The federal budget for FY 2083/84 will be presented to parliament around 15 Jestha 2083 (late May 2026), giving ministries roughly six weeks to prepare for the new spending cycle. For more on how fiscal years are labelled and used, read our <a href="/blog/nepali-fiscal-year-explained/">fiscal year explainer</a>.</p>

<h2>Major festivals month by month</h2>
<p>Some festivals are tied to fixed BS dates (Maghe Sankranti, Nepali New Year). Others are tied to lunar tithis and shift relative to the solar BS calendar each year.</p>

<h3>Baisakh (mid-April to mid-May 2026)</h3>
<ul>
<li><strong>Nepali New Year</strong> — 1 Baisakh 2083 (14 April 2026)</li>
<li><strong>Loktantra Diwas</strong> — 11 Baisakh</li>
<li><strong>International Labour Day</strong> — 18 Baisakh (1 May AD)</li>
<li><strong>Buddha Jayanti</strong> — Baisakh Purnima, typically late Baisakh</li>
</ul>

<h3>Jestha (mid-May to mid-June 2026)</h3>
<ul>
<li><strong>Republic Day</strong> — 15 Jestha</li>
<li><strong>Budget Day</strong> — typically 15 Jestha</li>
</ul>

<h3>Ashadh (mid-June to mid-July 2026)</h3>
<ul>
<li><strong>End of FY 2082/83</strong> — last day of Ashadh 2083</li>
<li>Monsoon paddy planting begins</li>
</ul>

<h3>Shrawan (mid-July to mid-August 2026)</h3>
<ul>
<li><strong>Start of FY 2083/84</strong> — 1 Shrawan</li>
<li><strong>Janai Purnima</strong> — Shrawan Purnima</li>
<li>Monday fasts (somvar vrat) for Lord Shiva throughout the month</li>
</ul>

<h3>Bhadra (mid-August to mid-September 2026)</h3>
<ul>
<li><strong>Krishna Janmashtami</strong> — Bhadra Krishna Ashtami</li>
<li><strong>Gai Jatra</strong> — Bhadra (Newar community)</li>
<li><strong>Teej</strong> — Shukla Tritiya of Bhadra; see our <a href="/blog/teej-festival-dates-2083/">Teej 2083 dates guide</a></li>
</ul>

<h3>Ashwin (mid-September to mid-October 2026)</h3>
<ul>
<li><strong>Constitution Day</strong> — 3 Ashwin</li>
<li><strong>Ghatasthapana</strong> (start of Dashain) — see our <a href="/blog/dashain-2083-dates/">Dashain 2083 dates</a></li>
<li><strong>Phulpati</strong> — seventh day of Navaratri</li>
<li><strong>Maha Ashtami and Maha Navami</strong> — late Ashwin</li>
</ul>

<h3>Kartik (mid-October to mid-November 2026)</h3>
<ul>
<li><strong>Vijaya Dashami</strong> — early Kartik</li>
<li><strong>Tihar</strong> — five days in late Kartik; see our <a href="/blog/tihar-2083-dates/">Tihar 2083 guide</a></li>
<li><strong>Chhath Parva</strong> — late Kartik, especially in the Terai</li>
</ul>

<h3>Mangsir (mid-November to mid-December 2026)</h3>
<ul>
<li>Peak wedding season — auspicious for marriages</li>
<li>Harvest and threshing in the hills</li>
</ul>

<h3>Poush (mid-December to mid-January 2027)</h3>
<ul>
<li><strong>Yomari Punhi</strong> — early Poush (Newar)</li>
<li>Winter break in many schools</li>
</ul>

<h3>Magh (mid-January to mid-February 2027)</h3>
<ul>
<li><strong>Maghe Sankranti</strong> — 1 Magh; see our <a href="/blog/maghe-sankranti-explained/">Maghe Sankranti explainer</a></li>
<li><strong>Sonam Lhosar</strong> — Tamang community</li>
<li><strong>Prajatantra Diwas</strong> — 26 Magh</li>
</ul>

<h3>Falgun (mid-February to mid-March 2027)</h3>
<ul>
<li><strong>Gyalpo Lhosar</strong> — Sherpa, Tibetan-Buddhist communities</li>
<li><strong>Maha Shivaratri</strong> — Falgun Krishna Chaturdashi</li>
<li><strong>Holi (Hill)</strong> — Falgun Purnima</li>
<li><strong>Holi (Terai)</strong> — usually one day later</li>
</ul>

<h3>Chaitra (mid-March to mid-April 2027)</h3>
<ul>
<li><strong>Chaite Dashain</strong> — Shukla Ashtami of Chaitra</li>
<li><strong>Ram Navami</strong> — Shukla Navami of Chaitra</li>
<li>End of BS year on 30 Chaitra 2083 (13 April 2027)</li>
</ul>

<h2>Public holidays summary</h2>
<p>The Government of Nepal publishes the official list of public holidays each year. The fixed ones in 2083 BS include: Nepali New Year (1 Baisakh), Loktantra Diwas (11 Baisakh), International Labour Day (18 Baisakh / 1 May), Republic Day (15 Jestha), Constitution Day (3 Ashwin), Maghe Sankranti (1 Magh) and Prajatantra Diwas (26 Magh). For the full list including the lunar holidays whose dates shift, see our <a href="/blog/list-of-public-holidays-nepal/">public holidays list</a>.</p>

<h2>Practical tips for navigating 2083 BS</h2>
<ul>
<li><strong>School calendars</strong> — most schools begin their new academic session in early-to-mid Baisakh 2083, with the final exam cycle of the previous year wrapping up in late Chaitra 2082. Confirm exact dates with individual school administrations.</li>
<li><strong>Tax filing</strong> — quarterly VAT returns and the annual income-tax filing for FY 2082/83 are due in the early months of 2083 BS. The annual income-tax deadline for individuals is typically the end of Ashoj.</li>
<li><strong>Wedding season</strong> — Mangsir (mid-November to mid-December 2026) is the traditional peak wedding month. Book venues, photographers and travel well in advance if you plan to attend a wedding in this period.</li>
<li><strong>Trekking season</strong> — the post-monsoon window from Ashwin through Mangsir offers the clearest mountain views. The spring window in Falgun and Chaitra is the second-best time, with rhododendrons in bloom.</li>
<li><strong>Government deadlines</strong> — most government deadlines are specified in BS dates. Convert any deadline to AD using the <a href="/">BS to AD converter</a> so you can set calendar reminders in your phone or work calendar.</li>
</ul>

<h2>Comparing 2082 and 2083 BS month lengths</h2>
<p>The structure of 2083 BS is very similar to 2082 BS but with a few subtle differences in month lengths. The most notable variations:</p>
<ul>
<li>Ashadh 2083 has 32 days; Ashadh 2082 had 31</li>
<li>Magh 2083 has 29 days, the same as Magh 2082</li>
<li>Shrawan 2083 has 31 days; Shrawan 2082 had 32</li>
</ul>
<p>These small variations matter for legal contracts and deadlines that are written in days rather than month boundaries. Use the <a href="/date-difference/">date difference calculator</a> for any precise day-count between two BS dates in this year.</p>

<h2>Quick conversion tips for 2083 BS</h2>
<ul>
<li>Use the <a href="/">BS to AD converter</a> for any specific date. Do not subtract 56 or 57 from the BS year mechanically — the result is wrong for dates in January through mid-April AD.</li>
<li>Use the <a href="/ad-to-bs-converter/">AD to BS converter</a> to go in the other direction.</li>
<li>For age calculation in either calendar, the <a href="/age-calculator/">age calculator</a> handles both.</li>
<li>To check today's date in BS, see the <a href="/today-nepali-date/">today's Nepali date</a> page.</li>
</ul>

<h2>Frequently asked questions</h2>
<h3>How many days are in 2083 BS?</h3>
<p>2083 BS has 365 days, exactly matching the length of an AD year (since both calendars track the solar year).</p>

<h3>When does FY 2083/84 start?</h3>
<p>1 Shrawan 2083 BS, which is 17 July 2026 AD.</p>

<h3>When is Dashain in 2083 BS?</h3>
<p>Ghatasthapana is in late Ashwin 2083; Vijaya Dashami is in early Kartik 2083. See our <a href="/blog/dashain-2083-dates/">Dashain 2083 guide</a> for full dates.</p>

<h3>Is 2083 BS a leap year?</h3>
<p>The BS calendar does not use the leap-year concept the same way the Gregorian calendar does — it adjusts month lengths each year instead. 2083 BS has a long Ashadh (32 days) but the total still works out to 365 days.</p>

<h3>How do I get a printed patro for 2083 BS?</h3>
<p>Printed patros are sold across Nepal from around Chaitra 2082 onward, at bookshops, temples and local kiosks. Most include daily tithi, festival dates and auspicious times. See our <a href="/blog/nepali-patro-guide/">patro guide</a> for what to look for.</p>
`,
  },
  {
    slug: "maghe-sankranti-explained",
    title: "Maghe Sankranti explained: Nepal's winter solstice festival on 1 Magh",
    description: "Maghe Sankranti falls on 1 Magh (14 or 15 January). Significance, traditional foods, regional rituals, public holiday status and exact dates for 2082–2084 BS.",
    readingMinutes: 7,
    publishedIso: "2026-01-14",
    body: `<p><strong>Maghe Sankranti</strong> (माघे संक्रान्ति) is one of Nepal's most widely observed mid-winter festivals. It falls on <strong>1 Magh</strong> every year, the first day of the tenth month of the Bikram Sambat calendar, which lands on 14 or 15 January in the AD calendar. The day marks the sun's transition into Capricorn (Makara rashi), the end of the inauspicious southern-solstice period, and the symbolic start of longer, warmer days. It is observed across Hindu households in Nepal with ritual baths, specific seasonal foods, and family gatherings.</p>

<h2>The astronomical event</h2>
<p>Sankranti means "transition" in Sanskrit, and refers specifically to the sun's movement from one zodiac sign to the next. There are twelve such sankrantis in a year, one for each zodiac sign. Makara Sankranti — the sun's entry into Capricorn — is considered the most spiritually significant because it marks the start of <em>Uttarayan</em>, the half-year in which the sun travels northward in the sky. In Hindu tradition, Uttarayan is a fortunate, life-affirming period; the preceding <em>Dakshinayan</em> (sun moving south) is associated with inactivity and is less favourable for new beginnings.</p>
<p>Because the BS calendar is sidereal solar, the sun's entry into Makara always falls on 1 Magh by construction. The corresponding AD date is almost always 14 or 15 January, with a one-day variation due to the slight drift between the sidereal and tropical zodiac systems.</p>

<p>The connection between Makara Sankranti and Uttarayan is older than the Bikram Sambat calendar itself — references to the festival appear in ancient Sanskrit texts including the Mahabharata, where the dying warrior Bhishma is said to have waited for Uttarayan to give up his earthly form, believing it the auspicious moment to depart. This deep textual lineage gives the festival a continuity that crosses sectarian and regional boundaries. While details of celebration differ widely, the underlying astronomical event and its religious significance are shared across most Hindu communities.</p>

<h2>The traditional foods of Maghe Sankranti</h2>
<p>Maghe Sankranti is deeply associated with specific seasonal foods, almost all of which are believed to generate body warmth in the cold of January. A traditional Nepali household will prepare or buy:</p>
<ul>
<li><strong>Til ko laddu</strong> — small balls of sesame seeds bound with jaggery. Sesame is considered warming in ayurveda and is the signature ingredient of the day.</li>
<li><strong>Chaku</strong> — hardened molasses candy, a Newar speciality. Often prepared by professional <em>chaku</em> makers who sell it from street stalls in the days before Maghe Sankranti.</li>
<li><strong>Sweet potato (sakharkhanda)</strong> and <strong>taro root (pidalu/tarul)</strong> — boiled or roasted, eaten with ghee or honey.</li>
<li><strong>Yam (ghar tarul)</strong> — large root vegetables boiled and shared at family meals.</li>
<li><strong>Ghee (clarified butter)</strong> — considered deeply nourishing in the cold season.</li>
<li><strong>Khichari</strong> — a mild rice-and-lentil dish, sometimes prepared with a small offering portion for the household deity.</li>
</ul>
<p>Eating these foods on 1 Magh is more than a tradition — it is part of a folk-medical idea that the body needs warmth-generating food at the peak of winter. The fact that these foods are seasonal (sesame and root vegetables are harvested in late autumn) reinforces the connection between the festival and the agricultural cycle.</p>

<h2>Religious rituals</h2>
<p>The most common ritual is the <em>holy bath</em> at a river confluence (<em>triveni</em>) or sacred bathing site. The most famous gathering happens at <strong>Devghat</strong>, where the Trishuli and Kali Gandaki rivers meet near Chitwan — tens of thousands of pilgrims gather here from a week before the festival. Other major sites include Triveni Dham at the southern border, the Bagmati at Pashupatinath, and the various river confluences in the Karnali and Koshi basins.</p>
<p>After the bath, devotees offer prayers (often to Lord Shiva or to the sun) and donate food, clothing or money to the needy. Maghe Sankranti is one of the most active days of the year for charitable giving in Nepal — sesame and rice are the most commonly donated items, in keeping with the seasonal theme.</p>

<h2>Regional and community variations</h2>
<ul>
<li><strong>Newar community</strong> — Newars call the festival <em>Ghyo Chaku Salhu</em>, literally "ghee and chaku day." Married women receive gifts of ghee and chaku from their parental homes, and families gather for a special meal.</li>
<li><strong>Tharu community</strong> — In the western Terai, the Tharu observe <em>Maghi</em>, which is one of the most important festivals of the Tharu year. It is associated with the end of the agricultural-labour contract year, the settling of accounts between households, and the start of a new working cycle. Maghi Mela at Tikapur draws large crowds.</li>
<li><strong>Madhesi community</strong> — In the central and eastern Terai, the day is marked with til-and-jaggery sweets and bathing at the Koshi and Bagmati confluences. The festival overlaps with the Makar Mela fairs.</li>
<li><strong>Hill communities</strong> — Smaller-scale family gatherings, traditional foods, and visits to local Shiva temples.</li>
</ul>

<h2>Exact dates for the next few BS years</h2>
<ul>
<li>Maghe Sankranti 2082 BS — <strong>15 January 2026 AD</strong></li>
<li>Maghe Sankranti 2083 BS — <strong>15 January 2027 AD</strong></li>
<li>Maghe Sankranti 2084 BS — <strong>14 January 2028 AD</strong></li>
</ul>
<p>To confirm any other 1 Magh date in the future or past, use the <a href="/">BS to AD converter</a>.</p>

<h2>Public holiday status</h2>
<p>Maghe Sankranti is a gazetted public holiday in Nepal. Government offices, banks and most private businesses close for the day. Schools also typically take the day off; in some districts the closure extends into the second day if local fairs are held. Public transport runs but is heavier than usual on routes leading to Devghat, Triveni Dham and other pilgrimage sites.</p>

<h2>Maghe Sankranti and the wider Indian sub-continent</h2>
<p>The same astronomical event — the sun entering Capricorn — is celebrated under different names across South Asia: <em>Makar Sankranti</em> in northern India, <em>Pongal</em> in Tamil Nadu, <em>Lohri</em> the day before in Punjab, <em>Uttarayan</em> in Gujarat, and <em>Magh Bihu</em> in Assam. The shared date reflects the shared sidereal-solar calendar tradition. In Nepal, however, the festival has its own distinct flavour — particularly the central role of til ko laddu, chaku and root vegetables, and the prominence of the Tharu Maghi celebrations.</p>

<h2>Why the date doesn't shift like Dashain or Tihar</h2>
<p>Many people notice that Dashain and Tihar shift by a few days each year in the AD calendar — sometimes early October, sometimes late October. Maghe Sankranti does not. The reason is that Dashain and Tihar are tied to lunar tithis (specific phases of the moon), which drift relative to the solar year, while Maghe Sankranti is tied directly to the solar event of the sun entering Capricorn. Solar events repeat at the same AD date almost exactly each year, with only a single-day variation due to leap years.</p>

<h2>Practical takeaway</h2>
<p>If you are planning to travel in Nepal in mid-January, treat 14 and 15 January as a public-holiday window. Pilgrimage routes to Devghat will be busy; chaku stalls will be set up on every major street in Kathmandu Valley a few days before. For visa, school or government deadlines, remember that 1 Magh is closed — push deadlines to 2 Magh or later.</p>

<h2>How Maghe Sankranti fits into the year</h2>
<p>Maghe Sankranti is the first major festival of the Nepali winter half-year. The festivals that precede it (Dashain, Tihar, Chhath) are concentrated in autumn; after Maghe Sankranti the calendar shifts to a different rhythm of Sonam Lhosar, Gyalpo Lhosar, Maha Shivaratri and Holi in late winter, then a slow build toward the new year in Baisakh. Each of these festivals has its own community and seasonal logic, but Maghe Sankranti stands out for being one of the most universally observed across regions, communities and language groups in Nepal.</p>

<p>For families with mixed traditions — say, a Brahmin parent and a Tharu parent, or a Newar parent and a Madhesi parent — Maghe Sankranti is often the festival where the children learn about both sides of their heritage at the same dinner table. Til ko laddu from one tradition, chaku from another, fish curry from a third all appear together. That layered, plural observance is itself a feature of how the festival is lived in modern Nepal.</p>

<p>For more on the BS calendar and Nepal's other festivals, see our <a href="/blog/nepali-calendar-2083-guide/">2083 BS calendar guide</a> or the <a href="/blog/list-of-public-holidays-nepal/">complete public holidays list</a>.</p>

<h2>Frequently asked questions</h2>
<h3>When is Maghe Sankranti 2083?</h3>
<p>1 Magh 2083 BS, which is 15 January 2027 AD.</p>

<h3>Is Maghe Sankranti the Nepali winter solstice?</h3>
<p>It is close to the astronomical winter solstice but not exactly the same. The actual solstice is on 21 or 22 December; Maghe Sankranti is the day the sun enters Capricorn in the sidereal zodiac, about three weeks later.</p>

<h3>What is the traditional food on Maghe Sankranti?</h3>
<p>Til ko laddu (sesame balls), chaku (molasses candy), sweet potato, taro and ghee — all considered warming foods for winter.</p>

<h3>Is Maghe Sankranti a public holiday?</h3>
<p>Yes, it is gazetted across Nepal. Government offices, banks and most private businesses close.</p>

<h3>Why do people bathe in rivers on Maghe Sankranti?</h3>
<p>A ritual bath at a sacred river confluence is believed to bring spiritual merit and mark the auspicious turn from Dakshinayan to Uttarayan. Devghat is the most famous bathing site for the day.</p>
`,
  },
  {
    slug: "how-to-convert-date-of-birth-bs-to-ad",
    title: "How to convert your Nepali date of birth from BS to AD — step by step",
    description: "Passports, visas, foreign universities and international jobs require your DOB in AD. A practical, error-free guide to converting your Nepali BS birth date.",
    readingMinutes: 6,
    publishedIso: "2026-02-03",
    body: `<p>If you were born in Nepal, the date of birth on your citizenship certificate, school-leaving certificate (SLC/SEE) and most official Nepali records is in <strong>Bikram Sambat (BS)</strong>. Anything international — passport applications, visa forms, foreign university admissions, overseas job postings, bank KYC for international transfers — requires your date of birth in the <strong>Gregorian (AD)</strong> calendar. Converting accurately is essential. A one-day error sounds minor but can cause visa rejections, identity-mismatch flags during background checks, and ongoing administrative headaches later.</p>

<p>This guide walks through the conversion step by step, covers the common mistakes that trip people up, and shows you how to verify your result against documents you already have.</p>

<h2>Why your BS and AD dates don't differ by a fixed number</h2>
<p>The most common mistake is to assume that subtracting 56 or 57 from your BS year gives the right AD year. This works most of the time, but fails for a specific window each year. The reason is that the BS new year falls on 1 Baisakh, which lands in mid-April AD — not on 1 January. So:</p>
<ul>
<li>For births between mid-April and 31 December AD, the BS year is AD year + 57.</li>
<li>For births between 1 January and mid-April AD, the BS year is AD year + 56.</li>
</ul>
<p>A worked example: a person born on 5 Baisakh 2040 BS was born on 18 April 1983 AD — the year offset is 57 (2040 – 1983). But a person born on 5 Magh 2040 BS was born on 17 January 1984 AD — the year offset is 56 (2040 – 1984). Same BS year, different AD years.</p>
<p>This is why you need a real converter, not pen-and-paper subtraction. For the full mathematical explanation, see our <a href="/blog/how-bs-to-ad-conversion-works/">how BS to AD conversion works</a> article.</p>

<h2>Step 1: locate your BS date of birth</h2>
<p>Your authoritative BS DOB appears on one or more of these documents:</p>
<ul>
<li><strong>Citizenship certificate (Nagarikta)</strong> — the primary civil identity document in Nepal. The DOB is printed in BS, sometimes with the day of the week.</li>
<li><strong>Birth registration certificate</strong> — issued by the local ward office.</li>
<li><strong>School-leaving certificate (SLC/SEE)</strong> — usually in BS, occasionally with both BS and AD.</li>
<li><strong>Passport</strong> — this is special: the passport always carries your AD date of birth, derived at the time of issuance from your citizenship's BS date.</li>
</ul>
<p>If multiple documents disagree, the citizenship certificate is the legal source of truth in Nepal. Get any discrepancies corrected through the District Administration Office before you start travelling internationally on inconsistent dates.</p>

<h2>Step 2: convert with a verified tool</h2>
<p>The fastest, most reliable method is to use the <a href="/">BS to AD converter</a>:</p>
<ol>
<li>Open the converter on the homepage.</li>
<li>Enter the BS year, month and day from your citizenship certificate.</li>
<li>The converter returns the exact AD date and the day of the week.</li>
</ol>
<p>This takes a few seconds and avoids all the arithmetic pitfalls. The converter uses Nepal's official month-length tables from 1970 BS through 2099 BS, so it will work for anyone born in that range — effectively every living Nepali.</p>

<h2>Step 3: cross-check against your passport</h2>
<p>If you already have a Nepali passport, your AD date of birth is printed on the data page and embedded in the Machine-Readable Zone (MRZ) at the bottom. Compare:</p>
<ul>
<li>The AD date the converter returned</li>
<li>The AD date printed on your passport</li>
</ul>
<p>If they match — you are done. Use the passport AD date on your visa application.</p>
<p>If they differ — do not silently "correct" one to the other on your visa form. Differences usually mean the passport was issued with an old or inconsistent conversion. Get the discrepancy resolved at the District Administration Office (for citizenship) or the Passport Office (for passport) before you submit any new international application. Cross-document mismatches can trigger visa refusals.</p>

<h2>Step 4: format the AD date for the destination</h2>
<p>Different international systems expect different date formats. Once you have your AD year, month and day, write them in the format the form expects:</p>
<ul>
<li><strong>YYYY-MM-DD</strong> (ISO 8601) — used in many online forms and Canada IRCC</li>
<li><strong>DD/MM/YYYY</strong> — used in UK, Australia, Schengen states</li>
<li><strong>MM/DD/YYYY</strong> — used by US DS-160 visa applications</li>
<li><strong>DD-MMM-YYYY</strong> (e.g. 14-APR-1990) — used by some airlines and banks</li>
</ul>
<p>Always include leading zeros for months and days under 10: write <code>04</code>, not <code>4</code>. Inconsistencies in zero-padding can cause data-entry rejections in strict government systems.</p>

<h2>Common mistakes to avoid</h2>
<ul>
<li><strong>Subtracting 57 every time</strong> — fails for Baisakh, Jestha, Ashadh births that fell before mid-April AD (rare but real).</li>
<li><strong>Writing 32 days when there are fewer</strong> — Nepali months can be 32 days but not always. Check the converter before writing a day that doesn't exist.</li>
<li><strong>Mixing US and UK date formats</strong> — 04/05/1990 is 4 May 1990 in the UK and 5 April 1990 in the US. Confirm which format the form expects.</li>
<li><strong>Using the original birth-paper date when your citizenship corrects it</strong> — some older birth papers had estimated dates; the citizenship certificate's date is the legal one.</li>
<li><strong>Ignoring the day-of-week field</strong> — some Nepali official forms ask for the day of the week as well. The day of the week is the same in both BS and AD, but you must report what the converter says, not what you guess.</li>
</ul>

<h2>What to do if you don't know your BS date of birth</h2>
<p>Some Nepalis born in remote areas have approximate BS dates on their original birth records, or no birth record at all. In that case:</p>
<ol>
<li>Consult older family members who may remember the day relative to a known event (a festival, the year of a major political event, a season).</li>
<li>Apply for a delayed birth certificate at your local ward office, providing whatever supporting evidence you have.</li>
<li>Once you have an official BS date, use the converter to get the AD equivalent and apply this consistently to all future documents.</li>
</ol>
<p>Going abroad with inconsistent or estimated DOBs almost always causes trouble down the line. It is worth investing a few weeks in fixing the underlying record before you apply for your first international visa.</p>

<h2>For accountants and HR teams handling many records</h2>
<p>If you process many Nepali documents — for example as an HR team for an international firm or as a manpower agency — you may want to integrate the converter into your workflow. The site provides a free <a href="/api-docs/">API</a> that returns AD dates for any BS input, suitable for batch conversion of employee records. The <a href="/widget/">embeddable widget</a> can also be added to internal HR forms so candidates enter their BS DOB once and the AD equivalent appears automatically.</p>

<h2>Practical takeaway</h2>
<p>Convert once, verify against your passport, and write the AD date down in a secure place. Most adults will need their AD DOB dozens of times across their life — for visas, banking, foreign jobs, university admissions, even airline frequent-flyer accounts. Getting it right the first time saves a lot of re-paperwork.</p>

<h2>Frequently asked questions</h2>
<h3>What is the AD equivalent of 2040/04/12 BS?</h3>
<p>Use the <a href="/">BS to AD converter</a> — enter 2040 / 04 / 12 (year / month / day). Each BS date has exactly one AD equivalent, calculated from Nepal's official month-length tables.</p>

<h3>Why is my passport DOB different from what the converter says?</h3>
<p>Most likely the passport was issued with an outdated conversion or rounded estimate. Cross-check both against your citizenship certificate and get the passport corrected if needed — do not change your visa application to fit one document over the other.</p>

<h3>Is there a single offset I can apply to all my BS dates?</h3>
<p>No. The offset is 56 years 8 months on average but varies by exact date. Use the converter or our <a href="/blog/difference-between-bs-and-ad/">BS vs AD differences guide</a>.</p>

<h3>Can I trust the AD year on my school-leaving certificate?</h3>
<p>Generally yes, but cross-check it against your citizenship and passport. SLC/SEE dates are sometimes printed in BS only, with the AD year derived later.</p>

<h3>How do I handle the conversion if my BS date is on the year boundary?</h3>
<p>For dates in Baisakh, Jestha or Ashadh, be especially careful — the AD year is sometimes one less than the simple BS – 57 rule suggests. Always verify with the converter.</p>
`,
  },
  {
    slug: "teej-festival-dates-2083",
    title: "Teej 2083 dates, rituals and traditions — full guide",
    description: "Teej 2083 falls in late Bhadra (around September 2026). Three-day ritual (Dar, Haritalika Teej, Rishi Panchami), fasting rules, songs and culture.",
    readingMinutes: 6,
    publishedIso: "2026-02-18",
    body: `<p><strong>Teej</strong> (तीज) is one of the most visible and emotionally charged festivals in the Nepali calendar. It is observed primarily by Hindu women in Nepal and northern India, dedicated to Goddess Parvati and her devotion to Lord Shiva. Women fast for the long life and well-being of their husbands; unmarried women fast for a worthy future husband. The festival is also a rare and important moment when married women return to their parental homes for several days, dance together, and sing songs that often double as social commentary on the lives of women in Nepal.</p>

<h2>When is Teej 2083?</h2>
<p>The main Teej day — <em>Haritalika Teej</em> — falls on the third day of the bright fortnight (Shukla Tritiya) of Bhadra. Because this is determined by the lunar calendar, the exact date shifts from year to year against the solar BS calendar and against the AD calendar.</p>
<p>For <strong>2083 BS</strong>, Teej falls in <strong>late Bhadra 2083</strong>, approximately the second or third week of September 2026 AD. The exact date is published in the annual patro for 2083 BS, which is released in Chaitra 2082 / April 2026. The three days of Teej (Dar, the main fast, Rishi Panchami) run consecutively in the final week of Bhadra.</p>
<p>For other lunar festival dates in 2083, see our <a href="/blog/nepali-calendar-2083-guide/">2083 BS calendar guide</a>.</p>

<h2>The three days of Teej</h2>
<p>Teej is not a one-day event but a three-day sequence with distinct meaning and ritual for each day.</p>

<h3>Day 1: Dar Khane Din (दर खाने दिन)</h3>
<p>The evening before the main fast, women gather at their parental home or in-laws' home for a feast of rich foods. <em>Dar</em> means "the food taken before fasting," and the meal is deliberately heavy — rice, dahi, ghee, sweet items, fruits — to sustain the body through the next day's complete fast. The atmosphere is celebratory, with red saris worn, traditional songs sung, and family members gathered. In many households, the Dar feast is hosted by the parents of married women, who often return from their in-laws' house specifically for Teej.</p>

<h3>Day 2: Haritalika Teej (हरितालिका तीज) — the main fast</h3>
<p>On the main day of Teej, women observe a strict fast known as <em>nirjala vrat</em> — no food, no water — from sunrise to moonrise. They wear red saris (the colour of marital prosperity), red bangles, and red tika. The day's activities include:</p>
<ul>
<li>Visiting Lord Shiva temples — Pashupatinath in Kathmandu attracts tens of thousands of red-clad women throughout the day.</li>
<li>Performing puja with offerings of flowers, fruits and bel leaves.</li>
<li>Singing and dancing to <em>teej geet</em> — traditional Teej songs, often improvised, that mix devotion with witty social observation.</li>
<li>Listening to the Haritalika story — the legend of Parvati's devotion to Shiva, performed by a priest or sung by older women.</li>
</ul>
<p>The fast is broken only after the moon rises and the appropriate evening rituals are completed.</p>

<h3>Day 3: Rishi Panchami (ऋषि पञ्चमी)</h3>
<p>The day after Teej, women perform a purification ritual dedicated to the <em>Saptarishi</em> (seven sages of Hindu tradition). The central practice is a ritual bath using 365 stems of <em>datiwan</em> grass — one for each day of the year — to symbolically cleanse any unintentional ritual impurity over the past year. After the bath, women perform puja and then eat a sattvik (pure vegetarian, often without onion or garlic) meal. Rishi Panchami concludes the three-day Teej cycle.</p>

<h2>The Haritalika story</h2>
<p>The festival's mythological origin lies in the story of Parvati, daughter of King Himalaya, who wished to marry Lord Shiva. Her father had promised her hand to Lord Vishnu. To avoid this match, her friend kidnapped her (<em>haritalika</em> literally means "kidnapped by a female friend") and took her to the forest, where Parvati performed extreme penance — including fasting without food or water — to win Shiva's favour. Pleased with her devotion, Shiva accepted her. Women observing Teej re-enact a small portion of Parvati's penance through their own fast.</p>

<h2>Teej songs (Teej Geet)</h2>
<p>Teej is famous as much for its music as for its rituals. <em>Teej geet</em> are traditional songs sung by women in groups, often improvised on the day. The themes are remarkable for their range:</p>
<ul>
<li>Devotion to Shiva and Parvati</li>
<li>Longing for the parental home (most married women in traditional households lived far from their natal families)</li>
<li>Witty observations on married life, in-laws, husbands</li>
<li>Social commentary — sometimes pointed — on gender expectations, dowry, and other issues</li>
</ul>
<p>In recent decades, Teej geet have become a recognised cultural and musical form. Major artists release new Teej songs each Bhadra, and television channels broadcast Teej music programmes throughout the festival week. The combination of religious devotion and social commentary makes Teej a uniquely powerful cultural event for Nepali women.</p>

<h2>What to expect in Kathmandu during Teej</h2>
<ul>
<li><strong>Pashupatinath</strong> — extraordinarily crowded throughout the main Teej day, with queues stretching for hours. The temple stays open extended hours; a sea of red saris fills every approach.</li>
<li><strong>Sankhamul Park</strong> on the Bagmati — large gatherings of women singing and dancing together.</li>
<li><strong>Public events</strong> — local governments and women's organisations host Teej programmes with traditional dance performances and music.</li>
<li><strong>Markets</strong> — red saris, red bangles, tika, and Teej-specific jewellery dominate displays for weeks beforehand.</li>
</ul>

<h2>Teej and the wider women's experience</h2>
<p>Teej is one of the very few festivals in the Nepali calendar centred entirely on women. The combination of the fast (which is physically demanding), the gathering at parental homes (which gives married women a sanctioned break from in-laws), and the singing (which often expresses what cannot be said in everyday life) gives Teej a complex social meaning beyond its religious role. In recent years, women's rights groups in Nepal have used Teej songs as a platform for messages on legal rights, education, health and political participation — turning the festival into a forum for contemporary discussion as well as religious observance.</p>

<h2>For non-fasting family members and visitors</h2>
<p>Men, children and those who do not fast typically prepare or buy food for the women in the household, take care of household tasks during the day, and join in the evening meal that breaks the fast. Visitors to Nepal during Teej should expect:</p>
<ul>
<li>Some restaurants and offices to be quieter or shorter-staffed</li>
<li>Crowded Shiva temples, especially Pashupatinath</li>
<li>Festive markets selling red textiles and bangles</li>
<li>Public dance and music programmes in many neighbourhoods</li>
</ul>
<p>Teej is not a national public holiday in the same way as Dashain or Tihar, but it is a recognised holiday for women employees in many government offices and schools, and a major cultural event nationwide.</p>

<h2>Practical takeaway</h2>
<p>If you have a Teej-related event in your family on 2083 BS, check the patro for the exact tithi early in the year. Travel to and from Kathmandu is heavier than usual in the week of Teej as married women return home — book domestic flights or long-distance buses in advance. To convert any Teej date to AD or look up other festivals, use the <a href="/">BS to AD converter</a>.</p>

<h2>Frequently asked questions</h2>
<h3>What is the exact date of Teej 2083?</h3>
<p>Haritalika Teej 2083 falls on Shukla Tritiya of Bhadra — approximately mid- to late September 2026 AD. Confirm the exact date in the published patro for 2083 BS, since lunar dates are determined astronomically.</p>

<h3>Is Teej a public holiday in Nepal?</h3>
<p>Teej is not a national gazetted holiday, but it is widely observed as a holiday for women employees in many government offices and schools.</p>

<h3>Can men observe Teej?</h3>
<p>Traditionally Teej is a women's festival. Men's role is supportive — preparing food, accompanying family to temples, and joining the evening meal. There is no religious prohibition on men fasting, but it is not customary.</p>

<h3>Why do women wear red on Teej?</h3>
<p>Red is the colour of marital prosperity in Hindu tradition and is associated with Goddess Parvati. Red saris, red bangles and red tika together signal a woman's commitment to her husband's well-being.</p>

<h3>What is the difference between Haritalika Teej and Hartalika Teej?</h3>
<p>They refer to the same festival; "Haritalika" and "Hartalika" are alternative transliterations of the same Sanskrit word.</p>
`,
  },
  {
    slug: "nepali-patro-guide",
    title: "What is a Nepali Patro? History, structure, and how to read one",
    description: "The Nepali patro is more than a calendar — it includes tithis, festivals, auspicious times and the full BS date grid. A practical guide to reading one.",
    readingMinutes: 6,
    publishedIso: "2026-02-25",
    body: `<p>For anyone trying to make sense of Nepali daily life, the <strong>patro</strong> (पात्रो) is one of the most useful documents to understand. Literally meaning "document" or "record," patro refers to the annual Nepali almanac-calendar that combines a solar date grid with lunar tithis, festival dates, planetary positions, and auspicious-time indicators. Every Nepali household traditionally owned a patro, kept on a shelf and consulted before any major decision — a wedding, a business launch, a journey, a religious ceremony.</p>

<p>This guide explains what a patro is, how it is structured, how to read the elements that appear on each day's entry, and how digital tools like npdates carry the same information forward.</p>

<h2>What's actually in a patro?</h2>
<p>A patro is much more than a date converter or a wall calendar. A typical printed patro for one BS year contains:</p>
<ul>
<li>A monthly grid of all twelve Nepali months</li>
<li>BS dates alongside corresponding AD dates</li>
<li>The lunar <em>tithi</em> for every day, with its starting and ending time</li>
<li>The nakshatra (lunar mansion) the moon is in</li>
<li>The day's yoga and karana (other astrological calculations)</li>
<li>Planetary positions in the zodiac (graha sthiti)</li>
<li>All major festivals and observances marked on the date they fall</li>
<li>Auspicious time windows (shubha muhurat) and inauspicious windows (Rahu Kalam, Yamakantam, Gulika Kalam)</li>
<li>Sunrise and sunset times for Kathmandu (sometimes for other cities)</li>
<li>Fasting days and recommended observances</li>
<li>Birthdays of major Hindu deities, anniversaries of significant religious events</li>
</ul>
<p>The patro is essentially a single-volume reference for civil dates, religious observances, and astrological planning. For many Nepali families, it is the most-consulted printed document of the year.</p>

<h2>History of the patro</h2>
<p>Patros in their modern printed form date back to the late 19th and early 20th century, when Kathmandu's printing presses began producing them annually. Before that, similar information was maintained as handwritten almanacs by trained <em>jyotishis</em> (astrologers) and consulted by appointment. Mass-printed patros made the same information available cheaply to ordinary households.</p>
<p>The most widely-known printed patro in Nepal is <em>Nepal Sambat Patro</em>, but several other patros are published — by religious institutions, university committees, regional publishers — each with slightly different emphases. The underlying astronomical calculations are standardised, but the festival lists and regional observances vary.</p>

<h2>The solar date grid</h2>
<p>The core of every patro is the solar date grid for each BS month. Each month gets a single page or two-page spread laid out as a 7-column grid (Sunday through Saturday). Each cell contains:</p>
<ul>
<li>The BS date, prominently displayed</li>
<li>The corresponding AD date, usually in smaller print</li>
<li>The tithi name and number</li>
<li>Any festival or special observance for that day, often marked with a coloured background</li>
</ul>
<p>This dual-date layout — BS and AD on the same cell — is the most practical feature for people who navigate both calendars daily, which is essentially everyone in modern Nepal.</p>

<h2>Tithi: the lunar day</h2>
<p>Alongside the solar date is the <em>tithi</em>, the lunar day. A tithi corresponds to a 12-degree segment of the moon's apparent motion relative to the sun. Because the moon's motion is not constant, tithis are not all the same length — they vary between roughly 19 and 27 hours. As a result, the tithi does not align cleanly with the solar day; a given calendar date may contain part of one tithi in the morning and part of the next in the evening.</p>
<p>Tithis are organised in two fortnights of 15 each — <em>Shukla Paksha</em> (bright fortnight, growing toward full moon) and <em>Krishna Paksha</em> (dark fortnight, growing toward new moon). The 15 tithis are named Pratipada, Dwitiya, Tritiya, Chaturthi, Panchami, Shashthi, Saptami, Ashtami, Navami, Dashami, Ekadashi, Dwadashi, Trayodashi, Chaturdashi, and Purnima (full moon) or Amavasya (new moon). Almost every Hindu religious observance — fasting days, festivals, weddings, naming ceremonies — is scheduled by tithi rather than by solar date, which is why the patro's tithi columns matter so much.</p>

<h2>Festivals and observances</h2>
<p>Each day in the patro is annotated with whatever religious or civic event falls on it. Major festivals are highlighted with coloured ink or special markings. The patro distinguishes between:</p>
<ul>
<li><strong>Solar fixed festivals</strong> — like Maghe Sankranti on 1 Magh or Nepali New Year on 1 Baisakh.</li>
<li><strong>Lunar tithi festivals</strong> — like Teej on Shukla Tritiya of Bhadra or Maha Shivaratri on Krishna Chaturdashi of Falgun.</li>
<li><strong>Eclipses</strong> — solar and lunar, with timing windows during which traditional restrictions apply.</li>
<li><strong>Ekadashi fasts</strong> — twice-monthly fasting days observed by many devout Hindus.</li>
<li><strong>Sankranti</strong> — sun's entry into each zodiac sign, marked once a month.</li>
<li><strong>Civic holidays</strong> — Republic Day, Constitution Day, Prajatantra Diwas, and so on.</li>
</ul>

<h2>Reading the auspicious-time columns</h2>
<p>Traditional patros mark certain time windows as inauspicious based on Vedic astrology:</p>
<ul>
<li><strong>Rahu Kalam</strong> — a ninety-minute window each day attributed to the shadow planet Rahu. Important new beginnings (business launches, journeys, signing contracts) are traditionally avoided during this window.</li>
<li><strong>Gulika Kalam</strong> — another inauspicious window, varying by day of the week.</li>
<li><strong>Yamakantam</strong> — a third inauspicious window.</li>
<li><strong>Abhijit Muhurat</strong> — a particularly auspicious window around solar noon.</li>
<li><strong>Choghadiya</strong> — divisions of the day into auspicious and inauspicious segments, used in Newar and Marwari traditions.</li>
</ul>
<p>Many families consult these windows before scheduling weddings, surgeries, signing property deeds, or starting long journeys. Whether or not one personally believes in the astrological basis, the auspicious-time columns remain a feature millions of Nepali patro users consult daily.</p>

<h2>Printed patro versus digital tools</h2>
<p>For generations the patro was a small printed booklet sold from bookshops, temples, and roadside kiosks starting in Chaitra of the previous year (so the 2083 BS patro goes on sale around Chaitra 2082 / April 2026). Today, much of the same functionality is available digitally:</p>
<ul>
<li>The <a href="/today-nepali-date/">today's Nepali date</a> page gives you the BS date, day of week and tithi for any current AD date.</li>
<li>The <a href="/">BS to AD converter</a> handles any historical or future date in the supported range.</li>
<li>The <a href="/date-difference/">date difference calculator</a> computes the number of days between any two BS dates.</li>
<li>The <a href="/age-calculator/">age calculator</a> works in either BS or AD inputs.</li>
</ul>
<p>The advantage of the printed patro is the comprehensive presentation — all the data for a year in one place, organised for quick reference. The advantage of digital tools is precision (no rounding, no transcription errors) and instant calculation for any date in the supported range.</p>

<h2>How to choose a patro</h2>
<p>If you are buying a printed patro for the first time, look for:</p>
<ul>
<li>The publisher — well-known publishers like Nepal Sambat Patro or Bhanjyang Patro have a reputation for accuracy.</li>
<li>Whether it includes AD dates alongside BS — most modern ones do, but some traditional patros omit this.</li>
<li>Whether the festival list matches your community — some patros emphasise Hindu observances, others include Buddhist, Newar or Tibetan festivals.</li>
<li>The format — full pocket-sized booklets versus wall-calendar style versus large reference tomes.</li>
</ul>

<h2>Practical takeaway</h2>
<p>You do not need to memorise the patro, but knowing what it contains means you know how to find the information you need. For tithi-driven decisions (weddings, religious ceremonies, fasts), consult the printed patro or an equivalent online tool. For solar date conversions, use the digital tools on this site — they are faster and free from copying errors.</p>

<h2>Frequently asked questions</h2>
<h3>What is the difference between a patro and a calendar?</h3>
<p>A patro is a calendar plus astrological and religious metadata — tithis, nakshatras, auspicious windows, festival dates. A plain calendar shows only dates.</p>

<h3>Is the patro religious or civic?</h3>
<p>Both. It contains civic dates (public holidays, fiscal year markers) and religious data (tithis, festivals, fasting days). Even people who do not follow religious astrology use the patro for civic date reference.</p>

<h3>How accurate is a printed patro?</h3>
<p>Reputable printed patros are very accurate for solar BS dates and standard tithi calculations. Minor variations between publishers can occur for specific astrological computations.</p>

<h3>When does the new year's patro go on sale?</h3>
<p>Around Chaitra of the previous BS year — about a month before the new year begins. Most patro publishers release their editions in March or early April AD.</p>

<h3>Do I need a printed patro if I use a digital converter?</h3>
<p>Not for date conversion, but if you make tithi-based decisions or follow auspicious-time guidance, a printed patro or specialised astrological tool gives you all the data in one place.</p>
`,
  },
  {
    slug: "bs-date-for-visa-application",
    title: "Using your Nepali BS date for visa applications abroad",
    description: "Embassies need your DOB in AD. Step-by-step guide for converting your BS DOB, country-by-country format requirements, and how to avoid common rejection causes.",
    readingMinutes: 6,
    publishedIso: "2026-03-05",
    body: `<p>Foreign embassies — US, UK, Schengen, Canada, Australia, Japan, Korea, Gulf — accept only the Gregorian (AD) calendar on their visa forms. Your Nepali citizenship certificate and most of your supporting documents are in Bikram Sambat (BS). The conversion is mechanical, but the consequences of getting it wrong are not: even a single-day mismatch between your visa form, your passport, and your supporting documents can trigger additional verification, delays, or outright refusal. This guide walks through the process step by step, covers country-specific format requirements, and shows you how to head off the most common problems.</p>

<h2>The core problem</h2>
<p>Visa officers verify identity by cross-referencing the date of birth on your application against your passport, your sponsor documents (university acceptance letters, employer letters, invitation letters), and any biometric records they already hold from previous applications. If even one of these documents shows a different date — even by a day — the application is flagged. Most embassies handle this conservatively: they ask for clarification, request original documents, or refuse the application pending resolution. Resolution usually takes weeks and may require a fresh application fee.</p>

<p>So the goal is simple: make sure your visa application's AD date of birth matches your passport's AD date of birth exactly, and that both are correctly derived from your underlying BS date of birth on your citizenship certificate.</p>

<h2>Step 1: locate your BS date of birth</h2>
<p>Your BS DOB is on your citizenship certificate (Nagarikta). It usually appears in the format <strong>Year/Month/Day</strong>, sometimes with the Nepali script. Cross-reference with:</p>
<ul>
<li><strong>Birth registration certificate</strong> from your ward office</li>
<li><strong>School-leaving certificate (SLC/SEE)</strong></li>
<li><strong>Migration certificate</strong> if you transferred between schools</li>
</ul>
<p>If any of these disagree, the citizenship certificate takes legal precedence in Nepal. Resolve inconsistencies through the District Administration Office before you apply for an international visa — fixing the underlying record is far easier than explaining a mismatch on a visa form.</p>

<h2>Step 2: convert with a verified tool</h2>
<p>Use the <a href="/">BS to AD converter</a> to convert your DOB. Enter year, month and day exactly as printed on your citizenship. The converter returns the AD date and day of the week. Do not use mental arithmetic — see our <a href="/blog/how-to-convert-date-of-birth-bs-to-ad/">step-by-step DOB conversion guide</a> for why naive year subtraction fails for dates around the BS new year.</p>

<h2>Step 3: cross-check against your passport</h2>
<p>Your Nepali passport already contains your AD date of birth in two places — the printed data page and the Machine-Readable Zone at the bottom. Verify that the converter's result matches the passport date exactly.</p>
<ul>
<li><strong>If they match</strong> — use the passport DOB on your visa form. You are done with the conversion.</li>
<li><strong>If they differ</strong> — the passport DOB is the internationally recognised record. Use it on the visa form, but also resolve the discrepancy at the Passport Office or District Administration Office before applying again. Carrying inconsistent documents long-term creates problems for everything from banking to property transactions abroad.</li>
</ul>

<h2>Step 4: match the format required by the destination country</h2>
<p>Different visa systems use different date formats. Once you have your AD year, month and day from the converter, format them according to the application's expectations.</p>
<table>
<tr><td><strong>Country</strong></td><td><strong>Application</strong></td><td><strong>Format</strong></td><td><strong>Example</strong></td></tr>
<tr><td>US</td><td>DS-160</td><td>DD-MMM-YYYY</td><td>14-APR-1990</td></tr>
<tr><td>UK</td><td>UKVI online</td><td>DD/MM/YYYY</td><td>14/04/1990</td></tr>
<tr><td>Schengen (most)</td><td>VFS / consulate forms</td><td>DD.MM.YYYY</td><td>14.04.1990</td></tr>
<tr><td>Canada</td><td>IRCC portal</td><td>YYYY-MM-DD</td><td>1990-04-14</td></tr>
<tr><td>Australia</td><td>ImmiAccount</td><td>DD/MM/YYYY</td><td>14/04/1990</td></tr>
<tr><td>Japan</td><td>e-visa</td><td>YYYY/MM/DD</td><td>1990/04/14</td></tr>
<tr><td>Korea</td><td>K-ETA</td><td>YYYY-MM-DD</td><td>1990-04-14</td></tr>
<tr><td>UAE / GCC</td><td>various</td><td>DD/MM/YYYY</td><td>14/04/1990</td></tr>
</table>
<p>Always include leading zeros (write <code>04</code>, not <code>4</code>). The biggest mistake in mixed US-UK households is confusing 04/05 with 05/04 — under US convention this is May 4 and April 5 respectively; under UK convention it is April 5 and May 4. The form's expected format determines the meaning.</p>

<h2>Step 5: ensure consistency across all supporting documents</h2>
<p>Visa applications usually require:</p>
<ul>
<li>Passport (AD date)</li>
<li>Bank statements (AD date in the account-holder profile)</li>
<li>Employer letters or university acceptances (AD date)</li>
<li>Invitation letters (AD date)</li>
<li>Tax returns (BS dates — usually attached as supporting evidence; not a problem because the visa officer reads them as supporting financial evidence, not for identity verification)</li>
</ul>
<p>The key principle: <strong>identity documents should all show the same AD DOB</strong>. Supporting evidence in BS is fine if it is clearly labelled. If your bank statement shows a different date than your passport, fix the bank record before applying.</p>

<h2>Step 6: handle older documents and apostille requirements</h2>
<p>Some embassies (especially for student visas and skilled migration) require apostilled or notarised copies of your educational certificates. These will typically be in BS. The apostille process attaches a foreign-ministry seal to the document — but does not convert the date. You will usually need to provide an officially stamped translation that includes the AD equivalent. Translation agencies in Kathmandu specialise in this and know the correct format for each destination country.</p>

<h2>Step 7: triple-check before submitting</h2>
<p>Before clicking Submit:</p>
<ul>
<li>Re-enter the AD DOB from the passport (not from memory)</li>
<li>Check the day-of-week if the form asks</li>
<li>Confirm the format matches the form's example</li>
<li>Look at the printed preview of the form before paying the fee</li>
</ul>

<h2>What to do if you have no Nepali passport yet</h2>
<p>If this is your first international application and you don't yet have a passport, apply for the passport first. The passport application requires your citizenship certificate; the Passport Office will derive the AD date from the BS date on your citizenship. Once you receive your passport, use the AD DOB printed on it for all subsequent international applications.</p>

<h2>Handling DOB discrepancies between documents</h2>
<p>If you discover a discrepancy — for example, your SLC shows one BS date and your citizenship shows another — fix it at source. Carrying two different DOBs on different documents will eventually catch up with you:</p>
<ul>
<li>Most embassies share data with their counterparts after a refused visa</li>
<li>UK biometric records persist for ten years and are checked at every visa application</li>
<li>Some Schengen consulates cross-reference DOB with prior US or UK applications</li>
</ul>
<p>Get the inconsistency resolved through the District Administration Office or the Department of Information Technology (depending on which document is wrong) before you make a second application.</p>

<h2>Tips for specific visa categories</h2>
<ul>
<li><strong>Student visa</strong> — your university's CAS / I-20 / CoE document will use the AD DOB from your passport. Use the same on the visa form.</li>
<li><strong>Work visa</strong> — your employer's offer letter and the embassy's biometric record must match. Ask your employer to verify the DOB on the offer matches your passport before they file.</li>
<li><strong>Tourist visa</strong> — fewer documents, but the rule still holds. Use your passport DOB.</li>
<li><strong>Family reunion visa</strong> — your sponsor's documents and your own must match. Many family visa refusals come down to inconsistent dates between sibling or spouse documents.</li>
</ul>

<h2>Practical takeaway</h2>
<p>Convert once, verify against your passport, and use the passport AD date everywhere. Most Nepali adults will need this date on dozens of forms over their lifetime — getting it pinned down early saves repeated effort and removes one of the most common reasons for visa-application failures.</p>

<h2>Frequently asked questions</h2>
<h3>Can I write my DOB in BS on a visa form?</h3>
<p>No. Visa forms accept only the Gregorian calendar. Use the AD date from your passport, derived from your citizenship BS date via the <a href="/">BS to AD converter</a>.</p>

<h3>What if my passport DOB is wrong?</h3>
<p>Get it corrected at the Passport Office before applying. Do not submit a visa form with a different date "hoping it works out" — it will create problems on later applications.</p>

<h3>What if my citizenship certificate's BS date is wrong?</h3>
<p>Apply for a correction at the District Administration Office, providing supporting documents (birth registration, school records, family records). Once the citizenship is corrected, the passport can be corrected to match.</p>

<h3>Do US and UK use the same date format?</h3>
<p>No. The US DS-160 uses DD-MMM-YYYY (14-APR-1990), the UK uses DD/MM/YYYY (14/04/1990). Always check the form's example.</p>

<h3>Can a single-day DOB error really cause a visa rejection?</h3>
<p>Yes. Most embassies treat any mismatch between application DOB and passport DOB as a serious data-quality flag. Even if not refused outright, it usually delays the application significantly.</p>
`,
  },
  {
    slug: "nepali-date-difference-calculator",
    title: "How to calculate the number of days between two Nepali BS dates",
    description: "Calculate days between two Nepali Bikram Sambat dates exactly — covering contracts, deadlines, leave, age and travel. Why naive month math fails in BS.",
    readingMinutes: 7,
    publishedIso: "2026-03-15",
    body: `<p>Many practical situations in Nepal require knowing exactly how many days separate two Bikram Sambat (BS) dates. Government contracts, employment notice periods, tender deadlines, court hearing intervals, and even simple festival countdowns all rely on accurate day-counting between BS dates. Unlike the Gregorian calendar where you can roughly estimate "three months is about 90 days," the BS calendar's variable month lengths make manual counting unreliable. This guide explains why, walks through how to calculate the difference accurately, and covers the most common real-world scenarios.</p>

<h2>When you actually need a BS date-difference calculation</h2>
<p>Some common scenarios where exact day counts in BS matter:</p>
<ul>
<li><strong>Government contracts</strong> — almost all government contracts use BS dates for start, end and milestone deadlines. "Contract begins 15 Shrawan 2083 and runs for 270 days" is a typical clause; you need to know the exact BS end date.</li>
<li><strong>Tax deadlines</strong> — VAT, income tax, and customs filings have BS due dates. Knowing how many days remain helps you plan submissions and pay penalties accurately if you miss them.</li>
<li><strong>Employment notice periods</strong> — Nepal's Labour Act specifies notice periods in days. Calculating the exact end date of a 30-day or 90-day notice period from a BS resignation date requires precise day counting.</li>
<li><strong>Probation periods</strong> — employment probation typically runs for 180 days from the BS start date. Confirmation depends on the exact end date.</li>
<li><strong>Tender windows</strong> — government tenders open and close on BS dates, often with 21- or 30-day windows. Last-minute submissions need exact end-time calculation.</li>
<li><strong>Court hearings and legal deadlines</strong> — appeals must be filed within statutory days of a judgement. Counting those days in BS requires the calculator.</li>
<li><strong>Festival countdowns</strong> — "how many days until Dashain" or "how many days until Maghe Sankranti" — useful for planning travel and supplies.</li>
<li><strong>Personal record-keeping</strong> — counting days since a wedding, birth, anniversary, or any other BS-recorded event.</li>
</ul>

<h2>Why manual counting fails in BS</h2>
<p>In the Gregorian calendar, months are almost always 28 to 31 days, and the variations are well known. You can reasonably estimate "three months from 14 March is 14 June" and only need to verify the day-count when precision matters.</p>
<p>In the Bikram Sambat calendar, the problem is harder:</p>
<ul>
<li>Month lengths range from <strong>29 to 32 days</strong></li>
<li>The exact length of each month is recalculated annually based on the sun's sidereal position</li>
<li>Two consecutive years may have different lengths for the same month (e.g. Shrawan can be 31 days one year, 32 the next)</li>
<li>There is no closed-form formula — you must consult the official month-length table</li>
</ul>
<p>This means a clause like "90 days from 1 Bhadra 2083" might be 30 Kartik or 1 Mangsir or 2 Mangsir depending on the exact month lengths of Bhadra, Ashwin and Kartik that year. Without checking the table, you cannot be sure.</p>

<h2>How the date-difference calculator works</h2>
<p>The <a href="/date-difference/">date difference calculator</a> solves this problem mechanically. The algorithm:</p>
<ol>
<li>Converts both input BS dates to a day-count from a known epoch (we use 1 Baisakh 1970 BS as the reference).</li>
<li>Subtracts the two day-counts to get the total number of days between them.</li>
<li>Breaks the result into years, months and remaining days for human readability, using the actual BS month lengths between the two dates.</li>
</ol>
<p>The result is exact and consistent regardless of which months or year boundaries are crossed. You get back both "total days" (the absolute number) and a breakdown like "2 years, 3 months and 14 days."</p>

<h2>Worked examples</h2>
<h3>Example 1: Government contract duration</h3>
<p>A government IT contract begins on 1 Shrawan 2083 BS and runs for 365 days. What is the end date?</p>
<p>You cannot just say "1 Shrawan 2084" — the contract specifies 365 days, and a BS year may be slightly more or less than 365 days depending on the year. Use the date-difference calculator: input the start date, set the duration, and the tool returns the exact BS end date.</p>

<h3>Example 2: Notice period</h3>
<p>An employee resigns on 10 Mangsir 2083 BS with a 30-day notice period. What is the last working day?</p>
<p>Mangsir 2083 has 29 days. So 30 days from 10 Mangsir crosses into Poush. The exact end date is 10 Poush 2083 BS (if you count inclusively) or 9 Poush 2083 BS (if exclusively). The calculator handles either interpretation explicitly.</p>

<h3>Example 3: Days until a festival</h3>
<p>Today is 5 Bhadra 2083 BS. How many days until Maghe Sankranti (1 Magh 2083)?</p>
<p>Counting the days through Bhadra, Ashwin, Kartik, Mangsir and Poush — and accounting for the actual lengths of each — gives the exact number. Manual estimation gets close but is rarely exact. The calculator returns the precise figure.</p>

<h2>Working with durations that cross the BS new year</h2>
<p>A frequent source of confusion: a duration that runs across 1 Baisakh. The year label changes (e.g. from 2082 to 2083) but the day count is continuous — 30 Chaitra 2082 and 1 Baisakh 2083 are consecutive days, just as 31 December and 1 January are consecutive in AD.</p>
<p>If your contract starts on 20 Chaitra 2082 and runs 60 days, the end date is in late Jestha 2083 — not "60 days from 20 Chaitra in the same year." The date-difference calculator handles year boundaries automatically.</p>

<h2>Converting durations between BS and AD</h2>
<p>A duration in days is calendar-independent. Seven days is seven days whether you express the endpoints in BS or in AD. So if you need to report the same period in AD terms, simply convert both endpoint BS dates to AD using the <a href="/">BS to AD converter</a> and the duration between them will be the same number of days.</p>
<p>This is also why the <a href="/age-calculator/">age calculator</a> can take inputs in either calendar — the underlying age in days is the same regardless of how you label the endpoints.</p>

<h2>Common errors and how to avoid them</h2>
<ul>
<li><strong>Off-by-one errors in inclusive versus exclusive counting</strong> — "30 days starting today" can mean today is day 1 (so the end is day 30) or today is day 0 (so the end is day 30 counted from tomorrow). Confirm the convention before relying on a calculated end date — especially for legal deadlines.</li>
<li><strong>Skipping the leap-pattern question</strong> — BS does not have a clean leap-year rule; instead the month lengths shift. Some 30-day periods in BS can therefore equal 29, 30 or 31 calendar days. Always use the calculator.</li>
<li><strong>Estimating from "average" month lengths</strong> — the average BS month is about 30.4 days, but no specific month is 30.4 days. Averages give wrong answers for specific calculations.</li>
<li><strong>Confusing solar days with tithis</strong> — tithis (lunar days) are roughly 23.6 hours each. If your event is defined by tithi (most religious observances are), you cannot count by solar BS days. The date-difference calculator works with solar BS days; for tithi-based calculations consult a patro.</li>
<li><strong>Year-boundary errors</strong> — a duration that crosses 1 Baisakh changes the BS year label but not the day count.</li>
</ul>

<h2>Use cases for businesses and developers</h2>
<p>If your organisation routinely deals with BS dates — HR, payroll, government contractors, legal firms — the manual approach does not scale. Two practical options:</p>
<ul>
<li>The <a href="/api-docs/">npdates API</a> exposes the conversion and date-difference endpoints for programmatic use. You can integrate the calculation into your internal HR system or contract management tool.</li>
<li>The <a href="/widget/">embeddable widget</a> can be added to internal forms so staff enter BS dates and the AD equivalent or day-count appears automatically.</li>
</ul>

<h2>Practical takeaway</h2>
<p>For anything where the day count matters — contracts, deadlines, legal filings, notice periods — never estimate. Open the <a href="/date-difference/">date difference calculator</a>, plug in both dates, and read the exact result. The few seconds spent on the calculator is far cheaper than the cost of a missed deadline because the third week of Bhadra was 31 days, not 30.</p>

<h2>Frequently asked questions</h2>
<h3>How many days are there between 1 Baisakh and 1 Magh in any BS year?</h3>
<p>Roughly 271 to 275 days depending on the year's specific month lengths. Use the date-difference calculator for the exact number in any given year.</p>

<h3>Can I calculate age in BS years, months and days?</h3>
<p>Yes — the <a href="/age-calculator/">age calculator</a> takes your DOB in either BS or AD and returns age broken down into years, months and days based on today's date.</p>

<h3>Why are 90 days from 1 Bhadra not the same end date every year?</h3>
<p>Because Bhadra, Ashwin and Kartik can each have slightly different lengths from year to year. The end date shifts by one or two days based on those lengths.</p>

<h3>Is the date-difference result inclusive or exclusive of the end date?</h3>
<p>The default result is the number of days between the two dates (exclusive). If your contract counts the start date as day 1, add one to the result.</p>

<h3>Can I use the calculator for very old dates?</h3>
<p>Yes — the tool supports BS years from 1970 onward, which covers any practical use case for living people, current contracts and historical research within the Nepali republic period.</p>
`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
