import React from 'react'
import Searchs from '../Components/Searchs'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
async function  Product() {
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
  return (
    <div>
        <Searchs/>
        <div>
        {
          prod.map((list:any,index:any)=>(
            <div key={index}>
                <Link href={`/product/${list.title}`}>
                
              
              <div>
                <Image
                  width={300}
                  height={300}
                  src={urlFor(list.image).width(500).url()}
                  alt='milk '
                  className={`${index == 0 && ' lg:h-[430px] w-[400px] pb-16  '}`}
                />
              </div>
              <div>
              <h5>{list.title}</h5>
<p>{list.price}</p>
<h6>{list.brand}</h6>
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