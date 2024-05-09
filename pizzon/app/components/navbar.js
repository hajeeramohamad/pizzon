"use client";
import React from "react";
import Link from "next/link";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
// import { SearchBar } from "./searchBar";

export default function Navbar() {
  return (
    <nav className=" sticky top-0 shadow-md bg-white z-50">
      <div className="mx-auto flex items-center justify-between">
        <div className="absolute top-[-30px] md:top-[-30px] left-60">
          <img src="/images/pizza-header.png" className="w-60 h-90"></img>
        </div>
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <img src="/images/pizza-logo.png" className="h-50 w-20 pt-45"></img>
          </div>
        </Link>

        <div className=" md:flex items-center justify-center space-x-8">
          <ul className="hidden md:flex gap-[3vw] text-bold">
            <li>
              <Link href="/">HOME</Link>
            </li>
            <li>
              <Link href="/users">PRODUCTS</Link>
            </li>
            <li>
              <Link href="">PAGES</Link>
            </li>
            <li>
              <Link href="/users/product">BLOG</Link>
            </li>
            <li>
              <Link href="">CONTACT</Link>
            </li>
          </ul>
          <div className="flex items-center gap-4">
            <FaSearch className="text-blue-500" size={20} />
            <FaShoppingCart className="text-blue-500" size={28} />
          </div>
        </div>
      </div>
    </nav>
  );
}
