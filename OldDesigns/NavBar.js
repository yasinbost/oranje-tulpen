// components/Navbar.js
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div>
          <Link legacyBehavior href="/">
            <a className="text-white text-lg font-bold">Your Logo</a>
          </Link>
        </div>

        {/* Navigation items on the right */}
        <div className="space-x-4">
          <Link legacyBehavior href="/">
            <a className="text-white">Home</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="text-white">About</a>
          </Link>
          {/* Add more navigation items as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
