import Image from 'next/image';
import ShipperLoginForm from '@/app/components/ShipperLoginForm';
import ShipperLoginImage from '@/public/assets/shipper_bgImg.png';

export default function ShipperLogin() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <div className="grid lg:grid-cols-2 justify-center gap-8 lg:gap-12 px-4 sm:px-6 py-12 w-full max-w-6xl">
          
          {/* Image section */}
          <div className="flex lg:block relative h-[500px]">
            <Image src={ShipperLoginImage} alt="Shipper background" fill className="object-contain" priority />
          </div>

          {/* Login Form (Client-Side) */}
          <ShipperLoginForm />
          
        </div>
      </div>
    </section>
  );
}
