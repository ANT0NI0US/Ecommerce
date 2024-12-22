import OurStory from "../components/OurStory";
import Incomes from "../components/Incomes";
import Stuff from "../components/Stuff";
import CommonSection from "@/ui/CommonSection";
import useHelmet from "@/hooks/useHelmet";

export default function About() {
  useHelmet("About");

  return (
    <>
      <CommonSection title="About" />
      {/* OUR STORY */}
      <OurStory />
      {/* OUR INCOMES */}
      <Incomes />
      {/* ALL STUFFS */}
      <Stuff />
    </>
  );
}
