import { Swiper, SwiperSlide } from "swiper/react";
import { sliderSettings } from "../../../utils/common";
import { FeaturesData } from "../../../utils/common";
import { Card } from "antd";
import "swiper/css";
import { A11y, Pagination, Navigation, Scrollbar } from "swiper/modules";

import SwiperNav from "./Navigation";

const Features = () => {
  return (
    <div className="pt-6 px-24 max-sm:px-8">
      <div className="pt-12 pb-8">
        <h2 className="font-semibold text-5xl pb-10 w-full text-center">
          Features
        </h2>

        <div className="flex items-center ">
          <Swiper
            modules={[Scrollbar, Navigation, Pagination, A11y]}
            navigation
            scrollbar={{ draggable: true }}
            pagination={{ clickable: true }}
            className="pb-2"
            slidesPerView={sliderSettings.slidesPerView}
            breakpoints={sliderSettings.BreakPoints}
            spaceBetween={sliderSettings.spaceBetween}>
            <SwiperNav />
            {FeaturesData.map((feature, index) => {
              return (
                <SwiperSlide key={index + 1}>
                  <Card hoverable className="shadow-lg" key={index}>
                    <h3 className="text-center text-2xl font-bold pb-[16px]">
                      {feature.title}
                    </h3>

                    <p className="text-[16px] text-center">
                      {feature.subtitle}
                    </p>
                  </Card>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Features;
