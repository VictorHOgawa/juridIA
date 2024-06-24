"use client";
import Image from "next/image";
import {
  CircleArrowLeft,
  CircleArrowRight,
  Eye,
  EyeOff,
  MoveRight,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useRouter();

  return (
    <div className="flex h-screen w-screen flex-row">
      <div className="flex h-full w-[60%] items-center justify-center bg-[url('/login/loginBackgroundImage.png')] bg-cover bg-center">
        <div className="flex h-[90%] w-[60%] items-center justify-center rounded-2xl border border-primary-700 bg-[url('/login/CardImage.png')] bg-cover bg-center">
          <div className="flex h-[90%] w-[90%] items-center justify-end">
            <div className="h-1/2 w-full self-end rounded-md border bg-[url('/login/NoiseEffect.png')] bg-cover bg-center p-10">
              <div className="flex h-full flex-1 flex-col justify-center">
                <h1 className="font-poppins text-sm font-bold text-white">
                  “Usar a plataforma da Axion revolucionou a forma como lidamos
                  com nossos casos e processo, é incrivel ter todos os dados de
                  uma empresa centralizado em um único local.”
                </h1>
                <div className="mt-auto flex flex-row items-center justify-between">
                  <div className="flex flex-col font-bold">
                    <h2 className="text-[18px]">Carlos Albeto</h2>
                    <h3 className="text-[12px] font-semibold">M2S Advocacia</h3>
                  </div>
                  <div className="flex flex-row gap-2 text-zinc-300">
                    <button className="h-5 w-5 text-zinc-300">
                      <CircleArrowLeft className="text-gray-400" />{" "}
                    </button>
                    <button className="h-5 w-5">
                      <CircleArrowRight className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="from-2% to-98% flex h-full w-[40%] flex-col items-center justify-center gap-4 bg-gradient-to-tr from-black to-[#CAAD75]">
        <div className="flex h-[90%] w-[80%] flex-col items-center justify-between">
          <Image
            src="/Logos/logoFull.png"
            alt="logo"
            width={200}
            height={200}
            className="w-1/2"
            priority
            quality={100}
          />
          <div className="flex w-[80%]">
            <form className="flex w-[100%] flex-col">
              <div className="flex w-full flex-col">
                <h3 className="text-md font-poppins font-medium">
                  {" "}
                  Email / Username
                </h3>
                <input className="h-8 rounded-md border-2 border-white bg-transparent p-1 focus:outline-none"></input>
              </div>
              <div className="mt-4 flex flex-col">
                <h3 className="text-md font-poppins font-medium"> Password</h3>
                <div className="flex h-8 flex-row items-center rounded-md border-2 border-white bg-transparent">
                  <input
                    className="w-[90%] bg-transparent p-1 focus:outline-none"
                    type={showPassword ? "password" : "text"}
                  />
                  {showPassword ? (
                    <Eye size={18} onClick={() => setShowPassword(false)} />
                  ) : (
                    <EyeOff size={18} onClick={() => setShowPassword(true)} />
                  )}
                </div>
              </div>
              <button className="ml-auto text-[12px]">
                Esqueci minha senha{" "}
              </button>
            </form>
          </div>
          <div className="flex w-[80%] flex-col items-center justify-between gap-4">
            <button
              onClick={() => navigation.push("/home")}
              className="relative flex h-10 w-full flex-row items-center justify-center rounded-xl bg-primary-700 p-2 font-black text-zinc-900"
            >
              <span>ENTRAR</span>
              <MoveRight className="absolute right-4" />
            </button>
            <p className="text-[12px]"> Ou entre na comunidade agora</p>
            <button className="flex h-8 w-[80%] items-center justify-center rounded-md border-2 border-primary-700 p-2 text-[12px] font-black">
              REGISTRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
