import pinMap from "@/assets/images/pin-map.png";
import witch from "@/assets/images/witch.png";
import { useTranslation } from "react-i18next";
const OurGamesComponent = () => {
  const { t } = useTranslation("");
  return (
    <div className=" mt-16    flex-col">
      <div className="flex items-center justify-center relative">
        <img
          src={witch}
          alt=""
          className="absolute top-5 h-[300px] md:h-max animate-rotate-y animate-infinite animate-duration-[2500ms] animate-delay-100"
        />
        <img src={pinMap} alt="" className=" pt-68 md:pt-86" />
      </div>
      <div className="md:mt-24 mt-12 flex items-center flex-col">
        <h2 className=" font-second md:text-6xl  text-5xl font-bold text-center">
          {t("TECH.OUR")}
        </h2>
        <p className=" font-first text-md text-center text-tech-gray-100 md:w-[1000px] p-0 md:p-4 md:pt-12 pt-6 px-2 xl:px-0">
          {t("TECH.OUR.CONTENT")}
        </p>
      </div>
    </div>
  );
};

export default OurGamesComponent;
