import { ChevronLeft, LogOut } from "lucide-react";
import Image from "next/image";

export function Header() {
  return (
    <header className="relative flex h-16 w-full items-center justify-between bg-primary-700 p-2">
      <ChevronLeft size={40} />
      <Image
        src="/Logos/logo.svg"
        alt="logo"
        width={300}
        className="absolute left-1/2 h-full -translate-x-1/2"
        height={100}
        priority
        quality={100}
      />
      <div className="flex items-center gap-4">
        <Image src="/avatar.png" alt="avatar" width={40} height={40} />
        <div className="flex flex-col text-xs">
          <strong className="text-zinc-700">Olivia Rhye</strong>
          <span className="text-zinc-500">olivia@untitledui.com</span>
        </div>
        <LogOut className="text-zinc-500" />
      </div>
    </header>
  );
}
