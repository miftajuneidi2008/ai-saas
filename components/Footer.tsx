import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='max-w-[1340px] mx-auto min-h-screen md:h-screen flex flex-col justify-center gap-4'>
        <section className=' py-4 relative w-full'>
         <div className='flex flex-col gap-4 items-center'>
            <h2 className='text-[30px] md:text-[50px] font-bol text-[#FFFFFF] flex flex-col justify-center items-center'>Your brand deserves to be seen <span className='text-[#FFCC33]'>in AI search</span></h2>
          <p className='text-[14px] md:text-[20px] text-[#B3B3B3]  text-center max-w-2xl'>Join forward-thinking marketers who are already tracking their AI visibility. Start your free trial today.</p>
          <button className='bg-[#FFCC33] rounded-[24px] px-4 py-2 flex  gap-2 items-center text-[18px] leading-[28px]'>Start Free Trial <Image src={`/assets/images/button.png`} width={8} height={8} alt='button'/></button>
         <p className='text-[14px] leading-[20px] text-[#B3B3B3]'>No credit card required • 14-day free trial • Setup in 2 minutes</p>
         </div>
         <div className='bg-[#3b3111] t0-60% opacity-100 absolute inset-0 -z-10'></div>
        </section>
        <div className='bg-[#0D0D0D] opacity-50'>

        </div>
    </footer>
  )
}

export default Footer