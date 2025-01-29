import Image from "next/image"
import Link from "next/link"
const Footer = () => {
  let list=[
    {list1:'Products'},
  {list2:"Overviews"},
  {list3:"Pricing"},
  {list4:"Releases"},
 ]
 let List=[
  {List1:'About Us'},
{List2:"Contact"},
{List3:"News"},
{List4:"Support"},
]
  return (
    <div className="w-full h-[1050px] md:h-[900px] lg:h-[550px] bg-[#8bd5ff] mt-10">
    <main className=' lg:flex '>
      <div>
     <Image src={"/logo.png"} alt="company logo" width={196} height={40} className="pt-14  lg:ml-[113px] ml-28 md:ml-[285px]"></Image>
     </div>
     <div className="md:flex  ">
     <div className="lg:ml-[110px] lg:mt-[59px] mt-14 ml-[170px] md:ml-[170px] md:mt-20 ">
      <h5 className="font-[RobotoSlab] font-medium text-[22px] text-white">SHOP</h5>
      <ul className="flex flex-col gap-7 pt-4">
      {
        list.map((list:any,index:any)=>(
            <div  key={index}>
              <p className="font-[poppins] font-medium text-[20px] text-[#24224f]" ><Link href={""}>{list.list1}</Link></p>
              <p className="font-[poppins] font-medium text-[20px] text-[#24224f]" ><Link href={""}>{list.list2}</Link></p>
              <p className="font-[poppins] font-medium text-[20px] text-[#24224f]" ><Link href={""}>{list.list3}</Link></p>
              <p className="font-[poppins] font-medium text-[20px] text-[#24224f]" ><Link href={""}>{list.list4}</Link></p>
            </div>
          
        ))
      }
      </ul>
     </div>

     <div className="lg:ml-[130px] lg:mt-[59px] mt-14 ml-[170px] md:mt-20 md:ml-[260px] ">
      <h5 className="font-[RobotoSlab] font-medium text-[22px] text-white ">COMPANY</h5>
      <ul className="flex flex-col gap-7 pt-4">
      {
        List.map((List:any,index:any)=>(
            <div  key={index}>
              <p className="font-[poppins] font-medium text-[20px] text-[#24224f]" ><Link href={""}>{List.List1}</Link></p>
              <p className="font-[poppins] font-medium text-[20px] text-[#24224f]" ><Link href={""}>{List.List2}</Link></p>
              <p className="font-[poppins] font-medium text-[20px] text-[#24224f]" ><Link href={""}>{List.List3}</Link></p>
              <p className="font-[poppins] font-medium text-[20px] text-[#24224f]" ><Link href={""}>{List.List4}</Link></p>
            </div>
          
        ))
      }
      </ul>
     </div>
     </div>

     <div className="lg:ml-[100px] lg:mt-[59px] mt-14  md:mt-20 ">
     <h5 className="font-[RobotoSlab] font-medium text-[22px] text-white text-center  lg:text-start">STAY UP TO DATE</h5>
     <div className="md:w-[487px] md:h-[57px] w-[350px] h-[47px] border-[2px] border-[#24224f] rounded-[3px] lg:mt-6 md:mt-6 md:ml-40 ml-10 mt-8 lg:ml-0 ">
      <form  action="">
      <input className="md:w-[368px] md:h-[53px] w-[250px] h-[43px] border-none border outline-none focus:ring-0  text-[#24224f]  bg-[#8bd5ff] pl-5" type="email" placeholder="Enter Your Email" />
      <button className="md:w-[115px] md:h-[53px] w-[100px] h-[43px] relative md:bottom-[53px] bottom-[43px] bg-[#24224f] text-white font-[poppins] font-medium text-[20px] md:ml-[370px] ml-[247px] "><Link href={""}>SUBMIT</Link></button>
      </form>
      
     </div>
     </div>

    </main>
    <div className="" >
    <hr className="border-[#24224f] lg:ml-28 lg:mr-[380px] lg:mt-24 mt-20 md:mr-[295px] md:mt-28" />
     <div className="flex justify-end gap-6 relative lg:right-16 lg:bottom-4 md:bottom-5 mt-6 md:mt-0  right-6  md:right-6  ">
      <p className="font-[poppins] font-semibold text-white text-[20px] "><Link href={""}>Terms</Link></p>
      <p className="font-[poppins] font-semibold text-white text-[20px] "><Link href={""}>Privacy</Link></p>
      <p className="font-[poppins] font-semibold text-white text-[20px] "><Link href={""}>Cookies</Link></p>
     </div>
    </div>
    </div>
  )
}

export default Footer