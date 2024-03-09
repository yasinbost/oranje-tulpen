import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronDownIcon,
  Key,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";

function Menuitem(item: {
  name: string;
  link: string;
  submenu: any;
  hasSubMenu: boolean;
}) {
  return !item.hasSubMenu ? (
    <Link href={item.link} className="px-2 py-3 transition-all hover:text-red-700">
      {item.name}
    </Link>
  ) : (
    
      <Link href={item.link} className=" relative group px-2 py-3 transition-all  ">
        <p className="flex cursor-pointer items-center gap-2 group-hover:text-red-700 ">
          <span>{item.name}</span>
          <ChevronDown
            className="rotate-0 group-hover:rotate-180 transition-all"
            size={20}
          />
        </p>
          {/* dropdown */}
      <div className="absolute top-10 left-0 hidden  bg-white w-48 flex-col gap-1 rounded-lg py3 shadow-md transition-all p-2  group-hover:flex">
        {item.submenu.map((sub: any) => (
          <div key={sub.title} className=" justify-center py-2 text-red-700 hover:bg-slate-200">
            <Link href={sub.link}>{sub.title}</Link>
          </div>
        ))}
      </div>
      </Link>

    
  );
}

export default Menuitem;
