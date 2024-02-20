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

const Header = () => {
  const [isMenuModal, setIsMenuModal] = useState(false);

  const menu_items = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Wat is Ebru?",
      link: "/watisEbru",
    },
    {
      name: "Workshops",
      link: "/workshops",
      submenu: [
        { title: "Boekbinding", link: "/workshop1" },
        { title: "Sjaal Marmering", link: "/workshop2" },
        { title: "Akkase Marmering", link: "/workshop2" },
      ],
    },
    {
      name: "Shop",
      link: "/shop",
    },
  ];

  return (
    <div className="h-[4.8rem] bg-gray-700 sticky z-50 top-0 inset-x-0 ">
      <div className="container mx-auto text-white flex justify-between items-center h-full ">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            {/* menu_items.map((item, index) => (
              {menu_items.map((item, index) => (
                <Menuitem item ={item} />
              ))}
            )) */}
            {/* {menu_items.map((item, index) => (
              <li
                key={index}
                className="px-[5px] py-[10px] uppercase hover:text-red-700 cursor-pointer"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))} */}

            {/* <li className="px-[5px] py-[10px] uppercase hover:text-red-700 cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-red-700 cursor-pointer">
              <Link href="/watisEbru">Wat is Ebru?</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-red-700 cursor-pointer">
              <Link href="/workshops">Workshops</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-red-700 cursor-pointer">
              <Link href="/shop">Shop</Link>
            </li> */}
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

          <a href="#" className="md:inline-block hidden sm">
            <Button className="btn-primary hover:text-red-700">
              Contact Us
            </Button>
          </a>
          <button
            className="sm:hidden inline-block"
            onClick={() => setIsMenuModal(true)}
          >
            <GiHamburgerMenu className="text-xl hover:text-primary transition-all cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
