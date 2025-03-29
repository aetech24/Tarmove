'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ShipperLogin() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user types
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '' };

    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle login logic here
      console.log('Login data:', formData);
      // Add your authentication logic
    }
  };

  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className='flex justify-center'>
        <div className="grid grid-cols-2 justify-center gap-8 lg:gap-12 px-4 sm:px-6 py-12">
          <div><Image src="/assets/shipper_bgImg.png" width={350} height={350} alt="Shipperbg Img" /></div>
          <div className=''>
            <div className="rounded-md border-gray-300 shadow-sm p-8 bg-getStartedpgcustomWhite">
              <div className='flex justify-center'><Image src="/assets/Shipper_Icon.png" width={65} height={65} alt="ShipperIcon" /></div>
              <div className='flex justify-center text-3xl text-black font-bold'>Shipper Login</div>
              <div className='flex justify-center text-black'>Access your shipper account to manage your</div>
              <div className='flex justify-center text-black mb-6'>logistics</div>
              <form onSubmit={handleSubmit}>
                <div className='mb-5'>
                  <label className="block text-sm font-semibold text-black">Email Address</label>
                  <input
                    type="email"
                    placeholder='Enter your email address'
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-getStartedpgcustomWhite focus:border-blue-500 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border'}`}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div className='mb-5'>
                  <label className="block text-sm font-semibold text-black">Password</label>
                  <input
                    type="password"
                    placeholder='Enter your password'
                    value={formData.password}
                    onChange={(e) => handleChange('password', e.target.value)}
                    className={`mt-1 block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border'}`}
                  />
                  {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
                </div>

              <Link href={'/forgot-password'}>
                <div className='flex justify-end mt-3 text-black mb-3'>Forgot password?</div>
              </Link>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="btn w-full bg-gradient-to-b from-[#DD1234] to-[#B30F2A] border-none rounded-[100px] shadow-custom-2 text-[17px] text-[#FFFFFF] font-[600] hover:scale-105 duration-200 hover:opacity-80"
                  >
                    Sign In
                  </button>
                </div>
              </form>

              <Link href={'/shipperSignup'}>
                <div className='flex justify-center mt-3 text-black'>Don't have an account? <span className='text-redText ml-2'> Sign up</span></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}