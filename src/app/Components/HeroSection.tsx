import Image from "next/image"

const HeroSection = () => {
  return (
    <>
    <aside className="h-[83vh] w-full bg-[#8bd5ff]   " >
        <div className="w-full  ">
        <div className=' flex flex-col-reverse  md:flex-row justify-center md:justify-evenly items-center bg-[#8bd5ff] pt-2 '>
            <div className=' md:pt-10 text-center md:text-left bg-[#8bd5ff] pt-6'>
                <h6 className='font-[Rufina] text-5xl lg:text-7xl font-medium text-[#24224f] '>
                Easily buy baby <br /> milk powder <br />for healthy 
                </h6>
                <p className="pt-4">
                Nutritious baby milk powder for healthy <br />growth, easy digestion, strong immunity, and <br className="hidden md:block" /> happy babies
                </p>
                <button className=' mt-6 bg-white py-2 px-6 shadow-lg shadow-slate-500'>
                    SHOP NOW
                </button>
            </div>
            <div className="md:pt-6">
                <Image src={"/hero.png"} alt="hero baby photo " height={300} width={300} />
            </div>
        </div>
        </div>
    </aside>
    </>
  )
}

export default HeroSection