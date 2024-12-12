"use client"
import { checkToken } from "@/utils/common_functions"
import { useEffect, useState } from "react"

export default function useUser(){
    const [userData,setUserData] = useState<any>(null)
    useEffect(()=>{
        const token = checkToken();
        if(token){
            setUserData(token)
        }
    },[])
    return userData
}