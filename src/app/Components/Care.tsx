import Image from "next/image"

const Care = () => {
  return (
    <>
    <aside className='w-full  flex justify-center items-center pb-16  '>
      <div className='w-[90%]  bg-[#8bd5ff] pb-7 '>
          <div className='main flex flex-col md:flex-row md:justify-evenly justify-center gap-8 md:gap-0 items-center'>
            <div>
              <Image src={"/care.png"} alt="baby pic" height={300} width={300}/>
              </div>
              <div className="text-center md:text-left">
                 <h6 className="text-3xl md:text-5xl text-[#24224F] font-serif md:pb-4" >Care Baby</h6>
                 <p className="lg:text-lg pt-3 text-[#24224f]">Care Baby: Trusted for your little one’s <br className="hidden lg:hidden md:block" /> nourishment. Our <br className="hidden lg:block" />
                  premium powdered milk <br className="hidden lg:hidden md:block" />   is crafted with love, ensuring <br className="hidden lg:block" />essential nutrients <br className="hidden lg:hidden md:block" />  for your baby’s healthy growth and <br className="hidden lg:block" />
                   development.</p>
                 <button className=' mt-6 bg-white py-2 px-6 text-[#24224f]'>
                    SHOP NOW
                </button>
              </div>
          </div>
      </div>
    </aside>
    </>
  )
}

export default Care
