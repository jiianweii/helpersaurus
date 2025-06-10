"use client";

import { DropdownProps, useDropdownContext } from "../_Provider/DropdownNav";

export default function MainView({ children }: { children: React.ReactNode }) {
  const { closeMenu } = useDropdownContext() as DropdownProps;
  return (
    <main
      id="mainView"
      className="flex flex-col"
      onClick={(e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLElement;
        if (target.id != "menu") closeMenu();
      }}
    >
      {children}
    </main>
  );
}
