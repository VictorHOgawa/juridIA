import { MessageCircleMore } from "lucide-react";
import Image from "next/image";

interface AssistantProps {
  isOpen: boolean;
}

export function Assistant({ isOpen }: AssistantProps) {
  return (
    <>
      {isOpen ? (
        <div className="fixed bottom-0 right-0 z-20 flex items-end">
          <div className="flex h-32 w-96 flex-col items-center justify-center rounded-t-lg bg-gradient-to-r from-[#383838] to-[#0f0f0f] px-8 py-4">
            <div className="flex h-full w-full flex-col justify-between">
              <div className="flex w-full gap-1">
                <span className="font-playfair -mt-2 text-start text-5xl font-bold tracking-tighter text-zinc-600">
                  “
                </span>
                <span className="text-xs text-zinc-400">
                  Escolha a funcionalidade que você precisa nesse momento, caso
                  esteja com dúvida basta me perguntar que terei o prazer de
                  esclarecer.
                </span>
              </div>
              <div className="flex w-full items-center justify-end gap-2">
                <button className="flex items-center gap-2 rounded-2xl bg-primary-700 p-2 text-xs text-white">
                  <MessageCircleMore size={14} />
                  <span>Conversar com a Inteligência Artificial</span>
                </button>
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-primary-700" />
                  <div className="h-1 w-1 rounded-full bg-primary-700" />
                  <div className="h-1 w-1 rounded-full bg-primary-700" />
                </div>
              </div>
            </div>
          </div>
          <Image
            src="/assistant.png"
            alt=""
            width={300}
            height={600}
            quality={100}
            priority
            className="h-full w-40"
          />
        </div>
      ) : (
        <div className="fixed bottom-4 right-4 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-700 p-2">
          <Image
            src="/icons/sparkle.svg"
            alt=""
            width={100}
            height={100}
            className="h-2/3 w-2/3"
          />
        </div>
      )}
    </>
  );
}
