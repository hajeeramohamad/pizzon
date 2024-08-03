"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
// import { SearchBar } from "./searchBar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  return (
    <nav className=" sticky top-0 shadow-md bg-white z-50">
      <div className="mx-auto flex items-center justify-between">
        <div className="absolute top-[-30px] md:top-[-30px] left-60">
          <img src="/images/pizza-header.png" className="w-60 h-90" />
        </div>
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/images/pizza-logo.png" className="h-50 w-20 pt-45"></img>
          </div>
        </Link>

        <div className=" md:flex items-center justify-center space-x-8">
          <div className="absolute sticky right-20 flex items-center lg:hidden md:hidden">
            {/* <!-- Mobile menu button-> */}
            <button
              type="button"
              id="mobile-dropdown-button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <ul className="hidden md:flex gap-[3vw] text-bold">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === "/" ? "bg-amber-500" : ""
                } text-black hover:bg-amber-200 hover:text-black rounded-md px-3 py-2`}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                href="/users"
                className={`${
                  pathname === "/users" ? "bg-amber-500" : ""
                } text-black hover:bg-amber-200 hover:text-black rounded-md px-3 py-2`}
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link
                href=""
                className={`${
                  pathname === "/" ? "bg-amber-500" : ""
                } text-black hover:bg-amber-200 hover:text-black rounded-md px-3 py-2`}
              >
                PAGES
              </Link>
            </li>
            <li>
              <Link
                href="/users/product"
                className={`${
                  pathname === "/" ? "bg-amber-500" : ""
                } text-black hover:bg-amber-200 hover:text-black rounded-md px-3 py-2`}
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                href=""
                className={`${
                  pathname === "/" ? "bg-amber-500" : ""
                } text-black hover:bg-amber-200 hover:text-black rounded-md px-3 py-2`}
              >
                CONTACT
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <FaSearch className="text-blue-500" size={20} />
            <Link href="/users/cart/">
              <FaShoppingCart
                className="text-blue-500 cursor-pointer"
                size={28}
              />
            </Link>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              href="/"
              className="bg-black text-white block rounded-md px-3 py-2 text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/users"
              className="text-black block rounded-md px-3 py-2 text-base font-medium"
            >
              Products
            </Link>
            <Link
              href="/"
              className="text-black block rounded-md px-3 py-2 text-base font-medium"
            >
              Pages
            </Link>
            <Link
              href="/"
              className="text-black block rounded-md px-3 py-2 text-base font-medium"
            >
              Blog
            </Link>
            <Link
              href="/"
              className="text-black block rounded-md px-3 py-2 text-base font-medium"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
