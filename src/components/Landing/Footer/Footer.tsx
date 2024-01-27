import Logo from "../../Logo";
import facebook from "../../../assets/facebook.svg";
import twitch from "../../../assets/twitch.svg";
import twitter from "../../../assets/twitter.svg";

const Footer = () => {
  return (
    <div className="w-full footer">
      <div className=" pb-8 pt-6 px-24 max-sm:px-8 flex justify-around items-center gap-16 max-lg:flex-col">
        <div className="text-center">
          <Logo />
          <span className="text-[#666666] text-center text-[16px]">
            &copy; 2024 Webicien. <br /> All rights reserved.
          </span>
        </div>
        <div className="flex flex-col justify-start items-center">
          <h3 className="text-center  font-bold text-[20px] text-[#333333]">
            Contact infos
          </h3>
          <span className="text-[16px] pb-1 text-[#666666]">
            Email:aguibw@gmail.com
          </span>
          <span className="text-[16px] text-[#666666]">Phone:XXXXXX</span>
        </div>
        <div className="flex flex-col">
          <h3 className="text-[#333333] font-bold text-center  text-[20px]">
            Social Links
          </h3>
          <div className="flex gap-4 pt-2">
            <img className="w-[70px]" src={facebook} alt="" />
            <img className="w-[70px]" src={twitch} alt="" />
            <img className="w-[70px]" src={twitter} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
