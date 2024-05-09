import Navbar from "@/app/components/navbar";

export default function id(){
    return (
      <main>
        <Navbar />
        <div className="flex flex-col md:flex-row md:h-screen mx-auto p-4 relative">
          <div>
            <img src=""></img>
          </div>
          <div className=" flex-col md:w-1/2 p-4">
            <h1 class="text-4xl text-[#111111] font-bold tracking-wider mb-5">
              Burga Pizza
            </h1>

            <h1 class="text-xl text-[#DC3545] font-bold tracking-wide mb-5">
              $20<span class="text-[#999999] ml-5">8 Reviews</span>
            </h1>
            <p class="text-lg tracking-wider text-[#555555] mb-5">
              This is Burga Pizza
            </p>
            <p class="text-lg tracking-wider text-[#555555] mb-5">
              Category: Chicken, Launch, Pizza, Burger
            </p>
            <p class="text-lg tracking-wider text-[#555555] mb-10">
              Tags: Healthy, Organic, Chicken, Sauce
            </p>
            <h1 class="text-xl text-[#111111] font-bold tracking-wider mb-5">
              Choose Pizza Size
            </h1>
            <div class="mb-10 flex gap-12 align-middle items-center">
              <div class="relative cursor-pointer">
                <span class="absolute bg-[#DC3545] text-white text-sm top-0 right-[-20%] rounded-full py-1 px-2">
                  Large
                </span>
              </div>
              <button className="cursor-pointer bg-[#FBB200] px-8 py-3 text-lg md:text-xl rounded-full flex font-medium text-white tracking-wider gap-4">
                delete
              </button>
            </div>
          </div>
        </div>
      </main>
    );
    }