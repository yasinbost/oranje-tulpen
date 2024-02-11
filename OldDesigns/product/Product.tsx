import Image from "next/image";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Product = () => {
  return (
    <div className="bg-secondary rounded-3xl">
      <div className="w-full  bg-[#f1f2f3] h-[210px] grid place-content-center rounded-br-[46px] rounded-tl-2xl rounded-tr-2xl">
        <div className="relative w-36 h-36 hover:scale-110 transition-all">
          <Image src="/images/Kitre.jpg" alt="" layout="fill" />
        </div>
      </div>
      <div className="p-[25px] text-white">
        <h4 className="text-xl font-semibold">Paper Marbling water</h4>
        <p className="text-[15px]">
          x4 bottles of one liter ebru / paper marbling water made of premium
          carrageenan, ready for use. 4 liters will be sufficient to use with a
          standard size tray, 35 x 50 cm.
        </p>
        <div className="flex justify-between items-center mt-4">
          <span>$20</span>
          <button className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center">
            <RiShoppingCart2Fill />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
