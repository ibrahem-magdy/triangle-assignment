import { Search, Menu } from "lucide-react";
import Image from "next/image";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import Link from "next/link";
import { LanguageSwitcher } from "../shared";

export default async function Header({ lang }: { lang: Locale }) {
  const dict = await getDictionary(lang);

  return (
    <header className="bg-white border-b border-[#E5E5E5] py-4">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="relative h-18 w-30 md:w-42">
          <Link href={`/${lang}`}>
            <Image
              src="/assets/images/logo.png"
              alt="HUB71 Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>
        </div>

        <div className="flex items-center gap-[15px]">
          <div className="hidden md:block relative h-14 w-36">
            <Image
              src="/assets/images/impact.png"
              alt="impact report"
              fill
              className={`object-contain ${
                lang === "ar" ? "object-left" : "object-right"
              }`}
            />
          </div>

          <LanguageSwitcher
            currentLang={lang}
            label={dict.header.switch_language}
          />

          <button
            className="icon-card hidden md:flex
                       hover:bg-gray-50 transition-colors 
                       shadow-[0_0_20px_3px_rgba(0,0,0,0.1)]"
          >
            <Search className="w-5 h-5 text-gray-700" />
          </button>

          <button
            className="icon-card hidden md:flex
                       hover:bg-gray-50 transition-colors 
                       shadow-[0_0_20px_3px_rgba(0,0,0,0.1)]"
          >
            <Image
              src="/assets/images/accessability.svg"
              alt="icon"
              width={20}
              height={20}
            />
          </button>

          <button className="icon-card bg-[#0347FF] hover:bg-blue-700 transition-colors">
            <Menu className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}
