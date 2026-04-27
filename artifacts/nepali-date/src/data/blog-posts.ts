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
    description: "Bikram Sambat (BS) is Nepal's official solar calendar, running 56 years and 8 months ahead of AD. Learn its history, structure, and how it differs from the Gregorian calendar.",
    readingMinutes: 6,
    publishedIso: "2025-09-12",
    body: `
<p><strong>Bikram Sambat</strong> (Devanagari: विक्रम सम्बत, abbreviated BS) is the official solar calendar of Nepal. It is named after the legendary Indian king Vikramaditya and pre-dates the Gregorian (AD) calendar by approximately 56 years and 8 months. While much of the world organises civic life by AD, Nepalis schedule their fiscal year, school terms, government deadlines, festivals and much of daily life by BS.</p>

<h2>How the calendar is structured</h2>
<p>The Bikram Sambat calendar has 12 months, but unlike the Gregorian calendar, the months are not of fixed length. Each month can be 29, 30, 31 or 32 days long, depending on the solar position calculated by Nepal's Calendar Determination Committee. The new year begins on <strong>1 Baisakh</strong>, which falls in mid-April of the Gregorian calendar.</p>

<h2>The twelve Nepali months</h2>
<p>In order, the months are: Baisakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, and Chaitra. Each has a Nepali script form too — बैशाख, जेठ, असार, साउन, भदौ, असोज, कार्तिक, मंसिर, पुस, माघ, फाल्गुन, चैत.</p>

<h2>Why is Nepal still on BS?</h2>
<p>Nepal officially adopted Bikram Sambat as its national calendar in 1903 AD (1960 BS). Unlike India, which reverted to Gregorian for civic use, Nepal kept BS in administrative and ceremonial roles. This is partly due to its astronomical accuracy (it is a sidereal solar calendar), and partly due to cultural identity.</p>

<h2>Common conversion confusion</h2>
<p>Many newcomers assume that adding 56 or 57 to an AD year always gives the correct BS year — this is only roughly correct. Because the BS new year falls in mid-April, dates between January and mid-April have a different offset than dates after mid-April. For example, 1 January 2026 AD is 17 Poush 2082 BS, not 2083 BS. Use a real <a href="/ad-to-bs-converter">AD to BS converter</a> rather than naive year arithmetic.</p>

<h2>Where you'll see BS in daily life</h2>
<p>Citizenship cards, passports, school certificates, government tenders, and tax filings in Nepal all use BS dates. Knowing how to convert quickly between the two systems is a practical necessity.</p>
`,
  },
  {
    slug: "how-bs-to-ad-conversion-works",
    title: "How BS to AD conversion actually works (and why it's tricky)",
    description: "Behind every Nepali date converter is a hand-curated table of month lengths. Learn the algorithm, the data sources, and where naive math goes wrong.",
    readingMinutes: 5,
    publishedIso: "2025-09-22",
    body: `
<h2>The naive (and wrong) approach</h2>
<p>People often try to convert BS to AD with a simple formula like <em>AD = BS - 56</em> or <em>AD = BS - 57</em>. This will land you in the right year roughly 70% of the time and the wrong year the other 30% — because the BS new year falls in mid-April, not in January.</p>

<h2>The right approach</h2>
<p>Reliable conversion uses three pieces of data:</p>
<ol>
<li>An <strong>epoch date</strong>: a known mapping between a BS date and its AD equivalent. We use 1 Baisakh 1970 BS = 13 April 1913 AD.</li>
<li>A <strong>month-length table</strong>: how many days each Nepali month has, for every year in range. These are not formulaic — they are determined annually and published by Nepal's Calendar Determination Committee.</li>
<li>A simple <strong>day arithmetic</strong> step: count days from the epoch to the target BS date, then add that many days to the epoch's AD date.</li>
</ol>

<h2>Why we need a table</h2>
<p>The Bikram Sambat calendar is sidereal solar, meaning month boundaries are tied to the sun crossing zodiac signs. Because the sun's transit doesn't perfectly match calendar days, month lengths shift slightly year to year. There is no closed-form formula that gives the exact length of, say, Baisakh 2087 BS — you have to consult the official patro.</p>

<h2>What our converter does</h2>
<p>The <a href="/bs-to-ad-converter">npdates BS to AD converter</a> uses an internal table covering BS years 1970 through 2099. For any input date we (a) validate the day is within that month's published length, (b) sum the days from the epoch, and (c) add to the AD epoch. The result is correct to the day, including weekday.</p>
`,
  },
  {
    slug: "difference-between-bs-and-ad",
    title: "BS vs AD: the differences every Nepali should know",
    description: "Bikram Sambat and the Gregorian calendar use different epochs, different month systems, and different new-year days. Here's exactly how they differ.",
    readingMinutes: 4,
    publishedIso: "2025-10-01",
    body: `
<h2>Different epochs</h2>
<p>Bikram Sambat counts years from 57 BCE; the Gregorian calendar counts from the traditional birth of Christ. The result: BS is roughly 56 years and 8 months <em>ahead</em> of AD — never <em>behind</em>.</p>

<h2>Different new-year day</h2>
<p>BS new year falls on <strong>1 Baisakh</strong>, which lands in mid-April of AD. So when AD ticks over from 31 December to 1 January, no BS year change occurs.</p>

<h2>Different month lengths</h2>
<p>Gregorian months have fixed lengths (28, 30 or 31 days, with February occasionally getting 29). BS months can be 29, 30, 31 or 32 days, and the lengths vary year to year.</p>

<h2>Same week, same days</h2>
<p>Both calendars share the same seven-day week. Sunday is आइतबार, Monday is सोमबार, and so on. This is why BS-AD converters can give you the day of the week reliably for either system.</p>

<h2>When to use which</h2>
<p>In Nepal, BS dominates official documents (citizenship, passport, school papers, tax returns, government deadlines). AD is standard for international communications, banking with foreign institutions, and most online services. Most Nepalis live with both at once.</p>
`,
  },
  {
    slug: "nepali-fiscal-year-explained",
    title: "Nepali fiscal year explained: why FY 2082/83 starts in mid-July",
    description: "Nepal's fiscal year runs Shrawan 1 to Ashadh end. Learn how the FY label works, when budgets are presented, and how to find the FY for any date.",
    readingMinutes: 4,
    publishedIso: "2025-10-09",
    body: `
<h2>The window: 1 Shrawan to end of Ashadh</h2>
<p>Nepal's fiscal year (आर्थिक वर्ष) starts on <strong>1 Shrawan</strong> (the fourth month of the BS calendar) and ends on the last day of Ashadh the following BS year. In Gregorian terms, that's roughly mid-July to mid-July.</p>

<h2>Reading FY labels</h2>
<p>Fiscal years are written like <strong>FY 2082/83</strong>. The first number is the BS year of the start month (Shrawan); the two-digit second number is the BS year of the end month (Ashadh). So FY 2082/83 starts on 1 Shrawan 2082 (around 16 July 2025 AD) and ends on the last day of Ashadh 2083 (around 15 July 2026 AD).</p>

<h2>Why mid-July?</h2>
<p>This timing aligns with the agricultural cycle: paddy planting begins around Shrawan, after the monsoon arrives. Historically the harvest cycle, tax collection and the government's planning year were aligned to this rhythm.</p>

<h2>Budget day</h2>
<p>The federal budget is traditionally presented to parliament on <strong>15 Jestha</strong> — about six weeks before the FY starts. This gives ministries time to prepare programmes for the new fiscal year.</p>

<h2>Finding the FY for a date</h2>
<p>Use the <a href="/fiscal-year-converter">fiscal year converter</a> to look up the FY for any BS or AD date.</p>
`,
  },
  {
    slug: "dashain-2083-dates",
    title: "Dashain 2083 dates and how the festival is structured",
    description: "Dashain 2083 begins on Ghatasthapana and culminates with Vijaya Dashami. Here are the official dates and the meaning of each day.",
    readingMinutes: 5,
    publishedIso: "2025-10-15",
    body: `
<h2>Dashain at a glance</h2>
<p>Dashain (दशैं) is the longest and most significant Hindu festival in Nepal, celebrated for 15 days from <strong>Ghatasthapana</strong> to <strong>Kojagrat Purnima</strong>. The peak days are Phulpati, Maha Ashtami, Maha Navami and Vijaya Dashami.</p>

<h2>Key Dashain 2083 BS dates</h2>
<ul>
<li><strong>Ghatasthapana</strong> — 24 Ashwin 2083</li>
<li><strong>Phulpati</strong> — usually the seventh day of Navaratri</li>
<li><strong>Vijaya Dashami</strong> — 3 Kartik 2083</li>
</ul>
<p>Vijaya Dashami is the day when elders bless younger family members with tika and jamara. Government offices, schools, banks and most businesses close for several days around the peak dates.</p>

<h2>Why dates shift each year</h2>
<p>Dashain follows the lunar Navaratri cycle — the festival is timed to the bright fortnight (शुक्ल पक्ष) of Ashwin. Because lunar months drift relative to the solar BS calendar, the BS dates shift by a few days each year. AD dates also shift accordingly.</p>

<h2>Plan around Dashain</h2>
<p>If you're booking flights to or within Nepal during Dashain, expect prices to spike and seats to vanish. Domestic travel is heaviest in the days leading up to and following Vijaya Dashami.</p>
`,
  },
  {
    slug: "tihar-2083-dates",
    title: "Tihar 2083 dates and the meaning of each of the five days",
    description: "Tihar (Deepawali) spans five days from Kaag Tihar to Bhai Tika. Here are the 2083 BS dates and what each day commemorates.",
    readingMinutes: 5,
    publishedIso: "2025-10-30",
    body: `
<h2>Tihar — the festival of lights</h2>
<p>Tihar (तिहार), also called Deepawali, is celebrated for five consecutive days in late Kartik. Each day honours a different relationship between humans and the natural and spiritual worlds.</p>

<h2>The five days of Tihar 2083 BS</h2>
<ol>
<li><strong>Kaag Tihar</strong> — crows are honoured as messengers</li>
<li><strong>Kukur Tihar</strong> — dogs are honoured as faithful companions</li>
<li><strong>Gai Tihar / Laxmi Puja</strong> — 23 Kartik 2083 — cows and the goddess Lakshmi are worshipped; homes are lit with oil lamps</li>
<li><strong>Goru Tihar / Govardhan Puja</strong> — oxen and the Govardhan hill are honoured</li>
<li><strong>Bhai Tika</strong> — 26 Kartik 2083 — sisters bless their brothers with tika and garlands</li>
</ol>

<h2>What changes during Tihar</h2>
<p>Government offices, banks and most businesses close for Laxmi Puja and Bhai Tika. Many Nepali families gather for elaborate meals; deusi-bhailo singing groups visit homes through the evening. Streets come alive with light, sound and colour.</p>
`,
  },
  {
    slug: "nepali-calendar-2082-guide",
    title: "Nepali calendar 2082 BS — your complete year guide",
    description: "An overview of the year 2082 BS: month-by-month structure, festivals, the fiscal year window and big public holidays.",
    readingMinutes: 6,
    publishedIso: "2025-04-14",
    body: `
<h2>2082 BS at a glance</h2>
<p>Year 2082 of the Bikram Sambat calendar begins on <strong>14 April 2025</strong> AD and runs through the spring of 2026 AD. It contains the usual twelve Nepali months — from Baisakh through Chaitra — and a long list of religious and civic observances.</p>

<h2>Month lengths in 2082 BS</h2>
<p>Baisakh (31), Jestha (31), Ashadh (31), Shrawan (32), Bhadra (31), Ashwin (31), Kartik (30), Mangsir (29), Poush (30), Magh (29), Falgun (30), Chaitra (30). See the full <a href="/nepali-calendar-2082">2082 calendar grid</a>.</p>

<h2>Major festivals in 2082 BS</h2>
<p>Highlights include Buddha Jayanti, Janai Purnima, Krishna Janmashtami, Teej, Dashain (Vijaya Dashami in Ashwin), Tihar in Kartik, Maha Shivaratri in Falgun and Holi. See the full list on the <a href="/festivals">festivals page</a>.</p>

<h2>Fiscal year</h2>
<p>FY 2082/83 starts on 1 Shrawan 2082 (3 August 2025 AD) and ends on the last day of Ashadh 2083 (mid-July 2026 AD). See <a href="/fiscal-year/2082">FY 2082/83 details</a>.</p>
`,
  },
  {
    slug: "convert-government-form-dates",
    title: "How to fill BS dates on government forms (without making the classic mistakes)",
    description: "Citizenship, passport, school and tax forms in Nepal need BS dates. Avoid the three most common conversion mistakes with this short guide.",
    readingMinutes: 4,
    publishedIso: "2025-11-04",
    body: `
<h2>Mistake 1: subtracting 57 every time</h2>
<p>Many people compute BS dates by subtracting 57 from the AD year. This is wrong from January through mid-April, where the offset is actually 56. Always use a real converter; never rely on year arithmetic alone.</p>

<h2>Mistake 2: ignoring the day of the week</h2>
<p>Government forms sometimes require both the BS date and the day of the week. The day of the week is identical in both calendars (it's the same Sunday-Saturday cycle), but make sure you copy it from your converter, not guess.</p>

<h2>Mistake 3: writing 32 days when there aren't 32</h2>
<p>Some Nepali months have 32 days (the longest is usually Shrawan); most have 29, 30 or 31. Don't write a day that doesn't exist in that month — use a converter that validates the input.</p>

<h2>Cross-check with your existing documents</h2>
<p>If you already have a citizenship card or passport with your DOB in BS, double-check that your new form uses the same BS date. Inconsistencies between documents are the most common cause of rejected applications.</p>

<p>The fastest way to get an authoritative BS date is the <a href="/ad-to-bs-converter">AD to BS converter</a>.</p>
`,
  },
  {
    slug: "list-of-public-holidays-nepal",
    title: "Complete list of public holidays in Nepal (2082 BS / 2025-26 AD)",
    description: "All gazetted public holidays in Nepal for 2082 BS, including national days, religious festivals and regional observances.",
    readingMinutes: 5,
    publishedIso: "2025-04-20",
    body: `
<h2>National holidays</h2>
<ul>
<li>Nepali New Year — 1 Baisakh</li>
<li>Loktantra Diwas — 11 Baisakh</li>
<li>International Labour Day — 18 Baisakh</li>
<li>Republic Day — 15 Jestha</li>
<li>Constitution Day — 3 Ashwin</li>
<li>Prajatantra Diwas — 26 Magh</li>
</ul>

<h2>Religious holidays</h2>
<ul>
<li>Buddha Jayanti</li>
<li>Janai Purnima</li>
<li>Krishna Janmashtami</li>
<li>Teej</li>
<li>Ghatasthapana to Vijaya Dashami (Dashain)</li>
<li>Laxmi Puja and Bhai Tika (Tihar)</li>
<li>Chhath Parva (largely observed in the Terai)</li>
<li>Maghe Sankranti</li>
<li>Maha Shivaratri</li>
<li>Holi (separate dates for Hill and Terai)</li>
<li>Sonam Lhosar / Gyalpo Lhosar (Tibetan-Buddhist)</li>
</ul>

<h2>Regional and observed</h2>
<p>Some holidays are gazetted for specific regions (e.g. Holi Hill vs Terai). Public-sector employees in Madhesh province may have additional regional days.</p>

<p>For the full year-by-year list with calendar mappings, see the <a href="/festivals">festivals page</a>.</p>
`,
  },
  {
    slug: "nepali-months-in-order",
    title: "The 12 Nepali months in order — names, days and trivia",
    description: "Baisakh through Chaitra: the 12 Bikram Sambat months in order, with average lengths, what each name means, and the festivals each contains.",
    readingMinutes: 4,
    publishedIso: "2025-08-12",
    body: `
<h2>The twelve months</h2>
<ol>
<li><strong>Baisakh</strong> (बैशाख) — Mid-Apr to Mid-May, 30-31 days. Contains Nepali New Year and Buddha Jayanti.</li>
<li><strong>Jestha</strong> (जेठ) — Mid-May to Mid-Jun, 31-32 days. Contains Republic Day.</li>
<li><strong>Ashadh</strong> (असार) — Mid-Jun to Mid-Jul, 31-32 days. End of fiscal year.</li>
<li><strong>Shrawan</strong> (साउन) — Mid-Jul to Mid-Aug, 31-32 days. Start of fiscal year and the holy month of Shiva.</li>
<li><strong>Bhadra</strong> (भदौ) — Mid-Aug to Mid-Sep, 31-32 days. Contains Krishna Janmashtami and Teej.</li>
<li><strong>Ashwin</strong> (असोज) — Mid-Sep to Mid-Oct, 30-31 days. Contains Constitution Day and the start of Dashain.</li>
<li><strong>Kartik</strong> (कार्तिक) — Mid-Oct to Mid-Nov, 29-30 days. Contains Tihar.</li>
<li><strong>Mangsir</strong> (मंसिर) — Mid-Nov to Mid-Dec, 29-30 days.</li>
<li><strong>Poush</strong> (पुस) — Mid-Dec to Mid-Jan, 29-30 days. Coldest month.</li>
<li><strong>Magh</strong> (माघ) — Mid-Jan to Mid-Feb, 29-30 days. Contains Maghe Sankranti and Prajatantra Diwas.</li>
<li><strong>Falgun</strong> (फाल्गुन) — Mid-Feb to Mid-Mar, 29-30 days. Contains Maha Shivaratri and Holi.</li>
<li><strong>Chaitra</strong> (चैत) — Mid-Mar to Mid-Apr, 30-31 days. Last month of the BS year.</li>
</ol>

<h2>Mnemonic for remembering the order</h2>
<p>Many Nepalis learn the months as a single rhythmic chant: "Baisakh, Jestha, Ashadh, Shrawan, Bhadra, Ashwin, Kartik, Mangsir, Poush, Magh, Falgun, Chaitra". Read it aloud once and the order sticks.</p>
`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
