import React from 'react'

const Description = () => {
  return (
    <div className='flex min-h-screen md:h-screen items-center gap-2 md:gap-6 max-w-[1340px] mx-auto my-6'>
        <div className='text-white w-full md:w-1/2 flex flex-col gap-4 '>
        <div>
            <h2 className='font-bold text-[40px]'><span className='text-[#FFD966]'>LLMs</span >  <span className='text-[#FFFFFF]'>are the new</span></h2>
            <h2 className='font-bold text-[40px] text-[#FFD966]'><span>search engines.</span></h2>
        </div>
        <p className='text-[16px] text-[#B3B3B3] max-w-xl'>When customers ask ChatGPT or Claude about your industry, will
            your brand show up? LLM Tracker helps you stay visible, relevant,
            and competitive in the era of AI-first search.
        </p>
        <div className='flex gap-3 md:gap-12'>
            <div className='flex flex-col items-center'>
                <h2 className='font-bold text-[30px] text-[#FFCC33]'>89%</h2>
                <p className='text-[#B3B3B3] text-[14px]'>of consumers use AI for research</p>
            </div>
             <div className='flex flex-col items-center'>
                <h2 className='font-bold text-[30px] text-[#B7860B]'>4.2x</h2>
                <p className='text-[#B3B3B3] text-[14px]'>higher conversion from AI mentions</p>
            </div>
            
        </div>
        </div>
        <div className='text-white w-full md:w-1/2 '>right</div>
    </div>
  )
}

export default Description
