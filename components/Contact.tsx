import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="mx-auto my-4 min-h-screen max-w-[1340px] md:h-screen">
      <div className="relative z-10 flex h-full w-full flex-col justify-center opacity-100">
        <div className="flex w-full flex-col items-center gap-3">
          <div className="inline-flex justify-center text-[12px] text-[#FFD966]">
            🎯 Invite Only Access
          </div>
          <h2 className="text-[48px] font-bold text-[#FFCC33]">
            Join the Waitlist
          </h2>
          <p className="max-w-2xl text-center text-[20px] leading-[32px] text-[#B3B3B3]">
            We're currently in invite-only beta. Submit your details and we'll
            send you a login link when your account is ready.
          </p>
          <div className="w-full max-w-[448px]">
            <form action="" className="w-full space-y-3">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] text-[#FFFFFF]">Full Name</p>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-[100%] rounded-[12px] border-[1px] border-[#333333] bg-[#0D0D0D] px-2 py-2 focus:outline-0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] text-[#FFFFFF]">Email Address</p>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-[100%] rounded-[12px] border-[1px] border-[#333333] bg-[#0D0D0D] px-2 py-2 focus:outline-0"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[14px] text-[#FFFFFF]">
                  Additional Notes (Optional)
                </p>
                <textarea
                  placeholder="Tell us about your use case, company size, or any questions..."
                  className="w-[100%] rounded-[12px] border-[1px] border-[#333333] bg-[#0D0D0D] px-2 py-2 focus:outline-0"
                />
              </div>
              <button className="flex w-full items-center justify-center gap-2 bg-gradient-to-br from-[#FFCC33] to-[#B7860B] px-2 py-2 text-white rounded-[24px]">
                <span className="text-[18px] text-[#0D0D0D]">
                  Join Waitlist
                </span>{" "}
                <Image
                  src={`/assets/images/button.png`}
                  width={6}
                  height={4}
                  alt="button"
                  className="h-4 w-6 text-[#000000]"
                />
              </button>
              <div className="w-full max-w-[448px] text-center">
                <p className="w-full text-[14px] text-[#B3B3B3]">We'll review your application and send you an invite within 24-48 hours.</p>
              </div>
            </form>
          </div>
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-l from-[#0D0D0D] to-[#141414]">
          <Image src={`/assets/images/bg.png`} fill alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
