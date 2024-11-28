"use client";
import { useRouter } from "next/navigation";
import ButtonBordered from "./buttons/ButtonBordered";
import { useEffect, useState } from "react";
import { checkToken } from "@/utils/common_functions";
import { VscThreeBars } from "react-icons/vsc";
import Image from "next/image";
import bell from "../../../public/icons/active.png"
import profile from "../../../public/icons/profile.png"
import { IoLogOutOutline } from "react-icons/io5";

interface UserData {
  id: string;
  email: string;
  role: string;
  name:string
}

function Navbar({ onSidebarToggle }: any) {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    const payload = checkToken();
    console.log(payload);
    if (payload) {
      setUserData(checkToken());
    } else {
      router.push("/login");
    }
  }, [router]);
  return (
    <nav className="sticky z-50 top-0 flex px-8 py-[18px] h-[80px] shadow-md justify-between bg-white">
      <div className="flex gap-3 items-center">
        <button onClick={() => onSidebarToggle()} className="text-secondary-300">
          <VscThreeBars size={22} />
        </button>
      </div>
      <div className="flex gap-9 justify-center items-center">
        {/* <ButtonBordered className="text-[14px] font-semibold"> */}
          <Image src = {bell.src} height={25} width={25} alt="bell icon" />
        {/* </ButtonBordered> */}
        {userData && (
          <div className="flex gap-2 items-center">
            <Image src = {profile.src} height={40} width={40} alt="profile icon" />
            <h3 className="text-primary-300 text-[14px]">
              Welcome{" "}
              <span className="font-semibold text-[18px]">{userData.name}</span>
            </h3>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
