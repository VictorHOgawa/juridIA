"use client";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { HowItWorks } from "./HowItWorks";
import { Carousel } from "@/components/global/Carousel";

interface NeedsChoiceProps {
  // eslint-disable-next-line no-unused-vars
  setIsOpen: (value: boolean) => void;
}

export function NeedsChoice({ setIsOpen }: NeedsChoiceProps) {
  const [selectedNeeds, setSelectedNeeds] = useState<number | null>(null);
  const [selectModel, setSelectModel] = useState(false);
  const needs = [
    {
      title: "Escrever Contratos",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
    {
      title: "Escrever Petição",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
    {
      title: "Analisar Contrato",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
    {
      title: "Analisar Petição",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
    {
      title: "Resumo de Contrato",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
    {
      title: "Resumo de Petição",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
  ];
  const steps = [
    {
      step: 1,
      title: "Primeiro Passo",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
    {
      step: 2,
      title: "Segundo Passo",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
    {
      step: 3,
      title: "Terceiro Passo",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
  ];

  const handleClick = (title: string, index: number) => {
    if (title === "Escrever Contratos" || title === "Escrever Petição") {
      setSelectModel(true);
      setIsOpen(false);
      setSelectedNeeds(index);
    } else {
      setSelectModel(false);
      setIsOpen(false);
      setSelectedNeeds(index);
    }
  };

  return (
    <div className="flex w-full flex-col items-center gap-8">
      <Carousel
        slideOptions={{ slidesPerView: 5.5, spaceBetween: 50 }}
        slides={needs.map((item, index) => (
          <button
            onClick={() => handleClick(item.title, index)}
            key={index}
            className={twMerge(
              "flex h-40 w-60 flex-col items-center justify-center gap-4 rounded-lg border border-dashed border-zinc-500 p-4 text-center",
              selectedNeeds === index &&
                "border-2 border-solid border-primary-700 bg-zinc-500/30",
            )}
          >
            <strong className="text-sm">{item.title}</strong>
            <span className="text-xs text-zinc-500">{item.description}</span>
          </button>
        ))}
      />
      {selectedNeeds !== null && (
        <HowItWorks steps={steps} selectModel={selectModel} />
      )}
    </div>
  );
}
