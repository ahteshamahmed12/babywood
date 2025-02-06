"use client";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

const page = async (props: any) => {
  const prod = await client.fetch(
    `*[_type == "Product" && _id == "${props.params.id}"]`
  );
  


  const handleClick = (product: any) => {
    const cart =JSON.parse(localStorage.getItem('cart')|| '{}')
console.log(cart);
if (cart[product.title]){
  cart[product.title] = {...cart[product.title],quantity : cart[product.title].quantity + 1}
}
else{
  cart[product.title] = {...product,quantity : 1};
}
   
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  return (
    <main>
      <div className="mt-8 mx-auto px-4 py-8 ">
        {prod.map((list: any, index: any) => (
          <div
            className="flex flex-col lg:flex-row lg:justify-around lg:items-start gap-8"
            key={index}
          >
            <div className=" flex justify-center items-center ml-2 lg:mt-7 lg:ml-10  ">
              <Image
                width={180}
                height={180}
                src={urlFor(list.image).url()}
                alt={list.title}
                className="  md:w-[240px] md:h-[240px] max-w-full lg:w-[350px] lg:h-[300px] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 text-[#2a267b] font-sans px-4 lg:px-8">
              <div className="">
                <p className="text-2xl font-semibold ">{list.title}</p>
              </div>
              <div className=" mt-4 ">
                <h5 className="text-lg  font-semibold ">Product Description</h5>
                <p className="font-[satoshi] text-[14px] text-justify pt-2 ">
                  {list.description}
                </p>
                <ul
                  style={{ listStyleType: "disc" }}
                  className="ml-6 mt-2 text-sm"
                >
                  <li>{list.weight}</li>
                  <li>{list.type}</li>
                  <li>{list.brand}</li>
                </ul>
                <h6 className="text-lg font-semibold mt-4 ">Dosage</h6>
                <ul style={{ listStyleType: "disc" }} className="ml-8">
                  <li>{list.tags}</li>
                </ul>
                <h6 className="text-lg font-semibold mt-4 ">Price</h6>
                <ul style={{ listStyleType: "disc" }} className="ml-8">
                  <li>{list.price} rs</li>
                </ul>
              </div>
              <div className="flex justify-center lg:justify-start  mt-8 mb-8">
                <button
                  onClick={() => handleClick(list)}
                  className="w-[90%] h-[56px] bg-[#2a254b] hover:text-[#2a254b] hover:bg-white hover:border-[2px]  hover:border-[#2a254b] text-white text-[satoshi] font-normal text-[16px] "
                >
                  Add to cart<Link href={""}></Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
