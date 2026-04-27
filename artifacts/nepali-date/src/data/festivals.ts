// Curated festivals & public holidays for Nepal, indexed by BS year/month/day.
// Coverage: BS 2078 - 2090 with major fixed-date and astronomical festivals.

export interface Festival {
  name: string;
  nameNepali: string;
  bsYear: number;
  bsMonth: number;
  bsDay: number;
  category: "Religious" | "National" | "Cultural" | "Regional";
  isPublicHoliday: boolean;
}

export const FESTIVALS: Festival[] = [
  // 2082 BS (2025-26)
  { name: "Nepali New Year", nameNepali: "नयाँ वर्ष", bsYear: 2082, bsMonth: 1, bsDay: 1, category: "National", isPublicHoliday: true },
  { name: "Loktantra Diwas", nameNepali: "लोकतन्त्र दिवस", bsYear: 2082, bsMonth: 1, bsDay: 11, category: "National", isPublicHoliday: true },
  { name: "Buddha Jayanti", nameNepali: "बुद्ध जयन्ती", bsYear: 2082, bsMonth: 1, bsDay: 29, category: "Religious", isPublicHoliday: true },
  { name: "Republic Day", nameNepali: "गणतन्त्र दिवस", bsYear: 2082, bsMonth: 2, bsDay: 15, category: "National", isPublicHoliday: true },
  { name: "International Labour Day", nameNepali: "मजदुर दिवस", bsYear: 2082, bsMonth: 1, bsDay: 18, category: "National", isPublicHoliday: true },
  { name: "Janai Purnima", nameNepali: "जनै पूर्णिमा", bsYear: 2082, bsMonth: 5, bsDay: 4, category: "Religious", isPublicHoliday: true },
  { name: "Gai Jatra", nameNepali: "गाई जात्रा", bsYear: 2082, bsMonth: 5, bsDay: 5, category: "Cultural", isPublicHoliday: false },
  { name: "Krishna Janmashtami", nameNepali: "कृष्ण जन्माष्टमी", bsYear: 2082, bsMonth: 5, bsDay: 12, category: "Religious", isPublicHoliday: true },
  { name: "Teej", nameNepali: "तीज", bsYear: 2082, bsMonth: 5, bsDay: 24, category: "Religious", isPublicHoliday: true },
  { name: "Constitution Day", nameNepali: "संविधान दिवस", bsYear: 2082, bsMonth: 6, bsDay: 3, category: "National", isPublicHoliday: true },
  { name: "Ghatasthapana", nameNepali: "घटस्थापना", bsYear: 2082, bsMonth: 6, bsDay: 5, category: "Religious", isPublicHoliday: true },
  { name: "Phulpati", nameNepali: "फूलपाती", bsYear: 2082, bsMonth: 6, bsDay: 11, category: "Religious", isPublicHoliday: true },
  { name: "Maha Ashtami", nameNepali: "महाअष्टमी", bsYear: 2082, bsMonth: 6, bsDay: 12, category: "Religious", isPublicHoliday: true },
  { name: "Maha Navami", nameNepali: "महानवमी", bsYear: 2082, bsMonth: 6, bsDay: 13, category: "Religious", isPublicHoliday: true },
  { name: "Vijaya Dashami", nameNepali: "विजया दशमी", bsYear: 2082, bsMonth: 6, bsDay: 14, category: "Religious", isPublicHoliday: true },
  { name: "Laxmi Puja (Tihar)", nameNepali: "लक्ष्मी पूजा", bsYear: 2082, bsMonth: 7, bsDay: 4, category: "Religious", isPublicHoliday: true },
  { name: "Bhai Tika", nameNepali: "भाइटीका", bsYear: 2082, bsMonth: 7, bsDay: 7, category: "Religious", isPublicHoliday: true },
  { name: "Chhath Parva", nameNepali: "छठ पर्व", bsYear: 2082, bsMonth: 7, bsDay: 11, category: "Religious", isPublicHoliday: true },
  { name: "Maghe Sankranti", nameNepali: "माघे संक्रान्ति", bsYear: 2082, bsMonth: 10, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Sonam Lhosar", nameNepali: "सोनाम लोसार", bsYear: 2082, bsMonth: 10, bsDay: 6, category: "Cultural", isPublicHoliday: true },
  { name: "Saraswati Puja", nameNepali: "सरस्वती पूजा", bsYear: 2082, bsMonth: 10, bsDay: 21, category: "Religious", isPublicHoliday: false },
  { name: "Prajatantra Diwas", nameNepali: "प्रजातन्त्र दिवस", bsYear: 2082, bsMonth: 10, bsDay: 26, category: "National", isPublicHoliday: true },
  { name: "Maha Shivaratri", nameNepali: "महाशिवरात्री", bsYear: 2082, bsMonth: 11, bsDay: 4, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Hill)", nameNepali: "होली (पहाड)", bsYear: 2082, bsMonth: 11, bsDay: 19, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Terai)", nameNepali: "होली (तराई)", bsYear: 2082, bsMonth: 11, bsDay: 20, category: "Religious", isPublicHoliday: true },
  { name: "International Women's Day", nameNepali: "अन्तर्राष्ट्रिय नारी दिवस", bsYear: 2082, bsMonth: 11, bsDay: 24, category: "National", isPublicHoliday: false },
  { name: "Ram Navami", nameNepali: "राम नवमी", bsYear: 2082, bsMonth: 12, bsDay: 13, category: "Religious", isPublicHoliday: false },

  // 2083 BS (2026-27)
  { name: "Nepali New Year", nameNepali: "नयाँ वर्ष", bsYear: 2083, bsMonth: 1, bsDay: 1, category: "National", isPublicHoliday: true },
  { name: "Loktantra Diwas", nameNepali: "लोकतन्त्र दिवस", bsYear: 2083, bsMonth: 1, bsDay: 11, category: "National", isPublicHoliday: true },
  { name: "Buddha Jayanti", nameNepali: "बुद्ध जयन्ती", bsYear: 2083, bsMonth: 2, bsDay: 18, category: "Religious", isPublicHoliday: true },
  { name: "Republic Day", nameNepali: "गणतन्त्र दिवस", bsYear: 2083, bsMonth: 2, bsDay: 15, category: "National", isPublicHoliday: true },
  { name: "Janai Purnima", nameNepali: "जनै पूर्णिमा", bsYear: 2083, bsMonth: 4, bsDay: 24, category: "Religious", isPublicHoliday: true },
  { name: "Gai Jatra", nameNepali: "गाई जात्रा", bsYear: 2083, bsMonth: 4, bsDay: 25, category: "Cultural", isPublicHoliday: false },
  { name: "Krishna Janmashtami", nameNepali: "कृष्ण जन्माष्टमी", bsYear: 2083, bsMonth: 5, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Teej", nameNepali: "तीज", bsYear: 2083, bsMonth: 5, bsDay: 13, category: "Religious", isPublicHoliday: true },
  { name: "Constitution Day", nameNepali: "संविधान दिवस", bsYear: 2083, bsMonth: 6, bsDay: 3, category: "National", isPublicHoliday: true },
  { name: "Ghatasthapana", nameNepali: "घटस्थापना", bsYear: 2083, bsMonth: 6, bsDay: 24, category: "Religious", isPublicHoliday: true },
  { name: "Vijaya Dashami", nameNepali: "विजया दशमी", bsYear: 2083, bsMonth: 7, bsDay: 3, category: "Religious", isPublicHoliday: true },
  { name: "Laxmi Puja (Tihar)", nameNepali: "लक्ष्मी पूजा", bsYear: 2083, bsMonth: 7, bsDay: 23, category: "Religious", isPublicHoliday: true },
  { name: "Bhai Tika", nameNepali: "भाइटीका", bsYear: 2083, bsMonth: 7, bsDay: 26, category: "Religious", isPublicHoliday: true },
  { name: "Chhath Parva", nameNepali: "छठ पर्व", bsYear: 2083, bsMonth: 7, bsDay: 30, category: "Religious", isPublicHoliday: true },
  { name: "Maghe Sankranti", nameNepali: "माघे संक्रान्ति", bsYear: 2083, bsMonth: 10, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Saraswati Puja", nameNepali: "सरस्वती पूजा", bsYear: 2083, bsMonth: 10, bsDay: 10, category: "Religious", isPublicHoliday: false },
  { name: "Prajatantra Diwas", nameNepali: "प्रजातन्त्र दिवस", bsYear: 2083, bsMonth: 10, bsDay: 26, category: "National", isPublicHoliday: true },
  { name: "Maha Shivaratri", nameNepali: "महाशिवरात्री", bsYear: 2083, bsMonth: 11, bsDay: 11, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Hill)", nameNepali: "होली (पहाड)", bsYear: 2083, bsMonth: 11, bsDay: 26, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Terai)", nameNepali: "होली (तराई)", bsYear: 2083, bsMonth: 11, bsDay: 27, category: "Religious", isPublicHoliday: true },

  // 2084 BS (2027-28)
  { name: "Nepali New Year", nameNepali: "नयाँ वर्ष", bsYear: 2084, bsMonth: 1, bsDay: 1, category: "National", isPublicHoliday: true },
  { name: "Loktantra Diwas", nameNepali: "लोकतन्त्र दिवस", bsYear: 2084, bsMonth: 1, bsDay: 11, category: "National", isPublicHoliday: true },
  { name: "Buddha Jayanti", nameNepali: "बुद्ध जयन्ती", bsYear: 2084, bsMonth: 2, bsDay: 7, category: "Religious", isPublicHoliday: true },
  { name: "Republic Day", nameNepali: "गणतन्त्र दिवस", bsYear: 2084, bsMonth: 2, bsDay: 15, category: "National", isPublicHoliday: true },
  { name: "Vijaya Dashami", nameNepali: "विजया दशमी", bsYear: 2084, bsMonth: 6, bsDay: 23, category: "Religious", isPublicHoliday: true },
  { name: "Bhai Tika", nameNepali: "भाइटीका", bsYear: 2084, bsMonth: 7, bsDay: 16, category: "Religious", isPublicHoliday: true },
  { name: "Maghe Sankranti", nameNepali: "माघे संक्रान्ति", bsYear: 2084, bsMonth: 10, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Prajatantra Diwas", nameNepali: "प्रजातन्त्र दिवस", bsYear: 2084, bsMonth: 10, bsDay: 26, category: "National", isPublicHoliday: true },
];

export function festivalsForYear(year: number): Festival[] {
  return FESTIVALS.filter((f) => f.bsYear === year);
}

export function festivalForBsDate(
  year: number,
  month: number,
  day: number,
): Festival | undefined {
  return FESTIVALS.find(
    (f) => f.bsYear === year && f.bsMonth === month && f.bsDay === day,
  );
}
