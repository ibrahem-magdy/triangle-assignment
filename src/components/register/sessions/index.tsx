import { getSessions } from "@/lib/api/sessions";
import SessionCard from "./session-card";
import moment from "moment";
import { Locale } from "@/i18n.config";
import SessionsError from "./sessions-error";

const formatSessionDate = (start: string, end: string) => {
  const startMoment = moment(start);
  const endMoment = moment(end);

  const date = startMoment.format("DD MMM, YYYY").toUpperCase();
  const time = `${startMoment.format("hh:mm")} TO ${endMoment.format(
    "hh:mm A"
  )}`.toUpperCase();

  return { date, time };
};

const Sessions = async ({ lang, dict }: { lang: Locale; dict: any }) => {
  type Session = {
    start: string;
    end: string;
    title: string;
  };

  let upcoming: Session[] = [];
  let previous: Session[] = [];
  let error = false;

  try {
    const data = await getSessions(lang);

    upcoming = data.sessions?.upcoming || [];
    previous = data.sessions?.previous || [];
  } catch (error) {
    console.error("Error fetching sessions:", error);
    error = true;
  }

  if (error) {
    return <SessionsError />;
  }

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-[30px]">
          <p className="text-blue-600 font-bold text-xs sm:text-sm mb-2">
            {dict.sessions.keepUpdated}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {dict.sessions.upcomingSessions}
          </h2>
        </div>

        <div className="space-y-6">
          {upcoming.map((session: Session, index: number) => {
            const { date, time } = formatSessionDate(
              session.start,
              session.end
            );
            return (
              <SessionCard
                key={index}
                date={date}
                time={time}
                title={session.title}
                isPrevious={false}
                dict={dict}
              />
            );
          })}

          <div className="mb-8 md:mb-[30px] mt-[80px]">
            <p className="text-blue-600 font-bold text-xs sm:text-sm mb-2">
              {dict.sessions.keepUpdated}
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              {dict.sessions.previousSessions}
            </h2>
          </div>

          {/* Previous Sessions List */}
          {previous.map((session: Session, index: number) => {
            const { date, time } = formatSessionDate(
              session.start,
              session.end
            );
            return (
              <SessionCard
                key={index}
                date={date}
                time={time}
                title={session.title}
                isPrevious={true}
                dict={dict}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Sessions;
