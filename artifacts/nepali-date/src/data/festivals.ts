// Curated festivals & public holidays for Nepal, indexed by BS year/month/day.
// Coverage: BS 2082 - 2084 with major fixed-date and astronomical festivals.
//
// IMPORTANT: Lunar (tithi-based) festivals shift every year.
// Dates are sourced from:
//   - Nepal Government Gazette (Ministry of Home Affairs)
//   - Hamro Patro (hamropatro.com)
//   - ashesh.com.np
//   - drikpanchang.com
//   - nepalicalendar.online
//
// Do NOT estimate lunar festival dates — always verify against official sources.

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
  // ══════════════════════════════════════════════════════════════
  // 2082 BS (2025-26 AD)
  // Sources: Nepal Govt Gazette 2082, Hamro Patro, ashesh.com.np
  // ══════════════════════════════════════════════════════════════

  // ── Baisakh (month 1) ──
  { name: "Nepali New Year", nameNepali: "नयाँ वर्ष", bsYear: 2082, bsMonth: 1, bsDay: 1, category: "National", isPublicHoliday: true },
  { name: "Loktantra Diwas", nameNepali: "लोकतन्त्र दिवस", bsYear: 2082, bsMonth: 1, bsDay: 11, category: "National", isPublicHoliday: true },
  { name: "International Labour Day", nameNepali: "मजदुर दिवस", bsYear: 2082, bsMonth: 1, bsDay: 18, category: "National", isPublicHoliday: true },
  { name: "Buddha Jayanti", nameNepali: "बुद्ध जयन्ती", bsYear: 2082, bsMonth: 1, bsDay: 29, category: "Religious", isPublicHoliday: true },

  // ── Jestha (month 2) ──
  { name: "Republic Day", nameNepali: "गणतन्त्र दिवस", bsYear: 2082, bsMonth: 2, bsDay: 15, category: "National", isPublicHoliday: true },

  // ── Shrawan (month 4) ──
  { name: "Janai Purnima", nameNepali: "जनै पूर्णिमा", bsYear: 2082, bsMonth: 4, bsDay: 24, category: "Religious", isPublicHoliday: true },
  { name: "Gai Jatra", nameNepali: "गाई जात्रा", bsYear: 2082, bsMonth: 4, bsDay: 25, category: "Cultural", isPublicHoliday: false },
  { name: "Krishna Janmashtami", nameNepali: "कृष्ण जन्माष्टमी", bsYear: 2082, bsMonth: 4, bsDay: 31, category: "Religious", isPublicHoliday: true },

  // ── Bhadra (month 5) ──
  { name: "Teej", nameNepali: "तीज", bsYear: 2082, bsMonth: 5, bsDay: 10, category: "Religious", isPublicHoliday: true },

  // ── Ashwin (month 6) ──
  { name: "Constitution Day", nameNepali: "संविधान दिवस", bsYear: 2082, bsMonth: 6, bsDay: 3, category: "National", isPublicHoliday: true },
  { name: "Ghatasthapana", nameNepali: "घटस्थापना", bsYear: 2082, bsMonth: 6, bsDay: 6, category: "Religious", isPublicHoliday: true },
  { name: "Phulpati", nameNepali: "फूलपाती", bsYear: 2082, bsMonth: 6, bsDay: 13, category: "Religious", isPublicHoliday: true },
  { name: "Maha Ashtami", nameNepali: "महाअष्टमी", bsYear: 2082, bsMonth: 6, bsDay: 14, category: "Religious", isPublicHoliday: true },
  { name: "Maha Navami", nameNepali: "महानवमी", bsYear: 2082, bsMonth: 6, bsDay: 15, category: "Religious", isPublicHoliday: true },
  { name: "Vijaya Dashami", nameNepali: "विजया दशमी", bsYear: 2082, bsMonth: 6, bsDay: 16, category: "Religious", isPublicHoliday: true },

  // ── Kartik (month 7) ──
  { name: "Laxmi Puja (Tihar)", nameNepali: "लक्ष्मी पूजा", bsYear: 2082, bsMonth: 7, bsDay: 3, category: "Religious", isPublicHoliday: true },
  { name: "Bhai Tika", nameNepali: "भाइटीका", bsYear: 2082, bsMonth: 7, bsDay: 6, category: "Religious", isPublicHoliday: true },
  { name: "Chhath Parva", nameNepali: "छठ पर्व", bsYear: 2082, bsMonth: 7, bsDay: 10, category: "Religious", isPublicHoliday: true },

  // ── Magh (month 10) ──
  { name: "Maghe Sankranti", nameNepali: "माघे संक्रान्ति", bsYear: 2082, bsMonth: 10, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Sonam Lhosar", nameNepali: "सोनाम लोसार", bsYear: 2082, bsMonth: 10, bsDay: 5, category: "Cultural", isPublicHoliday: true },
  { name: "Saraswati Puja", nameNepali: "सरस्वती पूजा", bsYear: 2082, bsMonth: 10, bsDay: 9, category: "Religious", isPublicHoliday: false },
  { name: "Prajatantra Diwas", nameNepali: "प्रजातन्त्र दिवस", bsYear: 2082, bsMonth: 10, bsDay: 26, category: "National", isPublicHoliday: true },

  // ── Falgun (month 11) ──
  { name: "Maha Shivaratri", nameNepali: "महाशिवरात्री", bsYear: 2082, bsMonth: 11, bsDay: 3, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Hill)", nameNepali: "होली (पहाड)", bsYear: 2082, bsMonth: 11, bsDay: 18, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Terai)", nameNepali: "होली (तराई)", bsYear: 2082, bsMonth: 11, bsDay: 19, category: "Religious", isPublicHoliday: true },
  { name: "International Women's Day", nameNepali: "अन्तर्राष्ट्रिय नारी दिवस", bsYear: 2082, bsMonth: 11, bsDay: 24, category: "National", isPublicHoliday: false },

  // ── Chaitra (month 12) ──
  { name: "Ram Navami", nameNepali: "राम नवमी", bsYear: 2082, bsMonth: 12, bsDay: 13, category: "Religious", isPublicHoliday: false },

  // ══════════════════════════════════════════════════════════════
  // 2083 BS (2026-27 AD)
  // Sources: ashesh.com.np, drikpanchang.com, hamropatro.com
  // ══════════════════════════════════════════════════════════════

  // ── Baisakh (month 1) ──
  { name: "Nepali New Year", nameNepali: "नयाँ वर्ष", bsYear: 2083, bsMonth: 1, bsDay: 1, category: "National", isPublicHoliday: true },
  { name: "Loktantra Diwas", nameNepali: "लोकतन्त्र दिवस", bsYear: 2083, bsMonth: 1, bsDay: 11, category: "National", isPublicHoliday: true },
  { name: "International Labour Day", nameNepali: "मजदुर दिवस", bsYear: 2083, bsMonth: 1, bsDay: 18, category: "National", isPublicHoliday: true },
  { name: "Buddha Jayanti", nameNepali: "बुद्ध जयन्ती", bsYear: 2083, bsMonth: 1, bsDay: 18, category: "Religious", isPublicHoliday: true },

  // ── Jestha (month 2) ──
  { name: "Republic Day", nameNepali: "गणतन्त्र दिवस", bsYear: 2083, bsMonth: 2, bsDay: 15, category: "National", isPublicHoliday: true },

  // ── Bhadra (month 5) ──
  { name: "Janai Purnima", nameNepali: "जनै पूर्णिमा", bsYear: 2083, bsMonth: 5, bsDay: 12, category: "Religious", isPublicHoliday: true },
  { name: "Gai Jatra", nameNepali: "गाई जात्रा", bsYear: 2083, bsMonth: 5, bsDay: 13, category: "Cultural", isPublicHoliday: false },
  { name: "Krishna Janmashtami", nameNepali: "कृष्ण जन्माष्टमी", bsYear: 2083, bsMonth: 5, bsDay: 19, category: "Religious", isPublicHoliday: true },
  { name: "Teej", nameNepali: "तीज", bsYear: 2083, bsMonth: 5, bsDay: 29, category: "Religious", isPublicHoliday: true },

  // ── Ashwin / Ashoj (month 6) ──
  { name: "Constitution Day", nameNepali: "संविधान दिवस", bsYear: 2083, bsMonth: 6, bsDay: 3, category: "National", isPublicHoliday: true },
  { name: "Ghatasthapana", nameNepali: "घटस्थापना", bsYear: 2083, bsMonth: 6, bsDay: 25, category: "Religious", isPublicHoliday: true },

  // ── Kartik (month 7) ──
  { name: "Phulpati", nameNepali: "फूलपाती", bsYear: 2083, bsMonth: 7, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Maha Ashtami", nameNepali: "महाअष्टमी", bsYear: 2083, bsMonth: 7, bsDay: 2, category: "Religious", isPublicHoliday: true },
  { name: "Maha Navami", nameNepali: "महानवमी", bsYear: 2083, bsMonth: 7, bsDay: 3, category: "Religious", isPublicHoliday: true },
  { name: "Vijaya Dashami", nameNepali: "विजया दशमी", bsYear: 2083, bsMonth: 7, bsDay: 4, category: "Religious", isPublicHoliday: true },
  { name: "Laxmi Puja (Tihar)", nameNepali: "लक्ष्मी पूजा", bsYear: 2083, bsMonth: 7, bsDay: 22, category: "Religious", isPublicHoliday: true },
  { name: "Bhai Tika", nameNepali: "भाइटीका", bsYear: 2083, bsMonth: 7, bsDay: 25, category: "Religious", isPublicHoliday: true },
  { name: "Chhath Parva", nameNepali: "छठ पर्व", bsYear: 2083, bsMonth: 7, bsDay: 29, category: "Religious", isPublicHoliday: true },

  // ── Magh (month 10) ──
  { name: "Maghe Sankranti", nameNepali: "माघे संक्रान्ति", bsYear: 2083, bsMonth: 10, bsDay: 1, category: "Religious", isPublicHoliday: true },
  { name: "Sonam Lhosar", nameNepali: "सोनाम लोसार", bsYear: 2083, bsMonth: 10, bsDay: 24, category: "Cultural", isPublicHoliday: true },
  { name: "Saraswati Puja", nameNepali: "सरस्वती पूजा", bsYear: 2083, bsMonth: 10, bsDay: 28, category: "Religious", isPublicHoliday: false },

  // ── Falgun (month 11) ──
  { name: "Prajatantra Diwas", nameNepali: "प्रजातन्त्र दिवस", bsYear: 2083, bsMonth: 11, bsDay: 7, category: "National", isPublicHoliday: true },
  { name: "Maha Shivaratri", nameNepali: "महाशिवरात्री", bsYear: 2083, bsMonth: 11, bsDay: 22, category: "Religious", isPublicHoliday: true },
  { name: "Holi (Hill)", nameNepali: "होली (पहाड)", bsYear: 2083, bsMonth: 11, bsDay: 29, category: "Religious", isPublicHoliday: true },

  // ── Chaitra (month 12) ──
  { name: "Holi (Terai)", nameNepali: "होली (तराई)", bsYear: 2083, bsMonth: 12, bsDay: 1, category: "Religious", isPublicHoliday: true },

  // ══════════════════════════════════════════════════════════════
  // 2084 BS (2027-28 AD)
  // Sources: ashesh.com.np, drikpanchang.com
  // ══════════════════════════════════════════════════════════════

  // ── Baisakh (month 1) ──
  { name: "Nepali New Year", nameNepali: "नयाँ वर्ष", bsYear: 2084, bsMonth: 1, bsDay: 1, category: "National", isPublicHoliday: true },
  { name: "Loktantra Diwas", nameNepali: "लोकतन्त्र दिवस", bsYear: 2084, bsMonth: 1, bsDay: 11, category: "National", isPublicHoliday: true },
  { name: "Buddha Jayanti", nameNepali: "बुद्ध जयन्ती", bsYear: 2084, bsMonth: 2, bsDay: 7, category: "Religious", isPublicHoliday: true },

  // ── Jestha (month 2) ──
  { name: "Republic Day", nameNepali: "गणतन्त्र दिवस", bsYear: 2084, bsMonth: 2, bsDay: 15, category: "National", isPublicHoliday: true },

  // ── Ashwin (month 6) ──
  { name: "Vijaya Dashami", nameNepali: "विजया दशमी", bsYear: 2084, bsMonth: 6, bsDay: 23, category: "Religious", isPublicHoliday: true },

  // ── Kartik (month 7) ──
  { name: "Bhai Tika", nameNepali: "भाइटीका", bsYear: 2084, bsMonth: 7, bsDay: 16, category: "Religious", isPublicHoliday: true },

  // ── Magh (month 10) ──
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
