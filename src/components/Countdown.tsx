import { differenceInBusinessDays, differenceInSeconds, parse, parseISO } from "date-fns";
import { useEffect, useRef } from "react";

function extractSeconds(totalSeconds: number) {
  const totalMinutes = Math.floor(totalSeconds / 60);
  const totalHours = Math.floor(totalMinutes / 60);

  const seconds = totalSeconds % 60;
  const minutes = totalMinutes % 60;
  const hours = totalHours % 24;
  const days =  Math.floor(totalHours / 24)

  return { d: days, h: hours, m: minutes, s: seconds };
}

type Props = {
  date: string;
}

export default function Countdown({ date: dateStr }: Props) {
  const date = parseISO(dateStr);
  console.log(date);
  const now = new Date();
  console.log(now);

  const dayRef = useRef<HTMLSpanElement>(null);
  const hourRef = useRef<HTMLSpanElement>(null);
  const minRef = useRef<HTMLSpanElement>(null);
  const secRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = extractSeconds(differenceInSeconds(date, now));
      dayRef.current?.style.setProperty('--value', diff.d + '');
      hourRef.current?.style.setProperty('--value', diff.h + '');
      minRef.current?.style.setProperty('--value', diff.m + '');
      secRef.current?.style.setProperty('--value', diff.s + '');
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="grid grid-flow-col gap-5 text-center w-full">
      <div className="flex flex-col justify-center items-center">
        <span className="countdown font-mono text-3xl">
          <span ref={dayRef} style={{ "--value": 0 }}></span>
        </span>
        ngày
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="countdown font-mono text-3xl">
          <span ref={hourRef} style={{ "--value": 0 }}></span>
        </span>
        giờ
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="countdown font-mono text-3xl">
          <span ref={minRef} style={{ "--value": 0 }}></span>
        </span>
        phút
      </div>
      <div className="flex flex-col justify-center items-center">
        <span className="countdown font-mono text-3xl">
          <span ref={secRef} style={{ "--value": 0 }}></span>
        </span>
        giây
      </div>
    </div>
  );
}