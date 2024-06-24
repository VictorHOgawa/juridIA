import Image from "next/image";
import { Button } from "@/components/app/IntroPage/button";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-between">
      <div className="z-10 h-screen w-screen items-center justify-between bg-[url('/bgIntroPage.png')] bg-cover bg-center px-24 font-mono text-sm lg:flex">
        <div className="flex h-full w-1/2 flex-col justify-center gap-6 p-4">
          <Image
            src="/Logos/logoFull.png"
            alt="logo"
            width={250}
            height={250}
            quality={100}
            priority
          />
          <div className="gap-2">
            <h4 className="text-[18px]">CONHEÇA A JURID.IA</h4>
            <h1 className="mb-4 text-4xl font-medium">
              Estamos aqui para otimizar sua prática jurídica com <br />{" "}
              <span
                className={`font-playfair font-extrabold italic text-primary-700`}
              >
                {" "}
                Inteligência Artificial
              </span>
            </h1>
          </div>

          <Button />
        </div>
      </div>
    </main>
  );
}
