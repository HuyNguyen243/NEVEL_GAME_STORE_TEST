import { useTranslation } from "react-i18next";
import whiteBtnArrowLeft from "@/assets/icons/white-btn-arrow-left.svg";
import whiteBtnArrowRight from "@/assets/icons/white-btn-arrow-right.svg";
import ea from "@/assets/images/partners/ea.png";
import gameShow from "@/assets/images/partners/game-show.png";
import game from "@/assets/images/partners/game.png";
import powerUp from "@/assets/images/partners/power-up.png";
import disney from "@/assets/images/partners/walt-disney.png";
import Carousel from "react-multi-carousel";
import { Button } from "antd";
import { useRef } from "react";
import { SECTION_ID } from "@/shared/types/header";

const PartnersComponents = () => {
  const { t } = useTranslation();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const carouselRef: React.MutableRefObject<any> = useRef(null);
  const partners = [
    { img: ea },
    { img: game },
    { img: powerUp },
    { img: disney },
    { img: gameShow },
  ];

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <div
      className="bg-tech-gray-200 md:h-[478px] h-full md:py-30 py-6"
      id={SECTION_ID.PARTNERS}
    >
      <p className="text-center font-second text-5xl font-bold md:pb-10 pb-8">
        {t("TECH.OUR_PARTNERS")}
      </p>

      <div className="xl:mx-50 mx-6  flex relative pb-8">
        <div className="absolute top-2 md:top-[30px] z-10">
          <Button type="text" onClick={handlePrev}>
            <img src={whiteBtnArrowLeft} alt="" />
          </Button>
        </div>
        <Carousel
          ref={carouselRef}
          additionalTransfrom={1}
          arrows={false}
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          className="w-full"
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={{
            desktop: {
              breakpoint: {
                max: 3000,
                min: 1024,
              },
              items: 4,
              partialVisibilityGutter: 40,
            },
            mobile: {
              breakpoint: {
                max: 464,
                min: 0,
              },
              items: 2,
              partialVisibilityGutter: 30,
            },
            tablet: {
              breakpoint: {
                max: 1024,
                min: 464,
              },
              items: 3,
              partialVisibilityGutter: 30,
            },
          }}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          {partners.map((partner, index) => {
            return (
              <div key={index} className="w-40 md:w-50 xl:w-[260px]">
                <img
                  className=" mx-auto"
                  src={partner.img}
                  alt=""
                  width={260}
                />
              </div>
            );
          })}
        </Carousel>
        <div className="absolute right-0 top-2 md:top-[30px]">
          <Button type="text" onClick={handleNext}>
            <img src={whiteBtnArrowRight} alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PartnersComponents;
