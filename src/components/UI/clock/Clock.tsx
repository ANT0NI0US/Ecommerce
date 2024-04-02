import ClockList from "./ClockList";
import { clockProps } from "@/shared/types";

const allClocks: Array<clockProps> = [
  {
    label: "days",
  },
  {
    label: "hours",
  },
  {
    label: "minutes",
  },
  {
    label: "seconds",
  },
];

const Clock = () => {
  return (
    <div className="flexCenter flex-wrap gap-2 sm:gap-5 my-[16px] mx-[10px]">
      {allClocks.map((clock, index) => (
        <ClockList
          key={index}
          clock={clock}
          index={index}
          allClockLength={allClocks.length}
        />
      ))}
    </div>
  );
};

export default Clock;
