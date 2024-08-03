"use client"
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function OrderButton() {

``
  return (
  
      <Link href="/users" className="cursor-pointer bg-[#FBB200] px-6 py-3 text-lg rounded-full flex tracking-wider font-medium text-white gap-4"
      >
        <FaShoppingCart className="" />
        ORDER NOW
      </Link>
    
  );
}
