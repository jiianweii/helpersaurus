"use client";

import { Icon } from "@iconify/react";
import DropdownMenu from "./DropdownMenu";
import { useDropdownContext } from "../_Provider/DropdownNav";
import { usePathname } from "next/navigation";

export default function Menu() {
  const { openMenu, isOpen } = useDropdownContext();
  const params = usePathname();
  const urlParam = params?.split("").slice(1).join("");
  return (
    <div className="flex flex-col items-end relative">
      <Icon
        icon="material-symbols:menu"
        className="cursor-pointer lg:size-14 md:size-10 size-8 text-black rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
        onClick={(e) => {
          e.stopPropagation();
          if (e.currentTarget.id == "menu" && !isOpen) openMenu();
        }}
        id="menu"
      />
      {isOpen && <DropdownMenu urlParam={urlParam} />}
    </div>
  );
}
