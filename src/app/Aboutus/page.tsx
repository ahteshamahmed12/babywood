import React from 'react'

const Aboutus = () => {
    let feedbackcard =[
        {   
            
            name:"Ahtesham Ahmed ",
            rollno:286896,
            description:"We were thrilled to learn that an advanced AI course is available free of charge in Pakistan. The prospect of gaining skills that could help us secure a job paying $5,000 a month was incredibly exciting.Thanks to every individual."

        },
        {   
            
            name:"Ghufran",
            rollno:645342,
            description:"We are incredibly grateful to Sir Zia Khan, Sir Ameen Alam, and Sir Daniyal Nagori for their  efforts in bringing the world’s top AI course to Pakistan . Their dedication has opened doors for countless students, offering an opportunity to secure a bright future."

        },
        
            {   
            
                name:"Salman",
                rollno:485512,
                description:"I would like to thank Sir Ali Jawwad and all the teachers at the Governor House for their unwavering support. Their efforts in teaching and caring for students has greatly assisted us in preparing for this competitive AI course."
         },
            {   
            
                name:"Subhan",
                rollno:403463,
                description:" we are grateful to the Governor Sindh,Kamran Khan Tessori. He’s provided a marquee and set aside space for a new university, encapsulating his vision of providing facilities that enable students to develop skills needed to compete on a local and global scale."
            }
        
    ]
  return (
    <>
    <main className=' mb-10 mt-10'>
        <div>
            <h4 className='text-[#24224F] text-3xl font-serif text-center'>Feedback Corner</h4>
        </div>
        <div className='flex flex-col items-center md:flex-col justify-evenly pt-12 md:pt-20 md:px-10  pb-10 gap-8 md:gap-5   '>
            {
                feedbackcard.map((e,i)=>{
                    return(
                        <div key={i} className={` h-[300px]  mb-16 rounded-xl w-[300px] md:w-[350px] border-[1.5px] border-transparent shadow-lg shadow-slate-300 ${i == 1 && ' bg-[#8bd5ff] text-white'} ${i == 3 &&' bg-[#8bd5ff] text-white '} `}>
                            <div className=' px-4 pt-2  pb-2 ' >
                                
                              <h1 className='text-xl text-[#24224F] font-serif pt-3 text-center md:text-left '>{e.name}</h1>
                                <p className='pt-2 text-[#24224f]'>{e.rollno}</p>
                                <p className='pt-2  h-44 text-[#24224f] text-pretty'>{e.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        
    </main>
    </>
  )
}

export default Aboutus