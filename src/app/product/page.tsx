"use client";
import React, { useState, useEffect } from "react";
import Searchs from "../Components/Searchs";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";

async function fetchProducts() {
  return await client.fetch(
    `*[_type == "Product"]{
      title,
      _id,
      description,
      tags,
      image,
      slug,
      price,
      type,
      brand,
      weight
    }`,
    { revalidate: 60 }
  );
}

export default function Product() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const prod = await fetchProducts();
      setProducts(prod);
      setFilteredProducts(prod); 
    };
    loadProducts();
  }, []);

  // Function to update the displayed products
  const handleSearchResults = (results: any[]) => {
    setFilteredProducts(results.length > 0 ? results : products);
  };

  return (
    <div className="px-4 sm:px-8 lg:px-16 pb-10">
     
      <Searchs onSearchResults={handleSearchResults} />

     
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {filteredProducts.map((list: any, index: number) => (
          <div className="flex flex-col items-center hover:shadow-lg p-5" key={index}>
            <Link href={`/product/${list._id}`}>
              <div className="w-full h-[300px] relative">
                <Image
                  width={300}
                  height={300}
                  src={urlFor(list.image).url()}
                  alt={list.title}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="mt-4 text-center font-semibold text-[#24224f]">
                <h5 className="text-xl">{list.title}</h5>
                <div className="flex pt-1 justify-center">
                  <p className="pr-3">${list.price}</p>
                  <h6 className="border-l border-black text-gray-600 pl-3">{list.brand}</h6>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button className="bg-[#24224f] hover:text-[#24224f] hover:bg-white hover:border hover:border-[#24224f] text-white w-[130px] xl:w-[180px] xl:h-[44px] h-10 rounded-md text-center cursor-pointer">
                  Buy Now
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
