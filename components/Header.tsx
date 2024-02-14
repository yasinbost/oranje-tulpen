"use client";
import { useState } from "react";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "./Logo";
import Cart from "./Cart";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import Link from "next/link";
import Logo from "./Logo";
import { Button } from "./ui/button";

const Header = () => {
  const [isMenuModal, setIsMenuModal] = useState(false);

  return (
    <div className="h-[5.5rem] bg-gray-400">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <Logo />
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${
            isMenuModal === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/evenementen">Evenementen</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Contact</Link>
            </li>
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
              className="hover:text-primary transition-all cursor-pointer"
              size={22}
            />
          </Link>
          {/* <a href="#">
            <FaShoppingCart
              className="hover:text-primary transition-all cursor-pointer"
              size={22}
            />
          </a> */}
          <Cart />

          <a href="#" className="md:inline-block hidden sm">
            <Button className="btn-primary">RESERVEER JE PLEK </Button>
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
