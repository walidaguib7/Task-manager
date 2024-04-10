import Logo from "../../components/Logo";
import MaterialButton from "../../components/MaterialButton";
import "./Header.css";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Menu } from "lucide-react";

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="pt-6 px-24 max-sm:px-8">
      <div className="flex justify-around items-center text-center gap-[220px]">
        <Logo />
        <MaterialButton label="Login" />
        <div className="md:hidden lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <NavLink to={"/"}>Home</NavLink>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <NavLink to={"/login"}>Login</NavLink>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Header;
