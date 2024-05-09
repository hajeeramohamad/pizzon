import React from "react";
export default function Footer(){
    return (
      <div className=" bg-[#FFFAED] h-80 w-auto">
        <section className="grid grid-cols-1 text-[#888888] cursor-pointer md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h1 className="text-black">INFORMATION</h1> <br />
            <ul>
              <li>Home</li> <br />
              <li>Blog</li> <br />
              <li>About us</li> <br />
              <li>Menu</li> <br />
              <li>Contact us</li> <br />
            </ul>
          </div>
          <div>
            <h1 className="text-black">TOP ITEMS</h1> <br />
            <ul className="">
              <li>Pepperoni</li> <br />
              <li>Swiss Mushroom</li> <br />
              <li>Barbeque Chicken</li> <br />
              <li>Vegetarian</li> <br />
              <li>Ham & Cheese</li> <br />
            </ul>
          </div>
          <div>
            <h1 className="text-black">OTHERS</h1> <br />
            <ul>
              <li>Checkout</li> <br />
              <li>Cart</li> <br />
              <li>Product</li> <br />
              <li>Locations</li> <br />
              <li>Legal</li> <br />
            </ul>
          </div>
          <div className="flex flex-col items-start">
          <h1 className="text-black">S0CIAL MEDIA</h1>
          <div className="mt-10 flex gap-3">
          <a href="">
            <img src="./images/facebook.png"></img>
          </a>
          <a href="">
            <img src="./images/pinterest.png"></img>
          </a>
          <a href="">
            <img src="./images/twitter1.png"></img>
          </a>
          <a href="">
            <img src="./images/instagram.png"></img>
          </a>
          </div>
          <p className="my-8 text-lg md:text-xl">Sign up and get exclusive offers and coupon codes</p>
          <button className="cursor-pointer bg-[#FBB200] px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center">Sign Up</button>
          </div>
        </section>
      </div>
    );
}