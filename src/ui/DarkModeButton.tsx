import { useState } from "react";
import { LuSunMoon } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

export default function DarkModeButton(): JSX.Element {
  const [dark, setDark] = useState(false);

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };
  return (
    <div
      title={`${dark ? "light mode" : "dark mode"} `}
      className={`flexCenter fixed bottom-2 right-2 rounded-full bg-main-color p-2  dark:bg-light-color`}
    >
      <button onClick={() => darkModeHandler()}>
        {dark ? (
          <LuSunMoon size={30} color="#FDB813" />
        ) : (
          <FaMoon size={30} color="#F6F1D5" />
        )}
      </button>
    </div>
  );
}
