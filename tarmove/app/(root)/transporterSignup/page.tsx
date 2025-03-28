import Link from 'next/link';
import Image from 'next/image';
import TransporterSignupForm from '@/app/components/TransporterSignupForm'

export default function TransporterSignup() {
  return (
   <section className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
           <div className='flex justify-center'>
               <div className="grid grid-cols-2 justify-center gap-8 lg:gap-12 px-4 sm:px-6 py-12">
                   <div><Image src="/assets/truck.png" width={350} height={350} alt="Shipperbg Img" /></div>
                   <div><TransporterSignupForm/></div>
               </div>
           </div>
       </section>
  );
}