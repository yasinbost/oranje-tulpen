import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  ChevronDownIcon,
  Key,
} from "lucide-react";
import { Menu, Transition } from '@headlessui/react'

import Link from "next/link";
import { Fragment, useState } from "react";

function Menuitem2(item: {
  name: string;
  link: string;
  submenu: any;
  hasSubMenu: boolean;
}) {
  return !item.hasSubMenu ? (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center  px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <Link href={item.link}> {item.name}</Link>
        </Menu.Button>
      </div>
    </Menu>
  ) : (
    <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center px-4 py-2 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <Link href={item.link}> {item.name}</Link>
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            {item.submenu.map((sub: any) => (
              <div key={sub.title} className="py-2 px-2">
                <Menu.Item>
                  {({ active }) => (
                    <Link  href={sub.link}  className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}>
                        {sub.title}
                    
                    </Link>
                  )}
                </Menu.Item>
              </div>
            ))}
           
          </Menu.Items>
        </Transition>
      </Menu>
    
      

  );
}

export default Menuitem2;
