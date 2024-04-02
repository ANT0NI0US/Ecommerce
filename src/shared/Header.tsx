import HeadText from "@/shared/HeadText";
import MotionDivContactUs from "./MotionDivContactUs";

interface Props {
  textHead: string;
}

const Header = ({ textHead }: Props) => {
  return (
    <MotionDivContactUs tailwindClass="text-center" y={-50}>
      <HeadText>{textHead}</HeadText>
    </MotionDivContactUs>
  );
};

export default Header;
