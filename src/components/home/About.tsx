import { countTime } from "@/cores/utils/timeExpires";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import blackArrowRight from "@/assets/icons/black-arrow-right.svg";
import { useEffect, useState } from "react";
import fairy from "@/assets/images/fairy.png";

const AboutComponent = () => {
  const { t } = useTranslation();
  const [time, setTime] = useState({
    days: countTime.timedefault,
    hours: countTime.timedefault,
    minutes: countTime.timedefault,
    seconds: countTime.timedefault,
  });
  const date = new Date("Sun Feb 23 2025 10:40:17 GMT+0700 (Indochina Time)");

  useEffect(() => {
    const countDownTimes = setInterval(() => {
      const countDownTime = countTime.Down(date);
      setTime(countDownTime);

      if (
        time.days === countTime.timedefault &&
        time.hours === countTime.timedefault &&
        time.minutes === countTime.timedefault &&
        time.seconds === countTime.timedefault
      )
        clearInterval(countDownTimes);
    }, 1000);

    return () => {
      clearInterval(countDownTimes);
    };
  }, [date]);

  return (
    <div>
      <div className="md:bg-[url(@/assets/images/about-bg.png)] bg-[url(@/assets/images/bg-about-mobi.png)] bg-no-repeat bg-center bg-cover  h-[1200px]   relative">
        <div className="h-full flex items-center justify-center  px-4 md:px-0 ">
          <div className="flex items-center flex-col pb-4 z-30">
            <p className="text-white font-second text-[40px] md:text-[80px] font-bold text-center">
              {t("TECH.ABOUT.TEXT")}
            </p>
            <div className=" w-full md:w-[756px]  bg-white rounded-xl md:h-[149px] h-[118px] mt-8 px-2">
              <ul className="flex items-center justify-center h-full ">
                <li className="text-black  text-center relative w-1/4 ">
                  <p className=" text-4xl md:text-6xl font-bold font-second ">
                    {time.days}
                  </p>
                  <p className="text-md font-bold font-first pt-2 md:pt-4 ">
                    {t("TECH.DAYS")}
                  </p>
                </li>
                <li className="text-black font-second text-4xl md:text-6xl ">
                  :
                </li>
                <li className="text-black  text-center relative w-1/4">
                  <p className="text-4xl md:text-6xl font-bold font-second ">
                    {time.hours}
                  </p>
                  <p className="text-md font-bold font-first pt-2 md:pt-4 ">
                    {t("TECH.HOURS")}
                  </p>
                </li>
                <li className="text-black font-second text-4xl md:text-6xl ">
                  :
                </li>
                <li className="text-black  text-center relative w-1/4">
                  <p className="text-4xl md:text-6xl font-bold font-second ">
                    {time.minutes}
                  </p>
                  <p className="text-md font-bold font-first pt-2 md:pt-4 ">
                    {t("TECH.MINUTES")}
                  </p>
                </li>
                <li className="text-black font-second text-4xl md:text-6xl ">
                  :
                </li>
                <li className="text-black  text-center relative w-1/4">
                  <p className="text-4xl md:text-6xl font-bold font-second ">
                    {time.seconds}
                  </p>
                  <p className="text-md font-bold font-first pt-2 md:pt-4 ">
                    {t("TECH.SECONDS")}
                  </p>
                </li>
              </ul>
            </div>

            <p className="text-center text-white text-xl md:mt-[97px] mt-[40px] max-w-[756px] font-first">
              {t("TECH.ABOUT.SIGN_UP_GET_LETTER")}
            </p>
            <div className="md:px-12 w-full mt-4">
              <Input
                type="email"
                className="h-[50px] w-full"
                placeholder={t("TECH.EMAIL.PLACEHOLDER")}
                suffix={
                  <>
                    <img src={blackArrowRight} alt="" />
                  </>
                }
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-[-50px]  md:left-0 z-1  md:translate-x-0 hidden md:block">
          <img src={fairy} alt="" className="" />
        </div>
      </div>

      <div className="mt-[-370px] w-full relative h-[351px] md:hidden flex items-center justify-center">
        <img src={fairy} alt="" className="" width={351} />
      </div>
    </div>
  );
};

export default AboutComponent;
