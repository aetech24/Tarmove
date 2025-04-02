import Image from "next/image";
export function GetQuoteBanner() {
    return (
             <div className="grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex justify-center lg:justify-end w-full lg:order-2">
          <Image
            src="/assets/GetQuoteHero.png"
            className="lg:w-[570px] lg:h-[520px] md:w-[570px] md:h-[520px] w-[300px] h-[300px]"
            alt="Get Quote"
            width={570}
            height={520}
            sizes="(max-width: 768px) 300px, 570px"
          />
        </div>

        <div className="max-w-[530px] flex flex-col items-center lg:items-start gap-8">
          <p className="text-[18px] text-redText font-[400] bg-background  p-2 text-center lg:text-left">
            Shipping Made Simple
          </p>

          <h1 className="text-5xl font-bold text-center lg:text-left text-black">
            Get a <span className="text-redText">Quote</span> in Minutes
          </h1>

          <p className="py-6 text-center lg:text-left text-black">
            Tell us about your shipment, and we&apos;ll handle the rest. Fast,
            reliable, and hassle-free shipping solutions for your business.
          </p>
        </div>
      </div>

    )
}