import { FunctionalityCard } from "@/components/app/home/functionalityCard";
import { HomeAssistant } from "@/components/app/home/HomeAssistant";

export default function Home() {
  const functionality = [
    {
      title: "Petição & Contratos",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
    {
      title: "Análise de Jurisprudência",
      description:
        "It is a long established fact that areaderwill be distracted by the readable contentof a page when looking.",
    },
    {
      title: "Analise de Documentos",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
    {
      title: "Calculadora de Honorários",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
    {
      title: "Automação de Documentos",
      description:
        "It is a long established fact that areaderwill be distracted by the readable contentof a page when looking.",
    },
    {
      title: "Comparador de Documentos",
      description:
        "Aplicação de Inteligência Artificial em Contratos e Petições, podendo criar, melhorar, gerar Insights e outros.",
    },
  ];

  return (
    <div className="flex h-screen flex-shrink-0 flex-grow bg-[url('/home/bgHome.png')] bg-cover bg-center">
      <div className="flex h-full w-full flex-col bg-black/80">
        <div className="flex h-[72%] w-full flex-col items-center justify-center gap-2 px-16 pt-4">
          <div className="flex flex-col items-center justify-center gap-1">
            <h2 className="text-[16px] text-primary-700">
              Escolha como podemos te ajudar hoje
            </h2>
            <h1 className="text-center text-[24px] font-bold">
              {" "}
              Abaixo tem diversas funcionalidades <br /> que te ajudam a{" "}
              <span className="text-center font-playfair text-[26px] font-bold italic text-primary-700">
                {" "}
                revolucionar seu escritorio
              </span>
            </h1>
            <div className="mb-1 flex flex-col items-center justify-center">
              <div className="h-[1px] w-[80px] bg-primary-700"></div>
              <div className="h-[1px] w-[78px] bg-primary-700"></div>
              <div className="h-[1px] w-[76px] bg-primary-700"></div>
              <div className="h-[1px] w-[74px] bg-primary-700"></div>
            </div>
          </div>
          <div className="grid h-full w-full grid-cols-3 grid-rows-2 gap-4 px-14 pb-0">
            {functionality.map((item, index) => (
              <div key={index}>
                <FunctionalityCard
                  title={item.title}
                  description={item.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <HomeAssistant />
    </div>
  );
}
