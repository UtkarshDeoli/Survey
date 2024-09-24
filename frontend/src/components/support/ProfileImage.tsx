import React, { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";
import olivia from "@/../public/icons/olivia_profile.png";
import { UserDataInterface } from "@/types/support_interfaces";

interface ProfileImageProps {
  user: UserDataInterface;
  alt: string;
  isOnline: boolean;
  width?: number;
  height?: number;
}

const ProfileImage = ({
  user,
  alt,
  isOnline,
  width,
  height,
}: ProfileImageProps) => {
  const [imageSrc, setImageSrc] = useState<string>(olivia.src);

  useEffect(() => {
    if (user && user.profile_picture) {
      const base64string = user.profile_picture.data;
      const imageType = user.profile_picture.type;

      const imageUrl = `data:${imageType};base64,${base64string}`;
      setImageSrc(imageUrl);
    }
  }, [user]);
  return (
    <div className="relative inline-block">
      <Image
        src={imageSrc}
        alt={alt}
        width={width ? width : 45}
        height={height ? height : 45}
        className="rounded-full" // Add this if you want a circular image
      />
      <span
        className={`absolute bottom-0 right-0 block h-3 w-3 rounded-full ring-2 ring-white
          ${isOnline ? "bg-green-online" : "bg-red-offline"}`}
      ></span>
    </div>
  );
};

export default ProfileImage;
