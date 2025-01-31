import Image from 'next/image'  
import { ShoppingBag } from 'lucide-react';
import { Menu } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
  
function Navbar() {
    const links = ["HOME","PRODUCTS","CONTACT"]
  return (
    <>
    <header className='border-b border-white'>
    <nav className="w-full h-[100px] bg-[#8BD5FF] flex justify-between items-center px-8 ">
        <div>
            <Image  src={"/babyWood.png"} alt="logo " height={100} width={100}/>
        </div>
        <div  className="hidden md:block">
            <ul className="flex gap-12" >
                {links.map((e,i)=>{
                    return(
                        <li className="text-[#24224F] font-medium cursor-pointer hover:border-b-2 hover:border-white border-b-2 px-1 border-transparent" key={i}>{e}</li>
                    )
                })}
                </ul>
        </div>
        <div className=" flex">
                <div className="pr-4 pt-1  " >
                    <ShoppingBag size={30} className="text-[#24224F] hover:text-white cursor-pointer"/>   
                </div>
                <button className=" hidden md:block bg-white px-5 py-1 text-[#24224F] font-medium rounded-[3px] hover:bg-[#24224f] hover:text-white">LOGIN</button>
                <div className="md:hidden ">
        <DropdownMenu >
  <DropdownMenuTrigger  aria-setsize={35} ><Menu size={35}/></DropdownMenuTrigger>
  <DropdownMenuContent className='bg-[#24224f] text-white'>
    
    <DropdownMenuSeparator  />
    <DropdownMenuItem>HOME</DropdownMenuItem>
    <DropdownMenuItem>PRODUCTS</DropdownMenuItem>
    <DropdownMenuItem>CONTACT</DropdownMenuItem>
    <DropdownMenuItem >LOGIN</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>

        </div>
        </div>
       
    </nav>
    </header>
    </>
  )
}

export default Navbar