import Link from 'next/link';
import Image from 'next/image';


export default function GetStartedPage() {
  return (
    <div>
        {/*Hero section*/}
        <section className="grid grid-cols-1 justify-center gap-8 lg:gap-12 px-4 sm:px-6 py-12">
            <div className='mt-8 mb-8'>
                <div className="flex justify-center">
                    <div className='text-redText border-2 border-solid rounded-full pl-4 pr-4 pt-2 pb-2'>Welcome</div>
                </div>
                <div className="flex justify-center text-5xl text-black font-bold mt-3">Join TARMOVE Today!</div>
                <div className="flex justify-center text-black mt-3">Register as a Shipper or Transporter to get started</div>    
            </div>
        </section>

        {/*Register as Shipper or Transporter section */}
        <section className="grid grid-cols-1 justify-center gap-8 lg:gap-12 px-4 sm:px-6 py-12 bg-getStartedpgcustomWhite">
            <div className='mt-8 mb-8'>
                <div className="flex justify-center">
                    <div className="grid grid-cols-2 justify-center gap-8 lg:gap-12 px-4 sm:px-6 py-12">
                        <div className="border border-solid rounded-md p-6 drop-shadow-md">
                            <div className='flex justify-center'> <Image src="/assets/Shipper_Icon.png" width={65} height={65} alt="ShipperIcon" /></div>
                            <div className='flex justify-center text-2xl text-black font-bold mt-3'>
                               Shipper 
                            </div>
                            <div className='flex justify-center text-black mt-3 font-bold'>"I need to ship goods."</div>
                            <div className='flex justify-center text-black'>Book shipments, track cargo</div>
                            <div className='flex justify-center text-black mb-10'>and manage logistics</div>
                            <Link href={'/shipperSignup'}><div className='text-redText border-2 border-solid rounded-full'><div className='flex justify-center pt-2 pb-2'>Register as Shipper</div></div></Link>
                        </div>
                        <div className="border border-solid rounded-md p-6 drop-shadow-md">
                            <div className='flex justify-center'> <Image src="/assets/Transporter_Icon.png" width={65} height={65} alt="TransporterIcon" /></div>
                            <div className='flex justify-center text-2xl text-black font-bold mt-3'>
                               Transporter 
                            </div>
                            <div className='flex justify-center text-black mt-3 font-bold'>"I provide Transportation</div>
                            <div className='flex justify-center text-black font-bold'>services."</div>
                            <div className='flex justify-center text-black'>Find shipments, manage fleets</div>
                            <div className='flex justify-center mb-4 text-black'>and earn money</div>
                            <Link href={'/transporterSignup'}><div className='text-redText border-2 border-solid rounded-full pt-2 pb-2'><div className='flex justify-center'>Register as Transporter</div></div></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
)}
      