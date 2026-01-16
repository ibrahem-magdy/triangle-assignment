import { Skeleton } from "@/components/ui/skeleton";

const SessionsLoading = ({ dict }: { dict: any }) => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8 md:mb-[30px]">
          <p className="text-blue-600 font-bold text-sm mb-2">
            {dict.sessions.keepUpdated}
          </p>
          <h2 className="text-4xl md:text-4xl font-bold">
            {dict.sessions.upcomingSessions}
          </h2>
        </div>

        <Skeleton className="h-40 w-full mb-6  " />
        <Skeleton className="h-40 w-full  " />

        <div className="space-y-6">
          <div className="mb-8 md:mb-[30px] mt-[80px]">
            <p className="text-blue-600 font-bold text-sm mb-2">
              {dict.sessions.keepUpdated}
            </p>
            <h2 className="text-4xl md:text-4xl font-bold">
              {dict.sessions.previousSessions}
            </h2>
          </div>

          <Skeleton className="h-40 w-full mb-6  " />
          <Skeleton className="h-40 w-full  " />
        </div>
      </div>
    </section>
  );
};

export default SessionsLoading;
