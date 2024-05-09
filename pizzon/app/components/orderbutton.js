"use client"
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function OrderButton(props) {
  return (
    <Link href="/users">
      <button className="cursor-pointer bg-[#FBB200] px-8 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider gap-4">
        <FaShoppingCart className="" />
        ORDER NOW
      </button>
    </Link>
  );
}
