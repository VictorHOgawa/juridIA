import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  show: boolean;
  onHide: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ show, onHide, children, className }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalAnimation, setModalAnimation] = useState(false);

  useEffect(() => {
    if (show) {
      setIsModalOpen(true);
      setTimeout(() => setModalAnimation(true), 300);
    } else {
      setModalAnimation(false);
      setTimeout(() => setIsModalOpen(false), 300); // 300ms é a duração da sua animação
    }
  }, [show]);

  return (
    <>
      {isModalOpen && (
        <div
          className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex w-full items-center justify-center transition-opacity duration-300 ease-in-out"
          style={{ opacity: modalAnimation ? 1 : 0 }}
        >
          <button
            onClick={onHide}
            className="absolute z-40 h-full w-full bg-black/50"
          />
          <div className="relative z-50 flex w-11/12 flex-col items-center justify-center">
            <div
              className={twMerge(
                "relative z-20 flex h-[85%] max-h-[85vh] w-[500px] flex-col items-center justify-start rounded-xl px-2 py-4",
                className,
              )}
            >
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
