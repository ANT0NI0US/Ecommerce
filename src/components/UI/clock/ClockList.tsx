import { useState, useEffect } from "react";

const clockLabel = "text-white text-sm sm:text-lg";
const clockValue = "text-white text-base sm:text-xl";
const clockContainer = "flex items-center gap-5";

interface clockListProps {
  clock: {
    label: string;
  };
  index: number;
  allClockLength: number;
}

const ClockList = ({ clock, index, allClockLength }: clockListProps) => {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  let interval: ReturnType<typeof setTimeout>;

  const countDown = () => {
    const destination = new Date("jun 10 , 2024").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = destination - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
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
    <div className={clockContainer}>
      <div>
        <h1 className={clockLabel}>{eval(clock.label)}</h1>
        <h5 className={clockValue}>
          {clock.label.charAt(0).toUpperCase() + clock.label.slice(1)}
        </h5>
      </div>
      {index !== allClockLength - 1 && <span className={clockLabel}>:</span>}
    </div>
  );
};

export default ClockList;
