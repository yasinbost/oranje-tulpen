"use client";
import { useState } from "react";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "./Logo";
import Cart from "./Cart";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { title } from "process";
import Menuitem from "./MenuItem";
import { Menu } from "lucide-react";
import { MobileNav } from "./MobileNav";
import menu_items from "../lib/consts";

const Header = () => {
  const [isMenuModal, setIsMenuModal] = useState(false);

 

  return (
    <div className="h-[4.8rem] bg-gray-700 sticky z-50 top-0 inset-x-0 ">
      <div className="container mx-auto text-white flex justify-between items-center h-full ">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal && "!grid place-content-center bg-gray-200"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            {menu_items.map((item) => (
              <Menuitem
                key={item.name}
                name={item.name}
                link={item.link}
                hasSubMenu={item.hasSubMenu}
                submenu={item.submenu}
              />
            ))}

          </ul>

          {isMenuModal && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenuModal(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <FaUserAlt
              className="hover:text-red-700 transition-all cursor-pointer"
              size={22}
            />
          </Link>
          <Cart />

          <a href="#" className="hidden md:inline-block ">
            <Button className="btn-primary hover:text-red-700">
              Contact Us
            </Button>
          </a>
          <MobileNav />
        
        </div>
      </div>
    </div>
  );
};

export default Header;
