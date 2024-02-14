import React from "react";
import Title from "../../components/Title";
import Product from "./Product";

const MenuWrapper = () => {
  return (
    <div className="container mx-auto  mb-16 mt-10">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px]">Shop</Title>
        <div className="mt-5">
          <button className="px-6 py-2 bg-secondary rounded-3xl text-white">
            All
          </button>
          <button className="px-6 py-2 rounded-3xl ">Paints</button>
          <button className="px-6 py-2  rounded-3xl ">Trays</button>
          <button className="px-6 py-2  rounded-3xl ">Brushes</button>
          <button className="px-6 py-2  rounded-3xl ">Additives</button>
          <button className="px-6 py-2  rounded-3xl ">Others</button>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default MenuWrapper;
