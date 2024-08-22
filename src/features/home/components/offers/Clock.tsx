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

export default function Clock() {
  return (
    <div className="flexCenter my-[16px] flex flex-wrap gap-2 sm:gap-5 md:justify-start">
      {allClocks.map((clock, index) => (
        <ClockList key={index} clock={clock} />
      ))}
    </div>
  );
}
