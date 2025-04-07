import Link from 'next/link';
import Image from 'next/image';

export default function GetStartedPage() {
  const cards = [
    {
      key: "shipper",
      title: "Shipper",
      description: "I need to ship goods.",
      details: "Book shipments, track cargo, and manage logistics.",
      link: "/shipperSignup",
      alt: "Shipper Icon"
    },
    {
      key: "transporter",
      title: "Transporter",
      description: "I provide Transportation services.",
      details: "Find shipments, manage fleets, and earn money.",
      link: "/transporterSignup",
      image: "/assets/Transporter_Icon.png",
      alt: "Transporter Icon"
    }
  ];

  return (
    <div>
      {/* Hero section */}
      <section className="grid grid-cols-1 justify-center gap-8 lg:gap-12 px-4 sm:px-6 py-12">
        <div className="mt-8 mb-8 text-center">
          <div className="inline-block text-redText border-2 border-solid rounded-full px-4 py-2">Welcome</div>
          <h1 className="text-5xl text-black font-bold mt-3">Join TRAMOVE Today!</h1>
          <p className="text-black mt-3">Register as a Shipper or Transporter to get started</p>
        </div>
      </section>

      {/* Register as Shipper or Transporter section */}
      <section className="px-4 sm:px-6 py-12 bg-getStartedpgcustomWhite">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          
          {cards.map(({ key, title, description, details, link, image, alt }) => (
            <div key={key} className="border border-solid rounded-md p-6 drop-shadow-md text-center">
              <Image src={image} width={65} height={65} alt={alt} className="mx-auto" />
              <h2 className="text-2xl text-black font-bold mt-3">{title}</h2>
              <p className="text-black mt-3 font-bold">&quot;{description}&quot;</p>
              <p className="text-black">{details}</p>
              <Link href={link}>
                <div className="mt-6 text-redText border-2 border-solid rounded-full px-6 py-2 hover:bg-redText hover:text-white transition duration-300 cursor-pointer">
                  Register as {title}
                </div>
              </Link>
            </div>
          ))}
          
        </div>
      </section>
    </div>
  );
}
