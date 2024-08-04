import cartProvider from "../../../cartContext";
export default async function Details() {
 

  return (
  
      <cartProvider>
      <main className="flex flex-col md:flex-row items-start mx-auto p-4 my-20 gap-4">
        <div className="md:w-2/3 w-full mb-4 md:mb-0">
          <div className="overflow-auto px-5">
            <table className="w-[100%] table-auto border-collapse border-b border-gray-300">
              <thead>
                <tr>
                  <th className="border-b text-left p-3">Product</th>
                  <th className="border-b text-left p-3">Name</th>
                  <th className="border-b text-left p-3">Extras</th>
                  <th className="border-b text-left p-3">Price</th>
                  <th className="border-b text-left p-3">Quantity</th>
                  <th className="border-b text-left p-3">Total</th>
                </tr>
              </thead>
              <tbody>
                {/* <tr className="flex-col justify-start items-start"></tr> */}

                <tr>
                  <td className="border-b p-3 whitespace-nowrap align-top">
                    image
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-3 whitespace-nowrap align-top">
                    title
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-3 whitespace-nowrap align-top">
                    John Street
                  </td>
                </tr>
                <tr>
                  <td className="border-b p-3 whitespace-nowrap align-top"></td>
                  <td className="border-b p-3 whitespace-nowrap align-top">
                    Quantity: 1
                  </td>
                </tr>
             
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 mt-10 w-full"></div>
        </div>
        <div className=" md:w-[50%] bg-[#333333] text-white px-10 py-8">
          <h1 className="text-xl font-bold tracking-wider mb-5">CART TOTAL</h1>
          <p className="font-bold">
            "Subtotal:" <span className="font-medium ml-5"> $150</span>{" "}
          </p>
          <p className="font-bold">
            "Discount:" <span className="font-medium ml-5"> $150</span>{" "}
          </p>
          <p className="font-bold">
            "Total:" <span className="font-medium ml-5"> $150</span>{" "}
          </p>
          <div className="flex-col w-full">
            <button className="cursor-pointer bg-[#FBB200] w-full py-2 text-lg rounded-full flex font-semibold text-white tracking-wider align-middle justify-center">
              PAID
            </button>
          </div>
        </div>
      </main>
     

    </cartProvider>
  );
}
