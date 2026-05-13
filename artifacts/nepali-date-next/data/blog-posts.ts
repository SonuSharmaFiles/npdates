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
  {
    slug: "nepali-new-year-2083",
    title: "Nepali New Year 2083 BS — date, traditions and what to expect",
    description: "Nepali New Year 2083 (Navabarsha) falls on 14 April 2026 AD. Learn the date, how it is celebrated across Nepal, and the significance of 1 Baisakh.",
    readingMinutes: 5,
    publishedIso: "2026-01-10",
    body: `
<h2>When is Nepali New Year 2083?</h2>
<p>Nepali New Year 2083 BS falls on <strong>14 April 2026 AD</strong> (1 Baisakh 2083 BS). This date is a public holiday across Nepal and marks the start of a new Bikram Sambat year. In the Gregorian calendar it always lands between 12 and 15 April, though the exact day shifts slightly each year.</p>

<h2>How 1 Baisakh is celebrated</h2>
<p>Families gather for special meals, new clothes are worn, and elders receive respect through <em>dhog</em> (touching of feet). The streets of Kathmandu fill with processions; Dharahara-area and Basantapur Durbar Square attract large crowds. Radio and television broadcast New Year greetings in Nepali, and newspapers publish the new annual patro (calendar).</p>

<h2>Regional traditions</h2>
<p>In the hills, communities play traditional music and dance the <em>maruni</em> and <em>sorathi</em>. In the Terai, the new year overlaps with Maithili and Bhojpuri cultural festivals. In the mountains, it is a time for the community to plan the farming season, as the monsoon is six to eight weeks away.</p>

<h2>Baisakh in the fiscal year</h2>
<p>Although it opens the new calendar year, Baisakh sits in the <em>last quarter</em> of the fiscal year (which ends in Ashadh). Government offices and schools are in the final stretch of the FY 2082/83 budget cycle during this period.</p>

<h2>Converting 1 Baisakh 2083 to AD</h2>
<p>Use the <a href="/bs-to-ad-converter">BS to AD converter</a> to confirm the exact AD date or look up any other day in the new year. The full monthly calendar is available on the <a href="/nepali-calendar-2083">2083 calendar page</a>.</p>
`,
  },
  {
    slug: "nepali-calendar-2083-guide",
    title: "Nepali calendar 2083 BS — month-by-month guide, festivals and holidays",
    description: "Everything you need for the year 2083 BS: month lengths, major festivals, fiscal year window, public holidays and key conversion dates.",
    readingMinutes: 6,
    publishedIso: "2026-01-20",
    body: `
<h2>2083 BS at a glance</h2>
<p>Year 2083 of the Bikram Sambat calendar begins on <strong>14 April 2026 AD</strong> and runs to <strong>13 April 2027 AD</strong>. It is the year that follows 2082 in the sequence, and like every BS year it is divided into twelve months of varying lengths.</p>

<h2>Month lengths in 2083 BS</h2>
<table>
<thead><tr><th>Month</th><th>Days</th><th>Approx AD window</th></tr></thead>
<tbody>
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
</tbody>
</table>

<h2>Fiscal year in 2083 BS</h2>
<p>FY 2083/84 runs from <strong>1 Shrawan 2083</strong> (17 Jul 2026 AD) to the end of Ashadh 2084 (around July 2027 AD). The first three months of 2083 BS (Baisakh–Ashadh) belong to the previous FY 2082/83.</p>

<h2>Key festivals in 2083 BS</h2>
<ul>
<li><strong>Nepali New Year</strong> — 1 Baisakh 2083 (14 Apr 2026)</li>
<li><strong>Buddha Jayanti</strong> — Baisakh Purnima</li>
<li><strong>Republic Day</strong> — 15 Jestha</li>
<li><strong>Janai Purnima</strong> — Shrawan Purnima</li>
<li><strong>Krishna Janmashtami</strong> — Bhadra</li>
<li><strong>Teej</strong> — Bhadra</li>
<li><strong>Constitution Day</strong> — 3 Ashwin</li>
<li><strong>Dashain</strong> — Ghatasthapana in Ashwin, Vijaya Dashami in Kartik</li>
<li><strong>Tihar</strong> — Kartik</li>
<li><strong>Maghe Sankranti</strong> — 1 Magh</li>
<li><strong>Maha Shivaratri</strong> — Falgun</li>
<li><strong>Holi</strong> — Falgun</li>
</ul>

<p>Browse the full day-by-day layout on the <a href="/nepali-calendar-2083">2083 calendar page</a>.</p>
`,
  },
  {
    slug: "maghe-sankranti-explained",
    title: "Maghe Sankranti explained: Nepal's winter harvest festival on 1 Magh",
    description: "Maghe Sankranti falls on 1 Magh every year (mid-January AD). Learn its significance, traditional foods, rituals, and the exact AD date for 2082–2084 BS.",
    readingMinutes: 4,
    publishedIso: "2026-01-14",
    body: `
<h2>What is Maghe Sankranti?</h2>
<p><strong>Maghe Sankranti</strong> (माघे संक्रान्ति) is a major Hindu festival in Nepal observed on <strong>1 Magh</strong>, the tenth month of the Bikram Sambat calendar. It marks the sun's transition into Capricorn (Makara), and in the Gregorian calendar it typically falls on <strong>14 or 15 January</strong>.</p>

<h2>Religious significance</h2>
<p>According to Hindu belief, the sun moves from the southern hemisphere to the northern on this day — a shift called <em>Uttarayan</em>. It signals the end of the inauspicious period (<em>Dakshinayan</em>) and the beginning of a spiritually auspicious time. Sacred rivers, especially the Triveni at Devghat near Chitwan, draw thousands of pilgrims who take ritual baths at dawn.</p>

<h2>Traditional foods</h2>
<p>Specific foods are mandatory on Maghe Sankranti because they are believed to generate body warmth in winter:</p>
<ul>
<li><strong>Til ko laddu</strong> (sesame seed balls) — sesame generates heat</li>
<li><strong>Chaku</strong> (hardened molasses candy) — a Newar delicacy</li>
<li><strong>Sweet potato and taro</strong> — boiled and eaten with ghee</li>
<li><strong>Ghee</strong> — pure clarified butter, considered deeply nourishing</li>
</ul>

<h2>Exact dates</h2>
<ul>
<li>Maghe Sankranti 2082 BS — <strong>15 January 2026 AD</strong></li>
<li>Maghe Sankranti 2083 BS — <strong>15 January 2027 AD</strong></li>
</ul>

<h2>Public holiday status</h2>
<p>Maghe Sankranti is a gazetted public holiday in Nepal. Government offices, banks and most private businesses are closed. The holiday is especially significant in the Terai where the festival overlaps with Makar Mela fairs.</p>
`,
  },
  {
    slug: "how-to-convert-date-of-birth-bs-to-ad",
    title: "How to convert your Nepali date of birth from BS to AD — step by step",
    description: "Passports, visas, international job applications and foreign universities all need your date of birth in AD. Here's how to convert accurately from your BS DOB.",
    readingMinutes: 5,
    publishedIso: "2026-02-03",
    body: `
<h2>Why you need your DOB in AD</h2>
<p>Nepal's citizenship certificates, school-leaving certificates (SLC/SEE) and many official documents record dates in Bikram Sambat. However, passports, visa applications, foreign university forms, and most international services require dates in the Gregorian (AD) calendar. Getting the conversion exactly right matters — a single-day error can invalidate a visa or cause identity verification failures.</p>

<h2>The fast method: use the converter</h2>
<p>The simplest approach is the <a href="/bs-to-ad-converter">BS to AD converter</a>:</p>
<ol>
<li>Find your BS date of birth on your citizenship card or birth certificate.</li>
<li>Enter the year, month and day.</li>
<li>The converter returns the exact AD date — day, month and year.</li>
</ol>
<p>No arithmetic, no risk of the mid-April year-boundary error.</p>

<h2>Common mistake: the year boundary error</h2>
<p>Many people subtract 56 or 57 from their BS birth year to get the AD year. This works <em>most of the time</em>, but fails for births in Baisakh, Jestha, and Ashadh (months 1–3), where the correct offset is 56, not 57. For example, someone born in Baisakh 2040 BS was born in April 1983 AD — not 1983/1984 from arithmetic alone.</p>

<h2>Verifying against your passport</h2>
<p>If you already have a Nepali passport, your AD date of birth is printed there. Cross-check the converter result against your passport DOB. If they differ, the passport is the legal record — report the discrepancy to the issuing authority rather than guessing.</p>

<h2>Recording the full date for forms</h2>
<p>International forms typically want the date in one of these formats: <code>DD/MM/YYYY</code>, <code>MM/DD/YYYY</code>, or <code>YYYY-MM-DD</code> (ISO). Once you have the AD year, month and day from the converter, format accordingly. Never omit leading zeros (e.g. write <code>03/04/1990</code>, not <code>3/4/1990</code>).</p>
`,
  },
  {
    slug: "teej-festival-dates-2083",
    title: "Teej 2083 dates, rituals and traditions — everything you need to know",
    description: "Teej 2083 falls in Bhadra. Learn the exact dates, the three-day ritual sequence (Dar, Teej, Rishi Panchami), fasting rules and what makes Teej unique in Nepal.",
    readingMinutes: 5,
    publishedIso: "2026-02-18",
    body: `
<h2>What is Teej?</h2>
<p><strong>Teej</strong> (तीज) is a Hindu festival observed by Nepali and North Indian women, dedicated to Lord Shiva and Goddess Parvati. Women pray for their husbands' long life, health and prosperity. Unmarried women pray for a good husband. It is famous for its daylong fast (<em>nirjala</em> — no food, no water), colourful red saris, song and dance.</p>

<h2>The three days of Teej</h2>
<ol>
<li><strong>Dar</strong> (the eve) — Women gather at family homes for a feast the evening before the main fast. Rich foods are eaten to prepare for the following day's fast.</li>
<li><strong>Teej</strong> (the main day, Haritalika Teej) — Women fast all day, visit Pashupatinath and other Shiva temples, and break the fast only after the moon rises. Red clothing, red bangles and red tika are worn.</li>
<li><strong>Rishi Panchami</strong> (day after Teej) — Women worship the Saptarishi (seven sages) and perform a ritual bath with 365 blades of <em>datiwan</em> grass.</li>
</ol>

<h2>Teej 2083 BS dates</h2>
<p>Teej falls on the third day of the bright fortnight (Shukla Tritiya) of Bhadra. For 2083 BS this places the main Teej day in <strong>late Bhadra 2083</strong> (approximately September 2026 AD). Exact dates depend on the lunar calendar and are confirmed in the annual patro published at the start of the BS year. Check the <a href="/festivals">festivals page</a> for the confirmed date as it approaches.</p>

<h2>Cultural importance</h2>
<p>Teej is one of the most visible celebrations in Nepal. The Bagmati river banks at Pashupatinath fill with thousands of red-clad women singing traditional Teej songs (<em>teej geet</em>). Television channels broadcast live performances, and the songs — often with witty social commentary — are culturally significant beyond their religious role.</p>
`,
  },
  {
    slug: "nepali-patro-guide",
    title: "What is a Nepali Patro? History, structure and how to read it",
    description: "The Nepali patro is far more than a calendar — it includes tithis, festivals, auspicious times and the full BS date grid. Here's how to read and use it.",
    readingMinutes: 5,
    publishedIso: "2026-02-25",
    body: `
<h2>What is a Nepali Patro?</h2>
<p><strong>Patro</strong> (पात्रो) literally means "document" or "record" in Nepali, but in common use it refers to the traditional Nepali almanac-calendar that is published each Baisakh. A patro goes far beyond a simple date grid — it includes the lunar <em>tithi</em>, planetary positions, festival dates, auspicious (<em>shubha</em>) and inauspicious (<em>ashubha</em>) times, <em>yoga</em>, <em>karana</em>, and other Jyotish data.</p>

<h2>Printed vs. digital patro</h2>
<p>For generations the patro was a small printed booklet, sold at bookshops and temples from 1 Baisakh. Today, apps and websites like npdates serve the same function digitally. The underlying data — month lengths, festival dates, tithi boundaries — is the same; the medium has changed.</p>

<h2>The Bikram Sambat solar grid</h2>
<p>The core of every patro is the solar-month calendar: each month is laid out in a grid of seven columns (Sunday through Saturday) with BS dates in each cell. Some patros also print the corresponding AD date in smaller type below each BS date. This dual-date layout is the most practical feature for people navigating both systems.</p>

<h2>Tithi — the lunar day</h2>
<p>Alongside the solar grid, the patro lists the <em>tithi</em> for each day. A tithi is a lunar day, roughly 23.6 hours long, so it does not align with solar days 1:1. One solar day may contain parts of two tithis. Most Hindu religious observances (fasting, weddings, naming ceremonies) are scheduled by tithi, not by the BS solar date, which is why the tithi column matters to millions of users.</p>

<h2>Reading the auspicious time columns</h2>
<p>Traditional patros mark certain times as <em>Rahu Kalam</em> (inauspicious window attributed to Rahu), <em>Gulika Kalam</em>, and <em>Yamakantam</em>. Important events — surgeries, business launches, travel — are often scheduled around these windows. While these are Jyotish-based, they remain a practical feature that millions of Nepali families consult daily.</p>

<p>Explore the digital patro on the <a href="/nepali-calendar">Nepali calendar page</a>.</p>
`,
  },
  {
    slug: "bs-date-for-visa-application",
    title: "Using your Nepali BS date for visa applications abroad — a practical guide",
    description: "Embassies and visa agencies need your date of birth in AD. Learn exactly how to convert your BS DOB, what format different embassies require, and how to avoid rejection.",
    readingMinutes: 5,
    publishedIso: "2026-03-05",
    body: `
<h2>The core problem</h2>
<p>Your Nepali citizenship certificate and most official Nepali documents record dates in Bikram Sambat. Foreign embassies — US, UK, Schengen, Australia, Canada — accept only Gregorian (AD) dates. Even a single-day mismatch between your visa application and your passport DOB can trigger additional scrutiny or outright rejection.</p>

<h2>Step 1: find your BS date of birth</h2>
<p>Your BS DOB appears on your citizenship certificate, your school-leaving (SLC/SEE) certificate, or your birth certificate. If these documents disagree, use the citizenship certificate — it is the primary civil identity document in Nepal.</p>

<h2>Step 2: convert precisely</h2>
<p>Use the <a href="/bs-to-ad-converter">BS to AD converter</a> to get the exact AD date. Do not use year arithmetic (subtracting 56 or 57) — this fails for dates in January through mid-April.</p>

<h2>Step 3: match the format required</h2>
<p>Different visa application systems use different date formats:</p>
<ul>
<li><strong>US (DS-160)</strong>: MM/DD/YYYY — e.g. 04/14/1990</li>
<li><strong>UK (UKVI)</strong>: DD/MM/YYYY — e.g. 14/04/1990</li>
<li><strong>Schengen (VFS)</strong>: DD.MM.YYYY — e.g. 14.04.1990</li>
<li><strong>Canada (IRCC)</strong>: YYYY-MM-DD — e.g. 1990-04-14</li>
</ul>

<h2>Step 4: cross-check against your Nepali passport</h2>
<p>Your Nepali passport already contains your AD date of birth in the Machine-Readable Zone. Cross-check your conversion result against the passport. If they differ, use the passport's AD date on the visa form (it is the internationally recognised document), and report the discrepancy in your citizenship certificate to the Passport Office.</p>

<h2>Keep a permanent record</h2>
<p>Once you have confirmed your AD DOB, write it down and keep it with your important documents. Many Nepali families discover a DOB inconsistency only when applying for their first visa abroad — far better to resolve it before you urgently need a visa.</p>
`,
  },
  {
    slug: "nepali-date-difference-calculator",
    title: "How to calculate the number of days between two Nepali BS dates",
    description: "Need to know how many days between two BS dates? Learn when to use the date-difference tool, common use cases in Nepal, and how the calculation works.",
    readingMinutes: 4,
    publishedIso: "2026-03-15",
    body: `
<h2>When do you need date-difference in BS?</h2>
<p>Several practical situations in Nepal call for exact day counts between two Bikram Sambat dates:</p>
<ul>
<li>Calculating a contract duration (government contracts run in BS dates)</li>
<li>Finding how many days remain until a tax deadline</li>
<li>Counting days for a probation or leave entitlement period in employment</li>
<li>Checking whether a property registration or tender period is still open</li>
<li>Figuring out how many days until a festival or auspicious occasion</li>
</ul>

<h2>The challenge with BS month arithmetic</h2>
<p>In the Gregorian calendar, month lengths are almost fixed (28–31 days) so simple arithmetic is predictable. In Bikram Sambat, month lengths vary from 29 to 32 days and the lengths themselves change from year to year. You cannot reliably count by saying "three months = 90 days" in BS — it might be 88 or 93 depending on which months are involved.</p>

<h2>How the date-difference tool works</h2>
<p>The <a href="/date-difference">date-difference calculator</a> converts both input BS dates to a day count from the same epoch, then subtracts. The result is always exact regardless of month boundaries or year boundaries. The tool also breaks down the span into years, months and remaining days for readability.</p>

<h2>Working with durations across the new year</h2>
<p>A common source of confusion: a duration that spans 1 Baisakh. The year changes but the day count is continuous — 30 Chaitra 2082 and 1 Baisakh 2083 are consecutive days, just as 31 December and 1 January are in the Gregorian calendar. The date-difference tool handles this correctly regardless of year boundary.</p>

<h2>Converting the result to AD</h2>
<p>If you need the same duration expressed in AD terms, the answer is identical — the number of days between two calendar dates is the same regardless of which calendar system you use to specify those dates. Seven days is seven days in both BS and AD.</p>
`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
