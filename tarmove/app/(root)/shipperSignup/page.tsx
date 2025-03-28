import Link from 'next/link';
import Image from 'next/image';
import ShipperSignupForm from '@/app/components/ShipperSignupForm';

export default function ShipperSignup() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className='flex justify-center'>
            <div className="grid grid-cols-2 justify-center gap-8 lg:gap-12 px-4 sm:px-6 py-12">
                <div><Image src="/assets/shipper_bgImg.png" width={350} height={350} alt="Shipperbg Img" /></div>
                <div><ShipperSignupForm/></div>
            </div>
        </div>
    </section>
  );
}
    //   <div className="sm:mx-auto sm:w-full sm:max-w-md">
    //     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
    //       Create Shipper Account
    //     </h2>
    //     <p className="mt-2 text-center text-sm text-gray-600">
    //       Already have an account?{' '}
    //       <Link href="/shipper/login" className="font-medium text-blue-600 hover:text-blue-500">
    //         Sign in
    //       </Link>
    //     </p>
    //   </div>

    //   <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    //     <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
    //       <form className="space-y-6">
    //         <div>
    //           <label htmlFor="company" className="block text-sm font-medium text-gray-700">
    //             Company Name
    //           </label>
    //           <input
    //             id="company"
    //             name="company"
    //             type="text"
    //             required
    //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    //           />
    //         </div>

    //         <div>
    //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
    //             Email Address
    //           </label>
    //           <input
    //             id="email"
    //             name="email"
    //             type="email"
    //             autoComplete="email"
    //             required
    //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    //           />
    //         </div>

    //         <div>
    //           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
    //             Password
    //           </label>
    //           <input
    //             id="password"
    //             name="password"
    //             type="password"
    //             autoComplete="new-password"
    //             required
    //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    //           />
    //         </div>

    //         <div>
    //           <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
    //             Phone Number
    //           </label>
    //           <input
    //             id="phone"
    //             name="phone"
    //             type="tel"
    //             required
    //             className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
    //           />
    //         </div>

    //         <div className="flex items-center">
    //           <input
    //             id="terms"
    //             name="terms"
    //             type="checkbox"
    //             required
    //             className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
    //           />
    //           <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
    //             I agree to the <Link href="/terms" className="text-blue-600 hover:text-blue-500">Terms and Conditions</Link>
    //           </label>
    //         </div>

    //         <div>
    //           <button
    //             type="submit"
    //             className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    //           >
    //             Register as Shipper
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>