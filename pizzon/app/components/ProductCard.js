
import OrderButton from "./orderbutton";
import { FaStar } from "react-icons/fa";
import Link from "next/link";



async function getPizza() {
  const res = await fetch(
    "https://pizza-ordering-anno.onrender.com/api/products",{
      next: {
        revalidate: 30
      }
    }
  );

  return res.json();
}

export default async function pizzaList() {
  const pizzas = await getPizza();


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {pizzas.map((pizza) => (
        <Link href={ '/users/product/' + pizza._id } key={pizza._id}>
          <div className="col-span-1 border-2 rounded-2xl w-full p-8">
              <img src={pizza.img} alt={"pizza"}></img>
            
            <h1>{pizza.title}</h1>
            <h1>${pizza.prices.slice(0, 1)}</h1>

            <div className="my-3 flex -text[#FBB200]">
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            </div>
            <OrderButton />
            <br></br>
           
          </div>
        </Link>
      ))}
    </div>
  );
}
