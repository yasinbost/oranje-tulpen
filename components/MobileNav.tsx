import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import Menuitem from "./MenuItem";
import { Key } from "react";
import Logo from "./Logo";
import menu_items from "@/lib/consts";

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
            <Logo/>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className="flex flex-col items-center justify-between h-4/6">
          <div> <ul>
            {menu_items.map((item) => (
              <Menuitem
                key={item.name}
                name={item.name}
                link={item.link}
                hasSubMenu={item.hasSubMenu}
                submenu={item.submenu}
              />
            ))}
          </ul></div>

          <div className={`${isLogin && "hidden"}`}>
            <div >
              <Button> Sign up</Button>
            </div>
            <div className="mt-3">
              <Button> Log in</Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
