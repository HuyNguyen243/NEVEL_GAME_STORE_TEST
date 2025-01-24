import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import calendarTick from "@/assets/icons/calendar-tick.svg";
import penTool from "@/assets/icons/pen-tool.svg";
import people from "@/assets/icons/people.svg";
import { SECTION_ID } from "@/shared/types/header";
const AboutUsComponent = () => {
  const { t } = useTranslation();
  const abouts = [
    {
      title: t("TECH.HOUR"),
      content: t("TECH.HOUR.CONTENT"),
      icon: calendarTick,
    },
    {
      title: t("TECH.DESIGN"),
      content: t("TECH.DESIGN.CONTENT"),
      icon: penTool,
    },
    { title: t("TECH.TEAM"), content: t("TECH.TEAM.CONTENT"), icon: people },
  ];

  return (
    <div
      className="flex flex-col md:flex-row mt-16 md:px-20 xl:px-80 z-20 "
      id={SECTION_ID.ABOUT_US}
    >
      <div className="md:mr-6 w-full md:w-1/2 px-4 md:px-0">
        <h2 className="font-bold md:text-6xl text-4xl font-second">
          {t("TECH.HEADER.ABOUT_US")}
        </h2>
        <p className="mt-6  text-tech-gray-100 text-sm font-first">
          {t("TECH.ABOUT.CONTENT")}
        </p>
        <div className="flex md:flex-col flex-row justify-between">
          <div className=" pt-14 w-1/2">
            <div>
              <CountUp
                duration={5}
                end={600}
                className="text-5xl md:text-8xl text-tech-blue-100 font-bold"
              />
              <span className="text-3xl md:text-2xl text-tech-blue-100 font-bold">
                M
              </span>
              <span className="text-6xl md:text-8xl text-tech-blue-100 font-bold">
                +
              </span>
            </div>
            <p className="text-3xl font-bold font-first">{t("TECH.USERS")}</p>
          </div>
          <div className=" pt-14 w-1/2">
            <div>
              <CountUp
                duration={5}
                end={135}
                className="text-5xl md:text-8xl text-tech-blue-100 font-bold"
              />
              <span className="text-6xl md:text-8xl text-tech-blue-100 font-bold">
                +
              </span>
            </div>
            <p className="text-3xl font-bold font-first">
              {t("TECH.HEADER.GAMES")}
            </p>
          </div>
        </div>
      </div>
      <ul className="md:ml-6 bg-tech-gray-400 w-full md:w-1/2 flex flex-col items-center justify-center">
        {abouts?.map((item, index) => {
          return (
            <li key={index} className="py-8 md:px-16 px-8 flex w-full">
              <div className="bg-tech-blue-sky-100 rounded-full h-12 w-12 min-w-12 p-2 flex items-center justify-center">
                <img className="" src={item.icon} alt={item.title} />
              </div>
              <div className="ml-4">
                <h3 className=" text-2xl font-bold font-first">{item.title}</h3>
                <p className="text-sm font-first text-tech-gray-100">
                  {item.content}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AboutUsComponent;
