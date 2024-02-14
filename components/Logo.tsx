import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <span className="cursor-pointer">
        <Image
          src="/oranjeTulpen_Logo.png"
          alt="Logo"
          width={110}
          height={110}
        />
      </span>
    </Link>
  );
}

export default Logo;
