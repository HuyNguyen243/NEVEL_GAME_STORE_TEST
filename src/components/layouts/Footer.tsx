import whiteLogo from "@/assets/images/white-logo.png";
import twitter from "@/assets/icons/twiter.svg";
import fb from "@/assets/icons/fb.svg";
import linkin from "@/assets/icons/linkin.svg";
import address from "@/assets/icons/address.svg";
import mobile from "@/assets/icons/mobile.svg";
import { useTranslation } from "react-i18next";
import { Input } from "antd";
import whiteArrowRight from "@/assets/icons/white-arrow-right.svg";
import { SECTION_ID } from "@/shared/types/header";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div
      className="flex xl:flex-row flex-col bg-[url(@/assets/images/footer-bg.png)] bg-no-repeat bg-center bg-cover xl:h-[478px] justify-between px-4 xl:px-20 2xl:px-56 py-28"
      id={SECTION_ID.CONTACT_US}
    >
      <div className="2xl:w-[44%] xl:w-[33%] w-full flex items-center justify-center flex-col xl:block">
        <img src={whiteLogo} alt="logo" className="w-36" />
        <div className="w-[144px]">
          <div className="flex items-center justify-between mt-6">
            <img
              src={twitter}
              alt="twitter"
              className="w-8 h-8 cursor-pointer"
            />
            <img src={fb} alt="facebook" className="w-8 h-8 cursor-pointer" />
            <img src={linkin} alt="linkin" className="w-8 h-8 cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="2xl:w-[28%] xl:w-[33%] w-full flex justify-center flex-col xl:block">
        <h3 className="text-white font-first text-2xl font-bold mt-16 xl:mt-0">
          {t("TECH.ADDRESS")}
        </h3>
        <div className="flex mt-12  items-start">
          <img src={address} alt="twitter" className="w-8 h-8 " />
          <div className="ml-2">
            <p className="text-white text-sm font-first mb-4">
              Valletta Buildings, South Street, Valletta - VLT 1103 Malta, US
            </p>
            <p className="text-white text-sm font-first">
              20 Phan Dang Luu street, Hai Chau District, Danang city, Vietnam
            </p>
          </div>
        </div>
        <div className="flex mt-12 items-center">
          <img src={mobile} alt="twitter" className="w-8 h-8 " />
          <div className="ml-2">
            <p className="text-white text-sm font-first">
              (+1) 555-0108-000 or (+236) 555-0108
            </p>
          </div>
        </div>
      </div>
      <div className="2xl:w-[28%] xl:w-[33%] w-full flex mt-8 xl:mt-0 justify-center flex-col xl:block">
        <h3 className="text-white font-first text-2xl font-bold">
          {t("TECH.SUBCRIBE")}
        </h3>
        <p className="text-white text-sm font-first mt-12">
          {t("TECH.SUBCRIBE.CONTENT")}
        </p>
        <Input
          type="email"
          className="h-[50px] w-full !bg-transparent !text-white mt-4 input-transparent"
          placeholder={t("TECH.EMAIL.PLACEHOLDER")}
          suffix={
            <>
              <img src={whiteArrowRight} alt="" />
            </>
          }
        />
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
