import ArrowCycle from "@/assets/icons/black-arrow-down-cycle.svg";
import { useCallback, useEffect, useState } from "react";
const ButtonScroll = () => {
  const [isScrollToTop, setIsScrollToTop] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY === 0 && !isScrollToTop) {
      setIsScrollToTop(true);
    }
    if (window.scrollY > 0 && isScrollToTop) {
      setIsScrollToTop(false);
    }
  }, [isScrollToTop]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="fixed md:w-15 md:h-15 w-10 h-10 drop-shadow-2xl rounded-full flex items-center justify-around top-[50%] right-4 bg-white cursor-pointer hover:bg-indigo-50 hover:transition-shadow z-50"
      onClick={handleOnClick}
    >
      <img
        src={ArrowCycle}
        alt=""
        className={`${isScrollToTop ? "rotate-0" : "rotate-180"} w-6 md:w-8`}
      />
    </div>
  );
};

export default ButtonScroll;
