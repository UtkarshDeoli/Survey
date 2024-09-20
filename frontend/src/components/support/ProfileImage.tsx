import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProfileImageProps {
  src: string | StaticImageData;
  alt: string;
  isOnline: boolean;
  width?: number;
  height?: number;
}

const ProfileImage = ({
  src,
  alt,
  isOnline,
  width,
  height,
}: ProfileImageProps) => {
  return (
    <div className="relative inline-block">
      <Image
        src={src}
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
