import Link from 'next/link';
import Image from 'next/image';
import ShipperSignupForm from '@/app/components/ShipperSignupForm';

export default function ShipperSignup() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          {/* Image container - hidden on small screens if needed */}
          <div className="hidden md:block w-full lg:w-1/2 max-w-md">
            <Image 
              src="/assets/shipper_bgImg.png" 
              width={500} 
              height={500} 
              alt="Shipper background image"
              className="w-full h-auto object-contain"
            />
          </div>
          
          {/* Form container - full width on small screens, half on larger */}
          <div className="w-full lg:w-1/2 max-w-md">
            <ShipperSignupForm/>
          </div>
        </div>
      </div>
    </section>
  );
}
