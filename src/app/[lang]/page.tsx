import Sessions from "@/components/register/sessions";
import RegistrationForm from "@/components/register/registeration-form";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import { Suspense } from "react";
import SessionsLoading from "@/components/register/sessions/sessions-loading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Registration - HUB71",
  description: "HUB71 Platform",
};

const Page = async ({ params }: { params: Promise<{ lang: Locale }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[4fr_3fr] gap-0 lg:gap-10 mt-[0] md:mt-[50px]">
      <div className="bg-white rounded-lg py-4">
        <Suspense fallback={<SessionsLoading dict={dict} />}>
          <Sessions lang={lang} dict={dict} />
        </Suspense>
      </div>
      <div className="bg-white rounded-lg py-4">
        <RegistrationForm dict={dict} lang={lang} />
      </div>
    </div>
  );
};

export default Page;
