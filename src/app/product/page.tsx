import React from 'react'
import Searchs from '../Components/Searchs'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
async function  Product() {
    const prod=await client.fetch(`*[_type == "Product"]{
            title,
            _id,
            description,
            tags,
            image,
            slug,
            price,
            type,
            brand,
            weight}`,{
                props:{
    
                },
                revalidate:60
            });
  return (
    <div className='px-4 sm:px-8 lg:px-16'>
    
    <div >
    <Searchs/>
    </div>
     <div className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 '>
        {
          prod.map((list:any,index:any)=>(
          <div  className='flex flex-col items-center' key={index}>
                <Link href={`/product/${list._id}`}>
             
                <div className='w-full h-[300px] relative'>
                <Image
                  width={500}
                  height={500}
                  src={urlFor(list.image).url()}
                  alt='milk '
                  className= 'object-cover w-full h-full rounded-lg '
                />
                </div>
              
              <div className='mt-4 text-center font-semibold text-[#24224f] '>
              <h5 className='text-xl' >{list.title}</h5>
               <p className='mt-2 text-lg' >{list.price}</p>
              <h6 className='text-base text-gray-600' >{list.brand}</h6>
              <p>{list.id}</p>
             
              </div>
             <div className='flex justify-center items-center'>
              <button className='bg-[#24224f] text-white w-[130px] xl:w-[180px] xl:h-[44px] h-10  rounded-md text-center cursor-pointer  '> Buy Now </button>
              </div>
              </Link>
            </div>
           
          ))  
        }
        </div>
    </div>
  )
}

export default Product