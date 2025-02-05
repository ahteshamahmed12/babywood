import { Button } from '@/components/ui/button';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';


const page = async (props:any) => {

  
  const prod=await client.fetch(`*[_type == "Product" && _id == "${props.params.id}"]`);
  console.log(prod)
 
 
   
  return (
    <div className='px-4 mt-7 md:px-8 md:mt-7 lg:mt-12 pb-10  '>
     { prod.map((res:any,index:any)=>(
    <div className='flex flex-col  gap-10 xl:flex-row xl:justify-items-start  ' key={index}>
      <div className="w-full md:flex md:flex-col md:justify-center  md:items-center   ">
      {res.image && (

          <Image 
          width={500}
          height={400}
          src={urlFor(res.image).url()}
          alt='images'
          className=' relative w-full  max-w-[300px]  md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] h-auto mt-3 '
          />
        
         )}
       </div>
         

         <div  className='text-[#24224f] flex flex-col gap-6 xl:mt-24 '>
         <h4 className='text-center text-4xl pt-6'>{res.title}</h4> 
         <p className='text-pretty  text-2xl'>{res.description}</p>
         <div className='bg-[#8bd5ff] text-center text-2xl flex flex-col gap-4 py-5  '> 
        <h4  className='font-semibold'>Baby age: {res.tags}</h4> 
         <h4 className='font-semibold' >Brand: {res.brand}</h4> 
         <h4 className='font-semibold' >Type: {res.type}</h4> 
         <h4 className='font-semibold' >Weight: {res.weight}</h4> 
         <h4 className='font-semibold'>Price: {res.price} Rs</h4> 

         </div>
         </div>
   
    <div>
      
      
    </div>


         
        </div>
      ))}
       
    </div>
  )
}

export default page