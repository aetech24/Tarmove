import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";

const footer = () => {
  return (
    <div className="h-[444px]">
      <footer className="footer bg-[#FDFDFD] text-[#1E1E1E] p-10">
        <nav className="lg:w-[303px] md:w-[303px]">
          <Image
            src="/assets/TarmoveLogo.png"
            alt="Logo"
            className="lg:w-[172px] lg:h-[42.5px] w-[132px] h-[32.5px] "
            width={0}
            height={0}
            sizes="100vw"
          />
          <p>
            Your Partner in Seamless Logistics Across Ghana with Innovative
            Solutions
          </p>
        </nav>
        <nav>
          <h6 className="footer-title text-[#CB1130] font-[600] lg:text-[20px] text-[16px] capitalize">
            Quick Links
          </h6>
          <Link
            href=""
            className="link link-hover font-[400] text-[16px] lg:text-[20px] text-[#1E1E1E]"
          >
            Home
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]"
          >
            Services
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]"
          >
            About
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]"
          >
            Contact
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]"
          >
            Get A Quote
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-[#CB1130] font-[600] lg:text-[20px] text-[16px] capitalize">
            Contact Us
          </h6>
          <address className="link link-hover  flex flex-row items-center gap-2 font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]">
            <IoLocationOutline className="text-[#CB1130] w-[20px] h-[20px]" />
            Accra, Ghana
          </address>
          <Link
            href="tel:233 24 000 0000"
            className="link link-hover flex flex-row items-center gap-2 font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]"
          >
            <IoCallOutline className="text-[#CB1130] w-[20px] h-[20px]" />
            233 24 000 0000
          </Link>
          <Link
            href="mailto:info@tarmove.com"
            className="link link-hover flex flex-row items-center gap-2 font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]"
          >
            <IoMailOutline className="text-[#CB1130] w-[20px] h-[20px]" />
            info@tarmove.com
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title text-[#CB1130] font-[600] lg:text-[20px] text-[16px] capitalize">
            Follow Us
          </h6>
          <div className="flex flex-row md:flex-col lg:flex-row gap-3 md:items-center md:justify-center">
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]"
          >
            <Image
              src="/assets/Instagram.png"
              alt="instagram icon"
              className="lg:w-[32px] lg:h-[32px] w-[22px] h-[22px]"
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]"
          >
            <Image
              src="/assets/X.png"
              alt="X icon"
              className="lg:w-[32px] lg:h-[32px] w-[22px] h-[22px]"
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]"
          >
            <Image
              src="/assets/Facebook.png"
              alt="facebook icon"
              className="lg:w-[32px] lg:h-[32px] w-[22px] h-[22px] "
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-[#1E1E1E]"
          >
            <Image
              src="/assets/LinkedIn.png"
              alt="linkedin icon"
              className="lg:w-[32px] lg:h-[32px] w-[22px] h-[22px] "
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
          </div>
        </nav>
      </footer>
      <div className="w-[80%] h-[2px] bg-[#CCCCCCCC] my-4 flex mx-auto"></div>
      <footer className="footer bg-[#FDFDFD] text-[#1E1E1E] border-base-300 px-10 py-4 flex justify-center items-center">
        <p>© 2024 Tarmove. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default footer;
