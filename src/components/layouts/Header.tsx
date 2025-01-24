import { MutableRefObject, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import whiteLogo from "@/assets/images/white-logo.png";
import SelectLanguage from "../SelectLanguage";
import { Button, Drawer, DrawerProps } from "antd";
import whiteMenu from "@/assets/icons/white-menu.svg";
import blackX from "@/assets/icons/black-x.svg";
import { SECTION_ID } from "@/shared/types/header";
const Header = () => {
  const headerRef: MutableRefObject<null | HTMLDivElement> = useRef(null);
  const [open, setOpen] = useState(false);
  const [placement] = useState<DrawerProps["placement"]>("right");
  const { t } = useTranslation();

  const navBar = useMemo(() => {
    return [
      { label: t("TECH.HEADER.ABOUT_US"), href: SECTION_ID.ABOUT_US },
      { label: t("TECH.HEADER.GAMES"), href: SECTION_ID.GAMES },
      { label: t("TECH.HEADER.PARTNERS"), href: SECTION_ID.PARTNERS },
      { label: t("TECH.HEADER.CONTACT_US"), href: SECTION_ID.CONTACT_US },
    ];
  }, [t]);

  const onClose = () => {
    setOpen(false);
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClickNavItem = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <header
      id="navbar"
      className=" absolute left-0 right-0  top-0 w-full transition  duration-200 h-16 items-center justify-between  md:px-[79px] px-4 flex z-40"
      ref={headerRef}
    >
      <img src={whiteLogo} alt="logo" className=" md:w-24 w-16 " />
      <ul className="md:flex hidden items-center ">
        {navBar.map((item, index) => {
          return (
            <li
              key={index}
              className="cursor-pointer hover:underline text-white px-5"
              onClick={() => onClickNavItem(item.href)}
            >
              {item.label}
            </li>
          );
        })}
        <li className="pl-5">
          <SelectLanguage />
        </li>
      </ul>

      {/* MENU MOBILE */}
      <div className="flex items-center md:hidden ">
        <Button type="text" onClick={showDrawer} className="h-max">
          <img src={whiteMenu} alt="" />
        </Button>
        <Drawer
          title=""
          placement={placement}
          closable={false}
          onClose={onClose}
          open={open}
          key={placement}
          width={"100%"}
        >
          <div className="flex items-center justify-between">
            <div className="rounded-md bg-tech-gray-200 w-max border-[1px] px-[5px] flex items-center border-tech-gray-300">
              <SelectLanguage />
            </div>
            <Button type="text" onClick={onClose}>
              <img src={blackX} alt="" />
            </Button>
          </div>

          <ul className=" items-center flex-col">
            {navBar.map((item, index) => {
              return (
                <li
                  key={index}
                  className="cursor-pointer text-black text-center font-bold text-xl px-5 border-b-[1px] border-tech-gray-400 py-8 "
                  onClick={() => onClickNavItem(item.href)}
                >
                  {item.label}
                </li>
              );
            })}
          </ul>
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
