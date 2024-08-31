import { useState, useEffect } from "react";

interface clockListProps {
  clock: {
    label: string;
  };
}

export default function ClockList({ clock }: clockListProps) {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  let interval: NodeJS.Timeout;

  const padWithZero = (time: number) => {
    return time < 10 ? `0${time}` : time;
  };

  const countDown = () => {
    const destination = new Date("jun 10 , 2025").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = destination - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <div className="flex w-[60px] flex-col gap-1">
      <div className="flexCenter h-[60px] rounded-md bg-light-color text-main-color shadow-xl drop-shadow-sm dark:bg-main-color dark:text-light-color">
        <h1 className="text-sm sm:text-lg">
          {clock.label === "days"
            ? padWithZero(days ?? 0)
            : clock.label === "hours"
              ? padWithZero(hours ?? 0)
              : clock.label === "minutes"
                ? padWithZero(minutes ?? 0)
                : padWithZero(seconds ?? 0)}
        </h1>
      </div>
      <h5 className="text-center text-xs text-main-color dark:text-light-color">
        {clock.label.charAt(0).toUpperCase() + clock.label.slice(1)}
      </h5>
    </div>
  );
}
