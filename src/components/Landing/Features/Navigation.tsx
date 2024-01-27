import { Button } from "antd";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { useSwiper } from "swiper/react";

const SwiperNav = () => {
  const swiper = useSwiper();
  return (
    <div className="relative -top-[54px] pt-10  z-50 flex items-center justify-start gap-2 max-lg:hidden">
      <Button>
        <ArrowLeftIcon
          onClick={() => swiper.slidePrev()}
          className="cursor-pointer"
        />
      </Button>
      <Button>
        <ArrowRightIcon
          onClick={() => swiper.slideNext()}
          className="cursor-pointer"
        />
      </Button>
    </div>
  );
};

export default SwiperNav;
