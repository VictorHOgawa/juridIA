"use client";

import { createContext, useContext, useState } from "react";

const mainContext = createContext<any>({});

interface ContextProps {
  children: React.ReactNode;
}

export const SidebarContextProvider = ({ children }: ContextProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const value = { isOpen, setIsOpen };

  return <mainContext.Provider value={value}>{children}</mainContext.Provider>;
};

export function useSidebarContext() {
  const { isOpen, setIsOpen } = useContext(mainContext);

  return { isOpen, setIsOpen };
}
