"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { checkToken } from "@/utils/common_functions";
import Image from "next/image";
import bell from "../../../public/icons/active.png";
import profile from "../../../public/icons/profile.png";
import { validRoles } from "@/utils/constants";
import { RiMenuFold3Line } from "react-icons/ri";
import { RiMenuFold4Line } from "react-icons/ri";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import { FaRegBell } from "react-icons/fa";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

interface UserData {
  id: string;
  email: string;
  role: string;
  name: string;
}


const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));


function Navbar({ sidebarOpen, onSidebarToggle }: any) {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const path = usePathname();
  console.log("path is ----->", path);
  useEffect(() => {
    const payload = checkToken();
    setUserData(payload);
  }, [router]);
  return (
    <nav className="sicky z-50 top-0 flex items-center px-5 py-3 h-auto shadow-md justify-between gap-5 bg-[#112143]">
      <Button
        onClick={onSidebarToggle}
        className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-white"
      >
        {!sidebarOpen ? (
          <RiMenuFold3Line size={18} />
        ) : (
          <RiMenuFold4Line size={18} />
        )}
      </Button>

      <div className="flex items-center gap-4 pr-4">
         {/* bell icon */}
         <Tooltip title="Notifications">
          <IconButton aria-label="cart" className="!text-[rgba(255,255,255,0.8)]">
            <StyledBadge badgeContent={4} color="secondary">
              <FaRegBell className="text-white"/>
            </StyledBadge>
          </IconButton>
        </Tooltip>

        {/* </ButtonBordered> */}
        {userData && (
          <Button className="flex gap-2 items-center ml-2 !justify-start !text-left !text-gray-300">
            <Image
              src={profile.src}
              height={37}
              width={37}
              alt="profile icon"
            />
            <div className="flex flex-col">
              <span className="font-[400] !text-[rgba(255,255,255,0.8)] !capitalize text-[13px] leading-4 opacity-80">
                {userData.name}
              </span>
              <span className="font-[400px] !text-[rgba(255,255,255,0.8)] !capitalize text-[14px] leading-5">
                {userData.email}
              </span>
            </div>
          </Button>
        )}
       
      </div>
    </nav>
  );
}

export default Navbar;
