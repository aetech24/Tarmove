import React from "react";
import { HiOutlineTruck } from "react-icons/hi2";
import { CiCircleCheck } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import homeBanner2 from "@/public/homeBanner2.png";
import Link from "next/dist/client/link";


export function HomeBanner1() {
    const banners = [
        {
            title: "Deliveries",
            value: "500+",
            icon: <HiOutlineTruck /> 
        },  
        {
            title: "On-Time Rate",
            value: "99.9%",
            icon: <CiCircleCheck /> 
        },  
        {
            title: "Fleet Vehicles",
            value: "20+",
            icon: <CiLocationOn /> 
        },  
    ]
    return (
<div className="grid grid-cols-3 gap-8 lg:gap-12 px-4 sm:px-6 py-12 bg-pink">
  {banners.map((banner, index) => (
    <div 
      key={index} 
      className="flex flex-col items-center gap-4"
    >
      <div className="flex justify-center items-center p-4 bg-redText text-white w-20 h-20 rounded-lg">
        {React.cloneElement(banner.icon, { className: "w-10 h-10" })}
      </div>
      <p className="text-2xl lg:text-4xl font-bold text-black text-center">
        {banner.value}
      </p>
      <h2 className="text-xl lg:text-2xl font-medium text-black text-center">
        {banner.title}
      </h2>
    </div>
  ))}
</div>    );
}
export function HomeBanner2() {
    return (
<div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-8 lg:gap-12 bg-pink-50 py-12 px-4 sm:px-6 lg:px-8 my-4">
  {/* Text Content */}
<div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:space-y-4 lg:mx-0 lg:py-8">
  <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-normal text-black">
    Ready to{" "}
    <span className="text-redText inline-block lg:inline">Streamline</span>{" "}
    Your <span className="text-redText inline-block lg:inline">Logistics</span>? Get Started Today!
  </h1>

  <div className="flex flex-col sm:flex-row gap-4 w-auto justify-center lg:justify-start">
    <Link
      href="/contact"
      className="btn bg-gradient-to-b from-red-600 to-red-800 hover:from-red-700 hover:to-red-900 
      border-none rounded-full shadow-lg text-lg text-white font-semibold 
      hover:scale-105 transition-transform duration-200 px-8 py-3 
      focus:ring-4 focus:ring-red-500/50"
    >
      Get Started
    </Link>
  </div>
</div>

  {/* Image Content */}
    <Image
      src={homeBanner2}
      alt="Streamline your logistics with our services"
      priority
    />
        </div>
    );
}