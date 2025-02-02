"use client"
import { useState } from 'react';
import { Search } from 'lucide-react';
const Searchs = () => {
    const [query, setquery] = useState("")

  return (
    <>
    <main>

        <div>
            
            <form onSubmit={(e)=>{
                e.preventDefault()
            }}  className='text-center flex justify-center '>
                <input value={query} onChange={(e)=>{
                    e.target.value
                }}   className='px-4 mt-10 py-3 rounded-l-xl outline-none  border  border-[#24224f]  ' type="text" placeholder='Search ' />
                <div className='mt-10 px-4 rounded-r-xl bg-[#24224f] border  border-[#24224f] pt-3'>
                    <Search className='text-white'/>
                </div>
            </form>
        </div>
    </main>
    
    </>
  )
}

export default Searchs