"use client";
import Image from "next/image";
import { useState } from "react";
import { Title } from "@/components/global/Title";
import { NeedsChoice } from "@/components/app/petitionsandcontracts/NeedsChoice";
import { Assistant } from "@/components/app/petitionsandcontracts/Assitant";

export default function PetitionsAndContracts() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] w-full flex-col overflow-y-hidden pb-20">
      <Image
        src="/backgroundImage.png"
        alt=""
        width={1920}
        height={1080}
        priority
        quality={100}
        className="absolute top-0 h-[200vh] w-full object-cover"
      />
      <div className="absolute top-0 h-full w-full bg-black/90" />
      <div className="z-10 flex h-full w-full flex-col items-center gap-4 p-4">
        <Title
          title="Petição e Contratos"
          subtitle="Escolha qual sua Necessidade"
        />
        <NeedsChoice setIsOpen={setIsOpen} />
      </div>
      <Assistant isOpen={isOpen} />
    </div>
  );
}
