import { PiCalendarDotsLight } from "react-icons/pi";

const SessionCard = ({
  date,
  time,
  title,
  isPrevious = false,
  dict,
}: {
  date: string;
  time: string;
  title: string;
  isPrevious?: boolean;
  dict?: any;
}) => {
  return (
    <div className="bg-[#EFF1F57A] p-4 sm:p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 sm:gap-6">
      <div className="w-full md:w-[52%]">
        <div className="flex items-center gap-2 mb-2 sm:mb-[10px]">
          <PiCalendarDotsLight
            className={`w-4 h-4 sm:w-5 sm:h-5 ${
              isPrevious ? "text-[#6BCE97]" : "text-[#0048FF]"
            }`}
          />
          <p
            className={`font-bold text-xs sm:text-sm ${
              isPrevious ? "text-[#6BCE97]" : "text-[#0048FF]"
            }`}
          >
            {date} - {time}
          </p>
        </div>

        <h3 className="text-lg sm:text-xl font-bold text-black leading-tight">
          {title}
        </h3>
      </div>

      <div className="w-full md:w-auto">
        <button
          className={`w-full md:w-auto px-6 sm:px-8 py-3 sm:py-4 text-white font-bold text-xs sm:text-sm transition-colors ${
            isPrevious
              ? "bg-[#6BCE97] hover:bg-[#57B884]"
              : "bg-[#D64D32] hover:bg-[#B43B27]"
          }`}
        >
          {isPrevious ? dict.sessions.getRecording : dict.sessions.registerNow}
        </button>
      </div>
    </div>
  );
};

export default SessionCard;
