"use client";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ModalContracts } from "./ModalContracts";
import { Carousel } from "@/components/global/Carousel";

interface HowItWorksProps {
  steps: {
    step: number;
    title: string;
    description: string;
  }[];
  selectModel: boolean;
}

export function HowItWorks({ steps, selectModel }: HowItWorksProps) {
  const [open, setOpen] = useState(false);
  const handleRightButtonClick = () => {
    if (selectModel) {
      return setOpen(true);
    }
  };
  return (
    <>
      <span className="text-5xl leading-8 tracking-[4px] text-primary-500">
        Como Utilizar
      </span>
      <Carousel
        slideOptions={{ slidesPerView: 3, spaceBetween: 50 }}
        slides={steps.map((item, index) => (
          <div
            key={index}
            className="flex h-40 w-80 gap-4 rounded-lg border border-dashed border-zinc-500 p-4"
          >
            <strong className="h-full text-9xl text-primary-700/50">
              {item.step}
            </strong>
            <div className="flex h-full w-full flex-col">
              <strong className="py-4 text-sm">{item.title}</strong>
              <span className="text-xs text-zinc-500">{item.description}</span>
            </div>
          </div>
        ))}
      />
      <div className="grid w-2/3 grid-cols-5 gap-8">
        <div className="col-span-2 flex flex-col rounded-3xl bg-zinc-900">
          <div className="flex h-16 w-full rounded-t-3xl border-b border-b-white bg-zinc-800">
            <div className="relative m-auto flex h-2/3 w-2/3 rounded-full bg-black p-1 font-semibold">
              <button
                className={twMerge(
                  "flex h-full w-7/12 items-center justify-center rounded-full bg-primary-700 p-1 text-xs text-zinc-800",
                  selectModel && "text-[10px] leading-3 tracking-tighter",
                )}
              >
                {selectModel ? "Anexar Modelo" : "Arquivo Único"}
              </button>
              <button
                onClick={handleRightButtonClick}
                className={twMerge(
                  "flex h-full w-7/12 items-center justify-center rounded-full bg-transparent p-1 text-xs text-primary-700",
                  selectModel && "text-[10px] leading-3 tracking-tighter",
                )}
              >
                {selectModel ? "Selecionar Modelo Pronto" : "Múltiplos"}
              </button>
            </div>
          </div>
          <div className="flex h-96 w-full flex-col p-8">
            <button className="relative h-full w-full rounded-3xl border border-dashed border-zinc-100">
              <input
                className="absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl bg-transparent text-center outline-none placeholder:text-xs"
                placeholder="Clique para Buscar ou Arraste o arquivo"
              />
            </button>
          </div>
        </div>
        <div className="col-span-3 flex flex-col justify-between rounded-3xl bg-zinc-900">
          <div className="flex h-16 w-full rounded-t-3xl border-b border-b-white bg-zinc-800">
            <div className="m-auto flex h-1/2 w-1/2 items-center justify-center rounded-full bg-primary-700 p-1 text-center text-xs font-bold text-zinc-900">
              Adicionar Contexto
            </div>
          </div>
          <div className="flex h-16 w-full items-center justify-between gap-2 rounded-b-3xl border-t border-t-white bg-zinc-800 p-3">
            <input
              className="flex h-full w-11/12 rounded-lg bg-primary-700 p-2 text-xs text-zinc-900 outline-none placeholder:italic placeholder:text-zinc-300"
              placeholder="Insira o contexto aqui"
            />
            <div
              onClick={() => setOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 p-1"
            >
              <Image
                src="/Icons/send.svg"
                alt="send"
                width={20}
                height={20}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <ModalContracts open={open} setOpen={setOpen} />
    </>
  );
}
