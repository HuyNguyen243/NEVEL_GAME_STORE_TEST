import viflag from "@/assets/images/vietnam.png";
import ukflag from "@/assets/images/united-states.png";
import blackTick from "@/assets/icons/black-tick.svg";
import whiteArrowDowTriangel from "@/assets/icons/white-arrow-down-triangel.svg";
import blackArrowDowTriangel from "@/assets/icons/black-arrow-down-triangel.svg";
import { Dropdown, MenuProps, Space } from "antd";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { LANGUAGE_TYPES } from "@/shared/types/languageTypes";
import { language } from "@/cores/utils/language";

const SelectLanguage = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLanguage] = useState(i18n.language);

  const onChangeLanguage = (type: string) => {
    i18n.changeLanguage(type);
    setLanguage(type);
    language.set(type);
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <div
          className="flex items-center justify-start"
          onClick={() => {
            onChangeLanguage(LANGUAGE_TYPES.VI);
          }}
        >
          <div className="w-5 h-full flex items-start justify-start mr-2">
            {lang === LANGUAGE_TYPES.VI && <img src={blackTick} alt="" />}
          </div>
          <img src={viflag} alt="" />
          <span className="ml-2">{t("TECH.FLAG.VN")}</span>
        </div>
      ),
      key: LANGUAGE_TYPES.VI,
    },
    {
      label: (
        <div
          className="flex items-center justify-start"
          onClick={() => {
            onChangeLanguage(LANGUAGE_TYPES.EN);
          }}
        >
          <div className="w-5 h-full flex items-start justify-start mr-2">
            {lang === LANGUAGE_TYPES.EN && <img src={blackTick} alt="" />}
          </div>
          <img src={ukflag} alt="" />
          <span className="ml-2">{t("TECH.FLAG.UK")}</span>
        </div>
      ),
      key: LANGUAGE_TYPES.EN,
    },
  ];

  return (
    <div>
      <Dropdown menu={{ items }} trigger={["click"]}>
        <a onClick={(e) => e.preventDefault()} className=" cursor-pointer">
          <Space>
            <img src={lang === LANGUAGE_TYPES.EN ? ukflag : viflag} alt="" />
            <img
              src={whiteArrowDowTriangel}
              alt=""
              className="hidden md:block"
            />
            <img
              src={blackArrowDowTriangel}
              alt=""
              className="block md:hidden"
            />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default SelectLanguage;
