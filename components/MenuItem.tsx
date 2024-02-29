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
  const [isItemOpen, setItem] = useState(false);
  const ismobile = false;

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return !item.hasSubMenu ? (
    <li className="flex justify-center px-[5px] py-[10px]  hover:text-red-700 cursor-pointer ">
      <Link href={item.link}>{item.name}</Link>{" "}
    </li>
  ) : (
    <li className="flex relative justify-center  px-[5px] py-[10px]  hover:text-red-700 cursor-pointer ">
      <div className="flex items-center group">
        <Link href={item.link}>{item.name} </Link>
        <ChevronDown
          className="rotate-180 group-hover:rotate-0 transition-all"
          size={20}
        />
      </div>
      {/* dropdown */}
      {item.submenu &&
        (ismobile ? (
          <div>
           
          </div>
        ) : (
          <div
            className={`absolute left-10  top-10 w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex`}
          >
            {item.submenu.map((sub: any) => (
              <div
                key={sub.name}
                className="flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-red-700"
              >
                <Link href={sub.link} className="whitespace-nowrap">
                  {" "}
                  {sub.title}
                </Link>
              </div>
            ))}
          </div>
        ))}
    </li>
  );
}

export default Menuitem;
