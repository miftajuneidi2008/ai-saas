import React from "react";

const Description = () => {
  return (
    <div className="flex flex-col md:flex-row  my-16 md:my-0 min-h-screen md:h-screen items-center gap-12 md:gap-10 max-w-[1340px] mx-2 md:mx-auto">
      <div className="text-white w-full md:w-1/2 flex flex-col gap-4 ml-2 md:ml-0 ">
        <div>
          <h2 className="font-bold text-[40px]">
            <span className="text-[#FFD966]">LLMs</span>{" "}
            <span className="text-[#FFFFFF]">are the new</span>
          </h2>
          <h2 className="font-bold text-[40px] text-[#FFD966]">
            <span>search engines.</span>
          </h2>
        </div>
        <p className="text-[16px] text-[#B3B3B3] max-w-[90%] md:max-w-xl">
          When customers ask ChatGPT or Claude about your industry, will your
          brand show up? LLM Tracker helps you stay visible, relevant, and
          competitive in the era of AI-first search.
        </p>
        <div className="flex gap-3 md:gap-12">
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-[30px] text-[#FFCC33]">89%</h2>
            <p className="text-[#B3B3B3] text-[14px]">
              of consumers use AI for research
            </p>
          </div>
          <div className="flex flex-col items-center">
            <h2 className="font-bold text-[30px] text-[#B7860B]">4.2x</h2>
            <p className="text-[#B3B3B3] text-[14px]">
              higher conversion from AI mentions
            </p>
          </div>
        </div>
      </div>
      <div className="text-white w-full md:w-1/2 relative rounded-md flex flex-col gap-6 md:gap-10"   style={{
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.6)'
              }}>

         <div className="bg-[#FFCC33] text-[#000000] absolute -top-1 right-2 px-2 py-1 rounded-md">
         📈 +127% Growth
         </div>
        <div className="text-center flex flex-col gap-2">
          <p className="text-[#FFCC33] text-[18px]">Brand Mentions Rising</p>
          <p className="text-[#B3B3B3] text-[14px]">Your visibility over time</p>
        </div>
        <div className="w-[90%] mx-auto h-20  lg:h-32 bg-[#000000] rounded-md">

        </div>
        <div className="flex gap-2 items-center justify-between w-[90%] mx-auto mb-10">
          <p className="text-[#B3B3B3] text-[12px]">Jan</p>
          <p className="text-[#B3B3B3] text-[12px]">Feb</p>
          <p className="text-[#B3B3B3] text-[12px]">Mar</p>
          <p className="text-[#B3B3B3] text-[12px]">Apr</p>
          <p className="text-[#B3B3B3] text-[12px]">May</p>
          <p className="text-[#B3B3B3] text-[12px]">Jun</p>
          <p className="text-[#B3B3B3] text-[12px]">Jul</p>
        </div>
      
    
      </div>
    </div>
  );
};

export default Description;
