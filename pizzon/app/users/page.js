import React from "react";
import ProductCard from "../components/ProductCard";



const PizzaCard = () => {
  return (
    <main>
    
      <div className="flex mt-10">
        <div className="w-1/2">
          <button className="cursor-pointer bg-[#FBB200] mt-50 px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center">
            Filter
          </button>
        </div>
        <br></br>
        <div className="flex justify-between gap-[10vw]">
          <p className="font-bold px-8 w-[100%]">Showing all 9 results</p>
          <select
            placeholder="Default Sorting "
            className="w-md:w border-2 rounded-lg px-4 py-2 text-lg cursor-pointer" 
            id="sort"
          >
            <option>Default Sorting</option>
            <option id="list">A - Z</option>
          </select>
        </div>
      </div>
      <br></br>
      <button className="cursor-pointer bg-teal-700 px-5 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider align-middle justify-center">
        Add New Pizza
      </button>
      <br></br>
      <ProductCard />
      <br></br>
     
    </main>
  );
};
export default PizzaCard;
