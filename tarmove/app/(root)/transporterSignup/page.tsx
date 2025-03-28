import Link from 'next/link';

export default function TransporterSignup() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img
          className="mx-auto h-12 w-auto"
          src="/logo-transport.png" // Replace with your logo
          alt="Transport Company"
        />
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Transporter Registration
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Join our network of trusted carriers
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6">
            {/* Transport Company Info */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Transport Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Fleet Information */}
            <div>
              <label htmlFor="fleetSize" className="block text-sm font-medium text-gray-700">
                Fleet Size (Number of Vehicles)
              </label>
              <select
                id="fleetSize"
                name="fleetSize"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="1-5">1-5 vehicles</option>
                <option value="6-20">6-20 vehicles</option>
                <option value="21-50">21-50 vehicles</option>
                <option value="50+">50+ vehicles</option>
              </select>
            </div>

            {/* Vehicle Types */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Types Available
              </label>
              <div className="space-y-2">
                {['Box Truck', 'Flatbed', 'Refrigerated', 'Tanker', 'Dry Van'].map((type) => (
                  <div key={type} className="flex items-center">
                    <input
                      id={type}
                      name="vehicleTypes"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label htmlFor={type} className="ml-2 block text-sm text-gray-900">
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700">
                Contact Person
              </label>
              <input
                id="contactPerson"
                name="contactPerson"
                type="text"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Business Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Service Areas */}
            <div>
              <label htmlFor="serviceAreas" className="block text-sm font-medium text-gray-700">
                Service Areas (States/Regions)
              </label>
              <input
                id="serviceAreas"
                name="serviceAreas"
                type="text"
                placeholder="e.g. CA, TX, NY"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Terms and Submit */}
            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
                I agree to the <Link href="/terms" className="text-blue-600 hover:text-blue-500">Transportation Agreement</Link>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Register as Transporter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}