import React from "react";
import Image from "next/image";

// This is our Get a Quote page
// It shows a friendly interface where users can start their shipping process
const GetQuote = () => {
  return (
    // Full-screen container that centers everything nicely
    <div className="hero bg-inherit min-h-screen flex justify-center items-center">
      {/* Splits the page into image and text sections */}
      <div className="hero-content flex flex-col lg:flex-row-reverse text-center lg:text-left">
        {/* Where our shipping image lives */}
        <div className="flex justify-center lg:justify-end w-full">
          <Image
            src="/assets/GetQuoteHero.png"
            className="lg:w-[570px] lg:h-[520px] md:w-[570px] md:h-[520px] w-[300px] h-[300px]"
            alt="Get Quote"
            width={570}
            height={520}
            sizes="(max-width: 768px) 300px, 570px"
          />
        </div>
        
        {/* The words that explain our awesome shipping service */}
        <div className="lg:w-[530px] md:w-[530px] w-[330px] p-2 gap-[24px] flex flex-col items-center lg:items-start">
          {/* A little tag to catch your eye */}
          <p className="text-[18px] text-[#CB1130] font-[400] bg-[#FFF5F7E5] w-[200px] p-2 text-center lg:text-left">
            Shipping Made Simple
          </p>
          
          {/* Big, bold headline to get you excited */}
          <h1 className="text-5xl font-bold text-center lg:text-left">
            Get a Quote in <span className="text-[#CB1130]">Minutes</span>
          </h1>
          
          {/* A friendly description of what we do */}
          <p className="py-6 text-center lg:text-left ">
            Tell us about your shipment, and we&apos;ll handle the rest. Fast,
            reliable, and hassle-free shipping solutions for your business.
          </p>
        </div>
      </div>
      
      {/* A spot for cargo details (we'll add this later) */}
      <div>
        <form action="" method="post" className="">
          <h1>Cargo Details</h1>
          {/* We'll add a dropdown for cargo types soon! */}
        </form>
      </div>
    </div>
  );
};

export default GetQuote;
