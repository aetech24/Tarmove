import { IoDiamondOutline } from "react-icons/io5";
import Image from "next/image";
import HeroBanner from "@/public/heroBanner.png";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="grid grid-cols-1 justify-center gap-8 lg:gap-12 px-4 sm:px-6 py-12">
      {/* Badge */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2 text-redText bg-gradientBg px-6 py-2 rounded-full text-sm lg:text-base">
          <IoDiamondOutline className="flex-shrink-0" />
          <span className="whitespace-nowrap">
            Ghana&apos;s Premier Automotive Logistics Solutions
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center text-center space-y-6 max-w-[1048px] mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
          Your Partner in{" "}
          <span className="text-redText block lg:inline">Seamless Logistics</span>{" "}
          Across Ghana
        </h1>
        <p className="text-lg lg:text-2xl text-black max-w-2xl">
          Efficient. Reliable. Seamless.
              </p>
              <div className="flex gap-3">
                            <Link
            href={"/getStarted"}
            className="btn bg-gradient-to-b from-[#DD1234] to-[#B30F2A] border-none rounded-[100px] shadow-custom-2 text-md text-[#FFFFFF] text-center font-[600] hover:scale-105 duration-200"
          >
            Get Started
          </Link>
          <Link
            href={"/register"}
            className="btn bg-white border-redText rounded-[100px] shadow-custom-2 text-md text-redText text-center font-[600] hover:scale-105 hover:bg-white hover:border-redText"
          >
            Learn More
          </Link>

              </div>
      </div>
      <div>
        <Image src={HeroBanner} alt="hero-banner" />
      </div>
    </section>
  );
}