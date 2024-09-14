"use client"

import ButtonFilled from "@/components/ui/buttons/ButtonFilled";
import Navbar from "@/components/ui/Navbar";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex w-screen h-screen justify-center items-center bg-gradient-to-r from-black to-primary-300">
      <ButtonFilled onClick={()=>router.push("/admin/surveys")}>Go to admin</ButtonFilled>
    </main>
  );
}
