import { useState } from "react";
import { LuSunMoon } from "react-icons/lu";
import { FaMoon } from "react-icons/fa";

export default function ScrollToTopButtons(): JSX.Element {
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

// import { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";

// export default function ScrollToTopButtons(): JSX.Element {
//   const [showScrollButton, setShowScrollButton] = useState<boolean>(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 100) {
//         setShowScrollButton(true);
//       } else {
//         setShowScrollButton(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const scrollToTop = (): void => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <div
//       onClick={scrollToTop}
//       className={`${
//         showScrollButton ? "bounce-infinite" : "hidden"
//       } fixed bottom-5 right-5 flex items-center justify-center rounded-xl border-[2px] bg-white p-3`}
//     >
//       <button>
//         <FaArrowUp />
//       </button>
//     </div>
//   );
// }
