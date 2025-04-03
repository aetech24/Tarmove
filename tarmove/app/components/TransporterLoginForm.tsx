'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function TransporterLoginForm() {
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
      // authentication logic here
    }
  };

  return (
    <article className="rounded-md border-gray-300 shadow-sm p-8 bg-getStartedpgcustomWhite">
      <header className="text-center mb-8">
        <figure className="flex justify-center mb-4">
          <Image 
            src="/assets/Transporter_Icon.png" 
            width={65} 
            height={65} 
            alt="Transporter Icon"
            aria-hidden="true"
          />
        </figure>
        <h1 className="text-3xl text-black font-bold mb-2">Transporter Login</h1>
        <p className="text-black">Access your transporter account to manage your fleet</p>
      </header>

      <form onSubmit={handleSubmit} noValidate>
        <div className='mb-5'>
          <label htmlFor="email" className="block text-sm font-semibold text-black mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder='Enter your email address'
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={`block w-full rounded-md border-gray-300 shadow-sm p-2 bg-getStartedpgcustomWhite focus:border-blue-500 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border'}`}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.email}
            </p>
          )}
        </div>

        <div className='mb-5'>
          <label htmlFor="password" className="block text-sm font-semibold text-black mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder='Enter your password'
            value={formData.password}
            onChange={(e) => handleChange('password', e.target.value)}
            className={`block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.password ? 'border-red-500' : 'border'}`}
            aria-describedby={errors.password ? "password-error" : undefined}
            required
          />
          {errors.password && (
            <p id="password-error" className="mt-1 text-sm text-red-600" role="alert">
              {errors.password}
            </p>
          )}
        </div>

        <div className="mb-6 text-right">
          <Link href="/forgot-password" className="text-black hover:text-redText transition-colors">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="btn w-full bg-gradient-to-b from-[#DD1234] to-[#B30F2A] border-none rounded-[100px] shadow-custom-2 text-[17px] text-[#FFFFFF] font-[600] hover:scale-105 duration-200 hover:opacity-80 py-3"
        >
          Sign In
        </button>
      </form>

      <footer className="text-center mt-6">
        <p className="text-black">
          Don't have an account?{' '}
          <Link href="/shipperSignup" className="text-redText hover:underline ml-1">
            Sign up
          </Link>
        </p>
      </footer>
    </article>
  );
}