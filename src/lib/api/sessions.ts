import { Locale } from "@/i18n.config";

export const getSessions = async (lang: Locale) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/sessions`,
    {
      next: { revalidate: 3600 }, // 1 hour

      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch sessions: ${response.status}`);
  }

  return response.json();
};
