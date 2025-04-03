import Link from 'next/link';
import Image from 'next/image';
import TransporterLoginForm from '@/app/components/TransporterLoginForm';

export default function TransporterLogin() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12">
          {/* Image container - hidden on mobile, visible on md screens and up */}
          <div className="hidden md:block w-full lg:w-1/2 max-w-md">
            <Image 
              src="/assets/truck.png" 
              width={500} 
              height={500} 
              alt="Transporter background image"
              className="w-full h-auto object-contain"
              priority
            />
          </div>
          
          {/* Form container - full width on mobile, half width on desktop */}
          <div className="w-full lg:w-1/2 max-w-md">
            <TransporterLoginForm />
          </div>
        </div>
      </div>
    </section>
  );
}