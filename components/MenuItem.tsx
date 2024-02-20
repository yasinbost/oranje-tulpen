import { ArrowDown, Key } from "lucide-react";
import Link from "next/link";

function Menuitem(item: { name: string; link: string; submenu: any }) {
  return !item.submenu && item.submenu.length == 0 ? (
    <li className="px-[5px] py-[10px] uppercase hover:text-red-700 cursor-pointer relative">
      <Link href={item.link}>{item.name}</Link>{" "}
    </li>
  ) : (
    <li className="px-[5px] py-[10px] uppercase hover:text-red-700 cursor-pointer relative">
      <Link href={item.link}>{item.name}</Link>
      <ArrowDown className="absolute right-0 top-0" size={20} />
      <ul className="absolute top-full left-0 bg-white shadow-lg hidden">
        {item.submenu.map((subitem: { name: string; link: string }) => (
          // eslint-disable-next-line react/jsx-key
          <li className="px-[5px] py-[10px] uppercase hover:text-red-700 cursor-pointer">
            <Link href={subitem.link}>{subitem.name}</Link>
          </li>
        ))}
      </ul>
    </li>
  );
}

export default Menuitem;
