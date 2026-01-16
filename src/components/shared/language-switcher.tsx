"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LanguageSwitcher = ({
  currentLang,
  label,
}: {
  currentLang: string;
  label: string;
}) => {
  const pathname = usePathname();
  const isArabic = currentLang === "ar";
  const switchLang = isArabic ? "en" : "ar";

  const pathWithoutLocale = pathname.replace(`/${currentLang}`, "") || "";
  const switchUrl = `/${switchLang}${pathWithoutLocale}`;

  const fontClass = isArabic ? "font-english" : "font-arabic";

  return (
    <Link href={switchUrl}>
      <button
        className={`icon-card text-sm bg-[#0347FF] text-white font-semibold hover:bg-blue-700 transition-colors ${fontClass}`}
      >
        {label}
      </button>
    </Link>
  );
};

export default LanguageSwitcher;
