
import { FaShoppingCart } from "react-icons/fa";

async function collectPizza(pizza_id) {
  const res = await fetch(
    `https://pizza-ordering-anno.onrender.com/api/products/${pizza_id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return res.json();
}

export default async function Details({ params }) {
  const pizza = await collectPizza(params.id);

  // if (!pizza) {
  //   return (
  //     <>
  //       <main>
  //         <Navbar />

  //         <div>
  //           <article>
  //             <p>Pizza not found</p>
  //           </article>
  //         </div>
  //       </main>
  //     </>
  //   );
  // }

  return (
    <main>
      <div className="flex flex-col md:flex-row md:h-screen mx-auto relative p-4">
        <img src={pizza?.img} alt="image" className=" justify-center" />
        <div className=" flex flex-col md:w-1/2 p-4">
          <h1 className="text-4xl text-[#111111] font-bold tracking-wider mb-5">
            {pizza?.title}
          </h1>

          <h1 className="text-xl text-[#DC3545] font-bold tracking-wide mb-5">
            ${pizza.prices.slice(0, 1)}
            <span className="text-[#999999] ml-5">8 Reviews</span>
          </h1>
          <p className="text-lg tracking-wider text-[#555555] mb-5">
            This is {pizza?.title}
          </p>
          <p className="text-lg tracking-wider text-[#555555] mb-5">
            Category: {pizza?.desc}
          </p>
          <p className="text-lg tracking-wider text-[#555555] mb-10">
            Tags: Healthy, Organic, Chicken, Sauce
          </p>
          <h1 className="text-xl text-[#111111] font-bold tracking-wider mb-5">
            Choose Pizza Size
          </h1>
          <div className="mb-0 flex gap-10 align-middle items-center">
            <div className="relative cursor-pointer h-12 w-10">
              <img src="/images/pizza-icon.png"></img>
              <div className="absolute bg-[#e6230d] text-white text-sm top-[-10px] right-[-90%] rounded-full p-1 pb-0 ">
                <span className="text-white text -[12px]">Small</span>
              </div>
            </div>
            <div className="relative cursor-pointer h-16 w-14">
              <img src="/images/pizza-icon.png"></img>
              <div className="absolute bg-[#e6230d] text-white text-sm top-[-10px] right-[-80%] rounded-full  p-1 pb-0">
                <span className="text-white">Medium</span>
              </div>
            </div>
            <div className="relative cursor-pointer h-20 w-20">
              <img src="/images/pizza-icon.png"></img>
              <div className="absolute bg-[#e6230d] text-white text-sm top-[-10px] right-[-30%] rounded-full  p-1 pb-0">
                <span className="text-white">Large</span>
              </div>
            </div>
          </div>
          <div className="pt-8 xl:pt-12">
            <p>Choose additional ingredients</p>
            <input type="checkbox" />
            <span>Sauce</span>
          </div>
          <div>
            <input
              type="number"
              className="w-1/2 md:w-1/2 h-5 border-2 rounded-sm py-4 px-2 mb-3 outline-none"
            />

            <br></br>
            <>
              <button className="cursor-pointer bg-[#FBB200] px-8 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider gap-4">
                <FaShoppingCart className="" />
                ADD TO CART
              </button>
            </>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </main>
  );

}