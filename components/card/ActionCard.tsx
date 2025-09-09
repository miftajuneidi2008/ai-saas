import React from 'react'
type CardType = 
{
badge:string;
icon:string;
title:string;
detail:string;
}
const ActionCard = ({badge,icon,title,detail}:CardType) => {
  return (
    <div className='flex flex-col gap-4 relative bg-[#141414] border-[1px] border-[#333333] rounded-[16px] items-center px-4 py-4 w-full'>
        <div className='absolute -top-4 text-[#0D0D0D] bg-[#FFCC33] w-8 h-8 rounded-full flex items-center justify-center'>{badge}</div>
        <p className='text-[36px] text-[#FFFFFF] mt-4'>{icon}</p>
        <p className='text-[#FFFFFF] font-semibold text-[20px]'>{title}</p>
        <p className='text-[#B3B3B3] text-[16px]'>{detail}</p>

    </div>
  )
}

export default ActionCard