import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";

import Logo from "./Logo";
import menu_items from "@/lib/consts";

import Link from "next/link";

export function MobileNav() {
  const isLogin = false;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <GiHamburgerMenu className="md:hidden text-xl  hover:text-red-700 transition-all cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription>
            <div className="w-full max-w-md p-4">
              {menu_items.map((item) => (
                <div key={item.name} className="mb-2">
                  {!item.hasSubMenu ? (
                    // Eğer alt menüsü yoksa, sadece bir Link göster

                    <Disclosure>
                      <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
                          <Link href={item.link}>{item.name}</Link>
                        </Disclosure.Button>
                      </>
                    </Disclosure>
                  ) : (
                    // Eğer alt menüsü varsa, bir Disclosure bileşeni oluştur
                    <Disclosure>
                      {({ open }) => (
                        <>
                          <Disclosure.Button className="flex w-full justify-between rounded-lg bg-red-100 px-4 py-2 text-left text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75">
                            <span>{item.name}</span>
                            <ChevronUpIcon
                              className={`${
                                open ? "rotate-180 transform" : "transform"
                              } h-5 w-5 text-red-500`}
                            />
                          </Disclosure.Button>
                          {item.submenu &&
                            item.submenu.map((subItem) => (
                              <Disclosure.Panel
                                key={subItem.title}
                                className="px-2 pb-1 pt-2 text-sm text-gray-500"
                              >
                                <div className="text-left">
                                  <Link
                                    className="block px-4 py-2 text-sm text-red-700 hover:bg-red-200 focus:outline-none focus-visible:ring focus-visible:ring-red-500/75"
                                    key={subItem.title}
                                    href={subItem.link}
                                  >
                                    {subItem.title}
                                  </Link>
                                </div>
                              </Disclosure.Panel>
                            ))}
                        </>
                      )}
                    </Disclosure>
                  )}
                </div>
              ))}
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
