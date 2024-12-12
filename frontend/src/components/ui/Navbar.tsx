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
    console.log("Logged in user data is --->", payload);
    if (!payload) router.replace("/");

    const isAuthorized = payload?.role.find((el: any) =>
      validRoles.includes(el._id.toString())
    );

    if (
      payload &&
      payload.role.length > 0 &&
      (payload.role[0].category === "admin" || isAuthorized)
    ) {
      if (
        isAuthorized &&
        isAuthorized.name === "Operation Team" &&
        (path.includes("/users") || path.includes("/karyakarta"))
      ) {
        router.replace("/admin/surveys");
      } else if (isAuthorized && isAuthorized.name === "Supervisor") {
        if (
          path.includes("/surveys") ||
          path.includes("/users") ||
          path.includes("/karyakarta") ||
          path.includes("/todos") ||
          path === "/admin" ||
          path.startsWith("/admin/surveys") ||
          path.startsWith("/admin/data")
        ) {
          router.replace("/admin/collectors");
        }
      }else if(isAuthorized && isAuthorized.name === "Survey Manager"){
        if (
          path.includes("/users") ||
          path.includes("/karyakarta") ||
          path.includes("/todos") ||
          path === "/admin" ||
          path.startsWith("/admin/data")
        ) {
          router.replace("/admin/surveys");
        }
      }
      setUserData(payload);
    }
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
