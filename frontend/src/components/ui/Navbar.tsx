"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { checkToken } from "@/utils/common_functions";
import Image from "next/image";
import bell from "../../../public/icons/active.png";
import profile from "../../../public/icons/profile.png";
import { validRoles } from "@/utils/constants";

interface UserData {
  id: string;
  email: string;
  role: string;
  name: string;
}

function Navbar() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const path = usePathname();
  console.log("path is ----->", path);
  useEffect(() => {
    const payload = checkToken();
    setUserData(payload);
  }, [router]);
  return (
    <nav className="sicky z-50 top-0 flex px-8 py-[18px] h-[80px] shadow-md justify-end gap-5 bg-white">
      {/* </ButtonBordered> */}
      {userData && (
        <div className="flex gap-2 items-center">
          <Image src={profile.src} height={40} width={40} alt="profile icon" />
          <h3 className="text-primary-300 text-[14px]">
            Welcome{" "}
            <span className="font-semibold text-[18px]">{userData.name}</span>
          </h3>
        </div>
      )}
      {/* bell icon */}
      <img src={bell.src} alt="bell icon" className="object-contain w-[25px]" />
    </nav>
  );
}

export default Navbar;
