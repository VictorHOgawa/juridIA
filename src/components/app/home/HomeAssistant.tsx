import Image from "next/image";

export function HomeAssistant() {
  return (
    <div className="fixed bottom-0 right-0 z-20 flex items-end">
      <div className="flex h-32 w-96 flex-col items-center justify-center rounded-t-lg bg-gradient-to-r from-[#383838] to-[#0f0f0f] px-8 py-4">
        <div className="flex h-full w-full flex-col justify-between">
          <div className="flex w-full gap-1">
            <span className="-mt-2 text-start font-playfair text-5xl font-bold tracking-tighter text-zinc-600">
              “
            </span>
            <span className="text-xs text-zinc-400">
              Estamos aqui para transformar sua prática jurídica com a
              Inteligência Artificial da Jurid IA.
            </span>
          </div>
          <div className="flex w-full items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Image
                src="/Icons/whatsApp.png"
                alt=""
                width={100}
                height={100}
                className="h-8 w-8"
              />
              <div className="flex flex-col">
                <strong className="text-xs">Está com Dúvidas?</strong>
                <span className="text-xs text-zinc-500">
                  Entre em contato conosco via WhatsApp
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 self-end">
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
  );
}
