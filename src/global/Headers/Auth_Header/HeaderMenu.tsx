import AddSheet from "@/components/Tasks/AddTasks/AddSheet";
import { useUserStore } from "@/store/UserStore";
import { client } from "@/utils/Appwrite";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Account } from "appwrite";
import { Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

const HeaderMenu = () => {
  const account = new Account(client);
  const user = useUserStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const sessionId = await account.getSession("current");
    console.log(sessionId.$id);

    await account.deleteSession(sessionId.$id);
    localStorage.removeItem("user");
    user.setUser("");
    navigate("/");
  };
  return (
    <div className="md:hidden lg:hidden p-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border p-4 mr-8 mt-1 ">
          <DropdownMenuSeparator />
          <DropdownMenuItem className=" p-2">
            <NavLink to={"/"}>Home</NavLink>
          </DropdownMenuItem>
          <AddSheet />
          <DropdownMenuItem
            className="cursor-pointer p-2"
            onClick={handleLogout}>
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderMenu;
