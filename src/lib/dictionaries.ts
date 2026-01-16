import "server-only";

import enDict from "@/dictionaries/en.json";
import arDict from "@/dictionaries/ar.json";

type Locale = "en" | "ar";

const dictionaries = {
  en: enDict,
  ar: arDict,
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale] || dictionaries.en;
};
