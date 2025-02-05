import Image from "next/image"
import { MoveRight } from 'lucide-react';
import Link from "next/link";
function Suggest() {
    let recommendedMilk = [
        {
            title:"Aptamil",
            price :"$ price",
            suggest :"recommended",
            img:"/aptamil.jpg"
        },
        {
            title:"NAN pro 1",
            price :"$ price",
            suggest :"recommended",
            img:"/nan.jpg"
        },
        {
            title:"similac Total comfort 1",
            price :"$ price",
            suggest :"recommended",
            img:"/similac.jpg"
        }
    ]
  return (
    <>
     <main >
        <div className="w-full pb-16">
            <div className="">
                <h5 className="font-serif text-xl md:text-3xl font-medium text-[#24224f] text-center pt-12">
                    Best Milk For Your Baby
                </h5>
                <p className="text-center text-[#24224f] pt-2">These 3 powdered milks are great for your baby&apos;s health</p>
            </div>
            <div className="flex flex-col md:flex-row justify-evenly items-center ">
                {recommendedMilk.map((e,i)=>{
                    return (
                        <div key={i } className=" pt-10  ">
                        <div >
                        <Image src={e.img } alt="best milk" height={200} width={200} className={`${e.img=='/nan.jpg'&& 'pt-6 '} cursor-pointer`}/>
                        </div>
                        <h5 className={`text-center md:pr-6 text-[#24224f] ${e.title == 'NAN pro 1' && ' md:pt-[44px] '} ${e.title == 'Aptamil' && ' md:pb-2 '} pt-5 md:pt-8 `}>{e.title}</h5>
                        <div className="flex pt-2 text-center pl-4">
                            <p className="pr-5">{e.price}</p>
                            <p className="pl-5 border-l-[1.5px] border-black">{e.suggest}</p>
                        </div>
                        </div>
                    )
                })}
            </div>
            <div className="w-full flex justify-center">
               
            <button className=" flex  mt-16  pl-8 pr-7 hover:bg-[#24224f] hover:text-white  border py-2 border-black"> <Link href={"product/"}>See All</Link><MoveRight className="ml-3" /></button>
            </div>
        </div>
     </main>
    </>
  )
}

export default Suggest