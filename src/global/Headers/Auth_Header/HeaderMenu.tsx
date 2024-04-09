import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const HeaderMenu = () => {
  return (
    <div className="md:hidden lg:hidden ">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border p-4 mr-8 mt-1">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <NavLink to={"/"}>Home</NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem>Features</DropdownMenuItem>
          <DropdownMenuItem>Contact</DropdownMenuItem>
          <DropdownMenuItem>About Us</DropdownMenuItem>
          <DropdownMenuItem>
            <NavLink to={"/login"}>Login</NavLink>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderMenu;
