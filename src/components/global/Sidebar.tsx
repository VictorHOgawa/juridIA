import Image from "next/image";
import { twMerge } from "tailwind-merge";
import {
  CalendarMinus2,
  CalendarPlus2,
  Camera,
  Home,
  LogOut,
  Plus,
} from "lucide-react";

export function Sidebar() {
  return (
    <div
      className={twMerge(
        "flex min-h-screen w-64 flex-col items-center gap-2 bg-primary-700 px-4 pt-10",
      )}
    >
      <Image
        src="/Logos/logo.png"
        alt=""
        width={150}
        height={50}
        className="w-2/3"
        quality={100}
        priority
      />
      <div className="flex w-[83%] flex-col items-center gap-2">
        <button
          className={twMerge(
            "mt-8 flex h-8 w-full flex-row items-center gap-2 rounded-lg border border-transparent bg-white px-2 text-[14px] font-extrabold text-primary-700",
            "",
          )}
        >
          <Home className="h-5 w-5" />
          Home
        </button>
        <button
          className={twMerge(
            "flex h-8 w-full flex-row items-center gap-2 rounded-lg px-2 text-[14px] font-extrabold text-slate-800 transition-[600]",
            "hover:bg-white hover:text-primary-700",
          )}
        >
          <CalendarPlus2 className="h-5 w-5" />
          Upcoming
        </button>
        <button
          className={twMerge(
            "flex h-8 w-full flex-row items-center gap-2 rounded-lg px-2 text-[14px] font-extrabold text-slate-800 transition-[600]",
            "hover:bg-white hover:text-primary-700",
          )}
        >
          <CalendarMinus2 className="h-5 w-5" />
          Previous
        </button>
        <button
          className={twMerge(
            "flex h-8 w-full flex-row items-center gap-2 rounded-lg px-2 text-[14px] font-extrabold text-slate-800 transition-[600]",
            "hover:bg-white hover:text-primary-700",
          )}
        >
          <Camera className="h-5 w-5" />
          Recordings
        </button>
        <button
          className={twMerge(
            "flex h-8 w-full flex-row items-center gap-2 rounded-lg px-2 text-[14px] font-extrabold text-slate-800 transition-[600]",
            "hover:bg-white hover:text-primary-700",
          )}
        >
          <Plus className="h-5 w-5" />
          Personal Room
        </button>
      </div>
      <div className="mt-auto flex flex-col">
        <div className="flex flex-col">
          <h4 className="text-[13px]">Créditos Usados</h4>
          <p className="text-[11px] text-zinc-900">
            Seu escritório já atingiu 80% de uso dos créditos. Deseja realizar
            uma recarga?
          </p>
          <div className="mt-0.5 h-2 w-full overflow-hidden rounded-full bg-white">
            <div className="h-full w-[75%] rounded-full bg-slate-800"></div>
          </div>
          <div className="flex flex-row gap-2">
            <button className="text-[10px] text-zinc-900"> Dispersar </button>{" "}
            <button className="text-[12px] font-bold">
              Adicionar Créditos
            </button>
          </div>
        </div>
        <div className="mt-10 flex flex-col gap-4 pb-4">
          <div className="h-px w-full rounded-full bg-zinc-300"></div>
          <div className="flex flex-row items-center gap-2">
            <Image
              className="h-6 w-6 rounded-full"
              width={40}
              height={40}
              alt=""
              src={"/Avatar.png"}
            />
            <div className="flex flex-col">
              <label className="text-[12px] text-zinc-700">Olivia Rhye</label>
              <label className="text-[10px] text-zinc-500">
                olivia@untitledui.com
              </label>
            </div>
            <LogOut className="ml-auto h-4 w-4 text-zinc-500" />
          </div>
        </div>
      </div>
    </div>
  );
}
