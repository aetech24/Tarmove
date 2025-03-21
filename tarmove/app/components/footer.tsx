import React from "react";
import Image from "next/image";
import Link from "next/link";
import TramoveLogo from "@/public/assets/TarmoveLogo.png";
import Facebook from "@/public/assets/Facebook.png"
import LinkedIn from "@/public/assets/LinkedIn.png"
import Instagram from "@/public/assets/Instagram.png"
import X from "@/public/assets/X.png"
import {
  IoLocationOutline,
  IoMailOutline,
  IoCallOutline,
} from "react-icons/io5";

// Our website's footer - the bottom part of the page
// Shows who we are and helps users find important links
const Footer = () => {
  return (
    // Sets a standard height for our footer
    <div className="h-[444px]">
      {/* Footer with a light background and some padding */}
      <footer className="footer bg-background text-black p-10">
        {/* Our company info section */}
        <nav className="lg:w-[303px] md:w-[303px]">
          {/* Our cool company logo */}
          <Image
            src={TramoveLogo}
            alt="Logo"
            className="lg:w-[172px] lg:h-[42.5px] w-[132px] h-[32.5px] "
            width={0}
            height={0}
            sizes="100vw"
          />
          {/* A quick description of what we do */}
          <p>
            Your Partner in Seamless Logistics Across Ghana with Innovative
            Solutions
          </p>
        </nav>
        
        {/* Quick links to help users navigate */}
        <nav>
          {/* Title for our links */}
          <h6 className="footer-title text-redText font-[600] lg:text-[20px] text-[16px] capitalize">
            Quick Links
          </h6>
          
          {/* Links to different pages */}
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            Home
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            Services
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            About
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            Contact
          </Link>
          <Link
            href="/getquote"
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            Get A Quote
          </Link>
        </nav>
        {/* Contact info section */}
        <nav>
          {/* Title for our contact info */}
          <h6 className="footer-title text-redText font-[600] lg:text-[20px] text-[16px] capitalize">
            Contact Us
          </h6>
          {/* Address */}
          <address className="link link-hover  flex flex-row items-center gap-2 font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200">
            <IoLocationOutline className="text-redText w-[20px] h-[20px]" />
            Accra, Ghana
          </address>
          {/* Phone number */}
          <Link
            href="tel:233 24 000 0000"
            className="link link-hover flex flex-row items-center gap-2 font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            <IoCallOutline className="text-redText w-[20px] h-[20px]" />
            233 24 000 0000
          </Link>
          {/* Email */}
          <Link
            href="mailto:info@tarmove.com"
            className="link link-hover flex flex-row items-center gap-2 font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            <IoMailOutline className="text-redText w-[20px] h-[20px]" />
            info@tarmove.com
          </Link>
        </nav>
        {/* Social media links */}
        <nav>
          {/* Title for our social media links */}
          <h6 className="footer-title text-redText font-[600] lg:text-[20px] text-[16px] capitalize">
            Follow Us
          </h6>
          {/* Social media icons */}
          <div className="flex flex-row md:flex-col lg:flex-row gap-3 md:items-center md:justify-center">
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            <Image
              src={Instagram}
              alt="instagram icon"
              className="lg:w-[32px] lg:h-[32px] w-[22px] h-[22px]"
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            <Image
              src={X}
              alt="X icon"
              className="lg:w-[32px] lg:h-[32px] w-[22px] h-[22px]"
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            <Image
              src={Facebook}
              alt="facebook icon"
              className="lg:w-[32px] lg:h-[32px] w-[22px] h-[22px] "
              width={0}
              height={0}
              sizes="100vw"
            />
          </Link>
          <Link
            href=""
            className="link link-hover font-[400] lg:text-[20px] text-[16px] text-black hover:text-redText hover:no-underline duration-200"
          >
            <Image
              src={LinkedIn}
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
      {/* Horizontal line */}
      <div className="w-[80%] max-w-[1200px] h-[2px] bg-[#CCCCCC] my-4 mx-auto"></div>
      {/* Copyright info */}
      <footer className="footer bg-[#FDFDFD] text-black border-base-300 px-10 py-4 flex justify-center items-center">
        <p> 2024 Tramove. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;