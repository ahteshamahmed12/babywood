import Image from "next/image"
import { Facebook } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Instagram } from 'lucide-react';

function Footer() {
  let shop =["SHOP","Products","Overview","Pricing","Releases"]
  let compony =["COMPANY","About us","Contact","News","Support"]
  return (
   <>
   <footer className="pb-10 w-full bg-[#8bd5ff]">
      <div className="main  ">
        <div className="flex flex-col md:flex-row md:justify-evenly items-center">
          
            <div className="pt-6 md:pt-8">
            <Image src={"/babyWood.png"} alt="logo" height={150} width={150}/>
          
          <div className="pt-2">
            <h6 className="text-white font-semibold text-lg text-center ">Social Media</h6>
            <div className="flex md:gap-2 justify-evenly pt-4">
                <div className="border border-[#24224F] p-1">
                  <Facebook size={20} className="text-black" />
                </div>
                <div className="border border-[#24224F] p-1">
                  <Linkedin size={20} className="text-black" />
                </div>
                <div className="border border-[#24224F] p-1">
                  <Instagram  size={20} className="text-black"/>
                </div>
            </div>
              </div>
            </div>
           
             <div className="shop hidden lg:block">
                {
                  shop.map((e,i)=>{
                    return(
                    
                        <ul>
                          <li key={i} className={`${e == "SHOP" && 'text-white font-medium pt-6'} text-[#24224f] pt-4`}>{e}</li>
                        </ul>
                      
                    )
                  })
                }
             </div>

             <div className="company hidden md:block">
                {
                  compony.map((e,i)=>{
                    return(
                      <div>
                        <ul>
                          <li  key={i} className={`${e == "COMPANY" && 'text-white font-medium pt-6'} text-[#24224f] pt-4`}>{e}</li>
                        </ul>
                      </div>
                    )
                  })
                }
             </div>
            
             <div className="end">
                  <h5 className="text-2xl font-serif text-center pt-6 md:pt-0">Stay up to date</h5>
                  <div>
                    <form className="flex flex-col md:flex-row pt-4" >
                  <input type="text" placeholder=" Enter your email "  className="border border-[#24224f] bg-[#8bd5ff] text-[#24224f] outline-none placeholder-[#24224f] pl-2 p-4" />
                  <button className="bg-[#24224f] text-white px-4 py-3 md:py-0 ">SUBMIT</button>
                  </form>
                  </div>

             </div>

        </div>
        <div className="relative hidden md:block">
          <div className="h-8 w-[50%] absolute md:bottom-[-100px] lg:bottom-[-130px] left-12 lg:left-24 border-t border-[#24224f] ">

         
        </div>
        </div>
          <div className="text-white text-center md:text-right md:pr-12 lg:pr-36 lg:pt-20 md:pt-12 pt-10  ">
            <span className="pr-8">Terms</span>
            <span className="pr-8">Privacy</span>
            <span>Cookies</span>
          </div>

      </div>
   </footer>
   </>
  )
}

export default Footer