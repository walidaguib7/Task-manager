import Logo from "../components/Logo";
import MaterialButton from "../components/MaterialButton";
import "./Header.css";

import { Menu } from "lucide-react";
import { MenuProps, Dropdown } from "antd";
import { Link } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    label: "Home",
    key: "1",
  },
  {
    label: "Features",
    key: "2",
  },
  {
    label: "Contact",
    key: "3",
  },
  {
    label: "About us",
    key: "4",
  },
  {
    label: "Login",
    key: 5,
    className: "button",
    style: { color: "white" },
  },
];

const Header = () => {
  return (
    <div className="pt-6 px-24 max-sm:px-8">
      <div className="flex justify-between items-center text-center gap-5">
        <Logo />
        <div className="flex justify-center items-center gap-10 Links max-md:hidden ">
          <Link to={"/"}>
            <span className="text-blue-500">Home</span>
          </Link>
          <span className="hover:text-blue-500">Features</span>
          <span className="hover:text-blue-500">Contact</span>
          <span className="hover:text-blue-500">About us</span>
        </div>
        <MaterialButton label="Login" />
        <div className="md:hidden lg:hidden">
          <Dropdown
            arrow={true}
            menu={{ items, style: { padding: "14px" } }}
            placement="bottomLeft">
            <Menu />
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
