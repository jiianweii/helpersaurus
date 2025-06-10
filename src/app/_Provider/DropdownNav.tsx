"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext<DropdownProps | undefined>(undefined);

export interface DropdownProps {
  isOpen: boolean;
  closeMenu: () => void;
  openMenu: () => void;
}

export function useDropdownContext() {
  return useContext(Context);
}

export function DropdownNav({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);
  const openMenu = () => setIsOpen(true);

  return (
    <Context.Provider value={{ closeMenu, openMenu, isOpen }}>
      {children}
    </Context.Provider>
  );
}
