"use client";
import Image from "next/image";
import { Carousel } from "@/components/global/Carousel";
import { Modal } from "@/components/global/Modal";

interface ModalContractsProps {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (open: boolean) => void;
}

export function ModalContracts({ open, setOpen }: ModalContractsProps) {
  const contractModels = [
    {
      image: "/icons/pdf.svg",
      title: "Prestação de Serviço",
      description:
        "Modelo de contrato de prestação de Serviço de Desenvolvimento de Software",
    },
    {
      image: "/icons/pdf.svg",
      title: "Prestação de Serviço",
      description:
        "Modelo de contrato de prestação de Serviço de Desenvolvimento de Software",
    },
    {
      image: "/icons/pdf.svg",
      title: "Prestação de Serviço",
      description:
        "Modelo de contrato de prestação de Serviço de Desenvolvimento de Software",
    },
    {
      image: "/icons/pdf.svg",
      title: "Prestação de Serviço",
      description:
        "Modelo de contrato de prestação de Serviço de Desenvolvimento de Software",
    },
    {
      image: "/icons/pdf.svg",
      title: "Prestação de Serviço",
      description:
        "Modelo de contrato de prestação de Serviço de Desenvolvimento de Software",
    },
  ];

  return (
    <Modal show={open} onHide={() => setOpen(false)}>
      <div className="flex h-full w-full flex-col justify-between gap-4 rounded-3xl bg-zinc-900 pb-4">
        <div className="flex h-16 w-full rounded-t-3xl border-b border-b-white bg-zinc-800">
          <div className="m-auto flex h-1/2 w-1/2 items-center justify-center rounded-full bg-primary-700 p-1 text-center font-bold text-zinc-900">
            Modelos de Contratos
          </div>
        </div>
        <Carousel
          slideOptions={{ slidesPerView: 3, spaceBetween: 50 }}
          slides={contractModels.map((item, index) => (
            <div
              className="flex h-40 w-40 flex-col items-center justify-between gap-2 rounded-lg border border-dashed border-zinc-500 p-2"
              key={index}
            >
              <Image
                src={item.image}
                alt=""
                width={100}
                height={100}
                className="w-1/4"
              />
              <strong className="text-xs">{item.title}</strong>
              <span className="text-center text-[10px] text-zinc-500">
                {item.description}
              </span>
            </div>
          ))}
        />
        <div className="m-auto flex w-1/2 items-center justify-center rounded-full bg-primary-700 p-2 text-center font-bold text-zinc-900">
          Modelos de Contratos
        </div>
      </div>
    </Modal>
  );
}
