import Logo from "@/components/Logo";

import { NavLink } from "react-router-dom";
import HeaderMenu from "./HeaderMenu";
import UserMenu from "./UserMenu";
import AddSheet from "@/components/Tasks/AddTasks/AddSheet";

const AuthHeader = () => {
  return (
    <div className="pt-6 px-24 max-sm:px-8 sm:w-full max-md:mb-2">
      <div className="flex justify-between items-center text-center gap-5">
        <Logo />
        <div className="flex justify-center items-center gap-10 Links max-md:hidden ">
          <NavLink to={"/"}>
            <span className="text-blue-500">Home</span>
          </NavLink>
          <AddSheet />
          <UserMenu />
        </div>
        <HeaderMenu />
      </div>
    </div>
  );
};

export default AuthHeader;
