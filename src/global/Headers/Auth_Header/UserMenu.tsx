import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import UserImage from "/User.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

import { NavLink, useNavigate } from "react-router-dom";
import { Account } from "appwrite";
import { client } from "@/utils/Appwrite";
import { useUserStore } from "@/store/UserStore";
import { Button } from "@/components/ui/button";

const UserMenu = () => {
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
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              className="w-[70px] rounded-full"
              sizes="100"
              src={UserImage}
              alt="@shadcn"
            />
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="p-4">
          <DropdownMenuSeparator />
          <DropdownMenuItem className="mt-2">
            <NavLink to={"/"}>Profile</NavLink>
          </DropdownMenuItem>
          <DropdownMenuItem className="mt-2">
            <Button onClick={handleLogout}>Log out</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
