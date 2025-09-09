import React from "react";
type Service = {
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
};
const ServiceCard = ({ icon, title, subtitle, desc }: Service) => {
  return (
    <div className="mx-auto flex max-w-[450px] flex-col gap-2 rounded-2xl border-[1px] border-[#333333] bg-[#141414] p-4 sm:mx-0">
      <p>{icon}</p>
      <div className="mb-1 flex flex-col gap-1">
        <h2 className="text-[18px] font-semibold text-[#FFFFFF]">{title}</h2>
        <p className="text-[14px] text-[#FFFFFF]">{subtitle}</p>
      </div>

      <p className="max-w-[400px] text-[14px]">{desc}</p>
    </div>
  );
};

export default ServiceCard;
