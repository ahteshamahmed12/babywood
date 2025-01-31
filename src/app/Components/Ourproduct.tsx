import { client } from '@/sanity/lib/client'
import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'
import Link from 'next/link'
const getstaticprops = async () => {
    const prod=await client.fetch(`*[_type == "Product"]{
        title,
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
            revelidate:60
        });
   console.log(prod)
  return (
   <main>
       <div>
        <h6 className='font-serif font-normal text-center text-[36px] md:text-[42px] lg:text-[64px] text-[#24224f]'>Our Products</h6>
        <p className='text-center text-[#24224f] font-medium  '>Easily buy baby milk powder for healthy growth, strong immunity, and easy digestion</p>
        </div> 
        <div className='flex flex-col md:flex-row items-center gap-y-14 md:mt-6 2xl:justify-evenly '>
            {
                prod.map((list:any,index:any)=>(
                    <div key={index}>
                    {list.image && (
                        <Image
                        width={500}
                        height={500}
                        src={urlFor(list.image).width(500).url()}
                        alt='milk '
                        className='max-h-auto'
                        />
                    )}
                    <h5 className='text-center text-[#24224f] font-[poppins] font-semibold text-3xl'>{list.title}</h5>
                    <div className='flex justify-center  items-center mt-10'>
                    <button className='bg-[#24224f] text-white w-[130px] xl:w-[180px] xl:h-[44px] h-8 cursor-pointer ' ><Link href={""}>Buy Now</Link></button>
                    </div>
                    </div>
                ))
            }
        </div>
    </main>
  )
}

export default getstaticprops