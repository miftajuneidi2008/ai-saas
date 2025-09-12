import Image from "next/image";
import React from "react";
type priceCard = 
{
    title:string;
    price:string;
    subtitle:string;
    height:string;
    buttonColor?:string;
    buttonText:string;
    absoluteHeader?:string;
    cardBorder:string;
    duration:string
    lists:string[]
    buttonTextColor:string
}
const PriceCard = ({title,price,subtitle,buttonColor,buttonText,absoluteHeader,height,cardBorder,duration,lists,buttonTextColor}:priceCard) => {
  return (
    <div className={`flex w-max flex-col bg-[#141414] border-[1px] border-[${cardBorder}] px-4 pt-4 rounded-2xl relative ${height} ${absoluteHeader && 'shadow-[0_0_10px_#FFCC33]'} max-w-[336px] max-md:mx-auto`}>
      <div className="text-center">
      
        <h2 className="text-[24px] font-bold text-[#FFFFFF]">{title}</h2>
        <div className="inline-flex">
          <p ><span  className="text-[36px] font-bold text-[#FFCC33]">{price}</span><span className="text-[#B3B3B3] text-[16px]">/{duration}</span></p>
        
        </div>
        <p className="text-[#B3B3B3] text-[14px] w-[80%] mx-auto">{subtitle}</p>
        <div className="flex flex-col space-y-3 my-2">
          {
            lists.map((list, index) => (
                <div key={index} className="inline-flex items-center gap-3">
                <div  className="w-5 h-5 flex justify-center items-center bg-[#7e7149] rounded-full"><Image src={`/assets/images/Vector.png`} width={10} height={10} className="w-3 h-3" alt="vector image" /></div>
                <p className="text-[#B3B3B3] text-[14px]">{list}</p>
                </div>
            )
  )
          }
          <button className={`inline-flex justify-center rounded-2xl px-2 py-1 text-[${buttonTextColor}] text-[16px] ${buttonColor && `${buttonColor}`} border-[2px] border-[#FFCC33]/50 mt-4`}>{buttonText}</button>
      </div>
    </div>
    {absoluteHeader &&  <div className="absolute -top-3 left-1/3 bg-[#FFCC33] rounded-2xl px-2 py-1">
        <p className="text-[#0D0D0D] text-[13px]">{absoluteHeader}</p>
    </div>}
   
    </div>
  );
};

export default PriceCard;
