"use client";

import { useDropdownContext } from "../_Provider/DropdownNav";

export default function MainView({ children }: { children: React.ReactNode }) {
  const { closeMenu } = useDropdownContext();
  return (
    <main
      id="mainView"
      className="flex flex-col"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target.id != "menu") closeMenu();
      }}
    >
      {children}
    </main>
  );
}
