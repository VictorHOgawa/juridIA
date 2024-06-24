"use client";
interface FunctionalityCardProps {
    title: string
    description: string
}
export function FunctionalityCard ({title, description}: FunctionalityCardProps) {
    return (
        <div className=" w-full h-full border-white justify-center border-1 p-4 flex items-center gap-2 flex-col border-dashed">
           <div className="flex flex-col gap-2 items-center">
            <h1 className="font-bold text-[16px]">{title}</h1>
            <p className="text-center text-[12px] text-zinc-300">{description}</p>
            </div>
        </div>
    )
}