import { getDate, getDay, getDaysInMonth, parse, parseISO, startOfMonth } from "date-fns";

type Props = {
  date: string;
  className?: string;
}

export default function StaticCalendar({ date: dateStr, className }: Props) {
  const date = new Date(dateStr);
  const totalDays = getDaysInMonth(date);
  const firstDate = startOfMonth(date);
  const dayOfWeek = getDay(firstDate);
  const dayOfMonth = getDate(date);

  const daysOfPrevMonths = (dayOfWeek || 7) - 1;
  console.log(daysOfPrevMonths);

  return (
    <div className={`grid w-full max-w-[350px] ${className}`}>
      <div className="grid grid-cols-7 gap-1 justify-items-center">
        <div className="w-10 h-10 flex items-center justify-center font-semibold">T2</div>
        <div className="w-10 h-10 flex items-center justify-center font-semibold">T3</div>
        <div className="w-10 h-10 flex items-center justify-center font-semibold">T4</div>
        <div className="w-10 h-10 flex items-center justify-center font-semibold">T5</div>
        <div className="w-10 h-10 flex items-center justify-center font-semibold">T6</div>
        <div className="w-10 h-10 flex items-center justify-center font-semibold">T7</div>
        <div className="w-10 h-10 flex items-center justify-center font-semibold">CN</div>
      </div>
      <div className="grid grid-cols-7 gap-1 justify-items-center">
        {[...Array(daysOfPrevMonths)].map((item, index) => (
          <div key={`prev-${index}`} className="w-10 h-10 flex items-center justify-center"></div>
        ))}
        {[...Array(totalDays)].map((item, index) => (
          <div key={index} className={`w-10 h-10 flex items-center justify-center rounded-full ${index + 1 === dayOfMonth ? 'bg-rose-700 text-white' : ''}`}>
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}