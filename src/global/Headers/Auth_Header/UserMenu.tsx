import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import UserImage from "/User.png";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";

import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

const UserMenu = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    sessionStorage.removeItem("token");
    window.location.reload();
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
            <Button onClick={handleLogout}>Log out</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserMenu;
