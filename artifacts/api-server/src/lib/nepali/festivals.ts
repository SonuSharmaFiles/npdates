import { bsToAd } from "./converter.js";

export interface ServerFestival {
  name: string;
  nameNepali: string;
  bsYear: number;
  bsMonth: number;
  bsDay: number;
  category: "Religious" | "National" | "Cultural" | "Regional";
  isPublicHoliday: boolean;
}

// Festival dates verified against:
//   - Nepal Government Gazette (Ministry of Home Affairs)
//   - Hamro Patro (hamropatro.com)
//   - ashesh.com.np
//   - drikpanchang.com
//   - nepalicalendar.online
//
// Do NOT estimate lunar festival dates — always verify against official sources.

export const FESTIVALS: ServerFestival[] = [
  // ══════════════════════════════════════════════════════════════
  // 2082 BS (2025-26 AD)
  // ══════════════════════════════════════════════════════════════
  { name: "Nepali New Year", nameNepali: "नयाँ वर्ष", bsYear: 2082, bsMonth: 1, bsDay: 1, category: "National", isPublicHoliday: true },
  { name: "Loktantra Diwas", nameNepali: "लोकतन्त्र दिवस", bsYear: 2082, bsMonth: 1, bsDay: 11, category: "National", isPublicHoliday: true },
  { name: "International Labour Day", nameNepali: "मजदुर दिवस", bsYear: 2082, bsMonth: 1, bsDay: 18, category: "National", isPublicHoliday: true },
  { name: "Buddha Jayanti", nameNepali: "बुद्ध जयन्ती", bsYear: 2082, bsMonth: 1, bsDay: 29, category: "Religious", isPublicHoliday: true },
  { name: "Republic Day", nameNepali: "गणतन्त्र दिवस", bsYear: 2082, bsMonth: 2, bsDay: 15, category: "National", isPublicHoliday: true },
  { name: "Janai Purnima", nameNepali: "जनै पूर्णिमा", bsYear: 2082, bsMonth: 4, bsDay: 24, category: "Religious", isPublicHoliday: true },
  { name: "Gai Jatra", nameNepali: "गाई जात्रा", bsYear: 2082, bsMonth: 4, bsDay: 25, category: "Cultural", isPublicHoliday: false },
  { name: "Krishna Janmashtami", nameNepali: "कृष्ण जन्माष्टमी", bsYear: 2082, bsMonth: 4, bsDay: 31, category: "Religious", isPublicHoliday: true },
  { name: "Teej", nameNepali: "तीज", bsYear: 2082, bsMonth: 5, bsDay: 10, category: "Religious", isPublicHoliday: true },
  { name: "Constitution Day", nameNepali: "संविधान दिवस", bsYear: 2082, bsMonth: 6, bsDay: 3, category: "National", isPublicHoliday: true },
  { name: "Ghatasthapana", nameNepali: "घटस्थापना", bsYear: 2082, bsMonth: 6, bsDay: 6, category: "Religious", isPublicHoliday: true },
  { name: "Phulpati", nameNepali: "फूलपाती", bsYear: 2082, bsMonth: 6, bsDay: 13, category: "Religious", isPublicHoliday: true },
  { name: "Maha Ashtami", nameNepali: "महाअष्टमी", bsYear: 2082, bsMonth: 6, bsDay: 14, category: "Religious", isPublicHoliday: true },
  { name: "Maha Navami", nameNepali: "महानवमी", bsYear: 2082, bsMonth: 6, bsDay: 15, category: "Religious", isPublicHoliday: true },
  { name: "Vijaya Dashami", nameNepali: "विजया दशमी", bsYear: 2082, bsMonth: 6, bsDay: 16, category: "Religious", isPublicHoliday: true },
  { name: "Laxmi Puja", nameNepali: "लक्ष्मी पूजा", bsYear: 2082, bsMonth: 7, bsDay: 3, category: "Religious", isPublicHoliday: true },
  { name: "Bhai Tika", nameNepali: "भाइटीका", bsYear: 2082, bsMonth: 7, bsDay: 6, category: "Religious", isPublicHoliday: true },
  { name: "Chhath Parva", nameNepali: "छठ पर्व", bsYear: 2082, bsMonth: 7, bsDay: 10, category: "Religious", isPublicHoliday: true },
  { name: "Maghe Sankranti", nameNepali: "माघे संक्रान्ति", bsYear: 2082, bsMonth: 10, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Sonam Lhosar", nameNepali: "सोनाम लोसार", bsYear: 2082, bsMonth: 10, bsDay: 5, category: "Cultural", isPublicHoliday: true },
  { name: "Saraswati Puja", nameNepali: "सरस्वती पूजा", bsYear: 2082, bsMonth: 10, bsDay: 9, category: "Religious", isPublicHoliday: false },
  { name: "Prajatantra Diwas", nameNepali: "प्रजातन्त्र दिवस", bsYear: 2082, bsMonth: 10, bsDay: 26, category: "National", isPublicHoliday: true },
  { name: "Maha Shivaratri", nameNepali: "महाशिवरात्री", bsYear: 2082, bsMonth: 11, bsDay: 3, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Hill)", nameNepali: "होली (पहाड)", bsYear: 2082, bsMonth: 11, bsDay: 18, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Terai)", nameNepali: "होली (तराई)", bsYear: 2082, bsMonth: 11, bsDay: 19, category: "Religious", isPublicHoliday: true },
  { name: "Ram Navami", nameNepali: "राम नवमी", bsYear: 2082, bsMonth: 12, bsDay: 13, category: "Religious", isPublicHoliday: false },

  // ══════════════════════════════════════════════════════════════
  // 2083 BS (2026-27 AD)
  // ══════════════════════════════════════════════════════════════
  { name: "Nepali New Year", nameNepali: "नयाँ वर्ष", bsYear: 2083, bsMonth: 1, bsDay: 1, category: "National", isPublicHoliday: true },
  { name: "Loktantra Diwas", nameNepali: "लोकतन्त्र दिवस", bsYear: 2083, bsMonth: 1, bsDay: 11, category: "National", isPublicHoliday: true },
  { name: "International Labour Day", nameNepali: "मजदुर दिवस", bsYear: 2083, bsMonth: 1, bsDay: 18, category: "National", isPublicHoliday: true },
  { name: "Buddha Jayanti", nameNepali: "बुद्ध जयन्ती", bsYear: 2083, bsMonth: 1, bsDay: 18, category: "Religious", isPublicHoliday: true },
  { name: "Republic Day", nameNepali: "गणतन्त्र दिवस", bsYear: 2083, bsMonth: 2, bsDay: 15, category: "National", isPublicHoliday: true },
  { name: "Janai Purnima", nameNepali: "जनै पूर्णिमा", bsYear: 2083, bsMonth: 5, bsDay: 12, category: "Religious", isPublicHoliday: true },
  { name: "Gai Jatra", nameNepali: "गाई जात्रा", bsYear: 2083, bsMonth: 5, bsDay: 13, category: "Cultural", isPublicHoliday: false },
  { name: "Krishna Janmashtami", nameNepali: "कृष्ण जन्माष्टमी", bsYear: 2083, bsMonth: 5, bsDay: 19, category: "Religious", isPublicHoliday: true },
  { name: "Teej", nameNepali: "तीज", bsYear: 2083, bsMonth: 5, bsDay: 29, category: "Religious", isPublicHoliday: true },
  { name: "Constitution Day", nameNepali: "संविधान दिवस", bsYear: 2083, bsMonth: 6, bsDay: 3, category: "National", isPublicHoliday: true },
  { name: "Ghatasthapana", nameNepali: "घटस्थापना", bsYear: 2083, bsMonth: 6, bsDay: 25, category: "Religious", isPublicHoliday: true },
  { name: "Phulpati", nameNepali: "फूलपाती", bsYear: 2083, bsMonth: 7, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Maha Ashtami", nameNepali: "महाअष्टमी", bsYear: 2083, bsMonth: 7, bsDay: 2, category: "Religious", isPublicHoliday: true },
  { name: "Maha Navami", nameNepali: "महानवमी", bsYear: 2083, bsMonth: 7, bsDay: 3, category: "Religious", isPublicHoliday: true },
  { name: "Vijaya Dashami", nameNepali: "विजया दशमी", bsYear: 2083, bsMonth: 7, bsDay: 4, category: "Religious", isPublicHoliday: true },
  { name: "Laxmi Puja", nameNepali: "लक्ष्मी पूजा", bsYear: 2083, bsMonth: 7, bsDay: 22, category: "Religious", isPublicHoliday: true },
  { name: "Bhai Tika", nameNepali: "भाइटीका", bsYear: 2083, bsMonth: 7, bsDay: 25, category: "Religious", isPublicHoliday: true },
  { name: "Chhath Parva", nameNepali: "छठ पर्व", bsYear: 2083, bsMonth: 7, bsDay: 29, category: "Religious", isPublicHoliday: true },
  { name: "Maghe Sankranti", nameNepali: "माघे संक्रान्ति", bsYear: 2083, bsMonth: 10, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Sonam Lhosar", nameNepali: "सोनाम लोसार", bsYear: 2083, bsMonth: 10, bsDay: 24, category: "Cultural", isPublicHoliday: true },
  { name: "Saraswati Puja", nameNepali: "सरस्वती पूजा", bsYear: 2083, bsMonth: 10, bsDay: 28, category: "Religious", isPublicHoliday: false },
  { name: "Prajatantra Diwas", nameNepali: "प्रजातन्त्र दिवस", bsYear: 2083, bsMonth: 11, bsDay: 7, category: "National", isPublicHoliday: true },
  { name: "Maha Shivaratri", nameNepali: "महाशिवरात्री", bsYear: 2083, bsMonth: 11, bsDay: 22, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Hill)", nameNepali: "होली (पहाड)", bsYear: 2083, bsMonth: 11, bsDay: 29, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Terai)", nameNepali: "होली (तराई)", bsYear: 2083, bsMonth: 12, bsDay: 1, category: "Religious", isPublicHoliday: true },

  // ══════════════════════════════════════════════════════════════
  // 2084 BS (2027-28 AD)
  // ══════════════════════════════════════════════════════════════
  { name: "Nepali New Year", nameNepali: "नयाँ वर्ष", bsYear: 2084, bsMonth: 1, bsDay: 1, category: "National", isPublicHoliday: true },
  { name: "Loktantra Diwas", nameNepali: "लोकतन्त्र दिवस", bsYear: 2084, bsMonth: 1, bsDay: 11, category: "National", isPublicHoliday: true },
  { name: "Buddha Jayanti", nameNepali: "बुद्ध जयन्ती", bsYear: 2084, bsMonth: 2, bsDay: 7, category: "Religious", isPublicHoliday: true },
  { name: "Republic Day", nameNepali: "गणतन्त्र दिवस", bsYear: 2084, bsMonth: 2, bsDay: 15, category: "National", isPublicHoliday: true },
  { name: "Vijaya Dashami", nameNepali: "विजया दशमी", bsYear: 2084, bsMonth: 6, bsDay: 23, category: "Religious", isPublicHoliday: true },
  { name: "Bhai Tika", nameNepali: "भाइटीका", bsYear: 2084, bsMonth: 7, bsDay: 16, category: "Religious", isPublicHoliday: true },
  { name: "Maghe Sankranti", nameNepali: "माघे संक्रान्ति", bsYear: 2084, bsMonth: 10, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Prajatantra Diwas", nameNepali: "प्रजातन्त्र दिवस", bsYear: 2084, bsMonth: 10, bsDay: 26, category: "National", isPublicHoliday: true },
];

export function festivalsForYearWithAd(year: number) {
  return FESTIVALS.filter((f) => f.bsYear === year).map((f) => {
    const r = bsToAd(f.bsYear, f.bsMonth, f.bsDay);
    return { ...f, adIso: r.ad.iso };
  });
}

export function festivalForBsDate(year: number, month: number, day: number) {
  return FESTIVALS.find(
    (f) => f.bsYear === year && f.bsMonth === month && f.bsDay === day,
  );
}
