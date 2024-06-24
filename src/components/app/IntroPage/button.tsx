"use client";
import  { useRouter } from "next/navigation"
export function Button () {
    const router = useRouter();
  return (
    <button  onClick={() => router.push("/login")} className="bg-gradient-to-r shadow-[0_2px_10px_rgba(0,0,0,0.5)] shadow-[#d5aa6d]  w-52 to-[#d5aa6d] from-[#9b6f45] rounded-2xl p-4 text-lg font-semibold"> Conheçar agora</button>
  )
}