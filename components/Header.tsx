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

import MenuitemCopy from "./MenuItem";

const HeaderCopy = () => {
  return (
    <div className="h-[4.8rem] bg-gray-700 sticky z-50 top-0 inset-x-0 ">
      <div className="container mx-auto text-white flex justify-between items-center h-full ">
        <Logo />
        <div className="hidden md:flex items-center gap-4  transition-all">
          {menu_items.map((item) => (
            <MenuitemCopy
              key={item.name}
              name={item.name}
              link={item.link}
              hasSubMenu={item.hasSubMenu}
              submenu={item.submenu}
            />
          ))}
        </div>

        {/* right side */}
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

export default HeaderCopy;
