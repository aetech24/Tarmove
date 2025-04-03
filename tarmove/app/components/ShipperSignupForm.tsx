'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Select from 'react-select';

type FormData = {
  step1: {
    fullName: string;
    email: string;
    phone: string;
  };
  step2: {
    companyName: string;
    Industry: string;
  };
  step3: {
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
  };
};

export default function MultiStepSignupForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    step1: {
      fullName: '',
      email: '',
      phone: '',
    },
    step2: {
      companyName: '',
      Industry: '',
    },
    step3: {
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.step1.fullName) newErrors.step1 = { ...newErrors.step1, fullName: 'Full name is required' };
      if (!formData.step1.email) {
        newErrors.step1 = { ...newErrors.step1, email: 'Email is required' };
      } else if (!/^\S+@\S+\.\S+$/.test(formData.step1.email)) {
        newErrors.step1 = { ...newErrors.step1, email: 'Please enter a valid email' };
      }
      if (!formData.step1.phone) newErrors.step1 = { ...newErrors.step1, phone: 'Phone number is required' };
    }

    if (step === 3) {
      if (!formData.step3.password) {
        newErrors.step3 = { ...newErrors.step3, password: 'Password is required' };
      } else if (formData.step3.password.length < 8) {
        newErrors.step3 = { ...newErrors.step3, password: 'Password must be at least 8 characters' };
      }
      if (formData.step3.password !== formData.step3.confirmPassword) {
        newErrors.step3 = { ...newErrors.step3, confirmPassword: 'Passwords do not match' };
      }
      if (!formData.step3.acceptTerms) {
        newErrors.step3 = { ...newErrors.step3, acceptTerms: 'You must accept the terms and conditions' };
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    step: keyof FormData,
    field: string,
    value: string | boolean
  ) => {
    setFormData(prev => ({
      ...prev,
      [step]: { ...prev[step], [field]: value }
    }));
    // Clear error when user types
    if (errors[step]?.[field as keyof typeof errors[typeof step]]) {
      setErrors(prev => ({
        ...prev,
        [step]: { ...prev[step], [field]: '' }
      }));
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(3)) {
      try {
        const response = await fetch('/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData.step1,
            ...formData.step2,
            ...formData.step3,
          }),
        });

        if (response.ok) {
          router.push('/dashboard');
        } else {
          throw new Error('Signup failed');
        }
      } catch (error) {
        console.error('Signup error:', error);
      }
    }
  };

  const industryOptions = [
    { value: 'Technology', label: 'Technology' },
    { value: 'Healthcare', label: 'Healthcare' },
    { value: 'Finance', label: 'Finance' },
    { value: 'Education', label: 'Education' },
    { value: 'Manufacturing', label: 'Manufacturing' },
    { value: 'Retail', label: 'Retail' },
    { value: 'Transportation', label: 'Transportation' },
    { value: 'Construction', label: 'Construction' },
    { value: 'Hospitality', label: 'Hospitality' },
  ];

  return (
    <article className="max-w-md mx-auto p-6 bg-getStartedpgcustomWhite rounded-lg shadow-md">
      {/* Progress Indicator */}
      <div className="flex justify-end" aria-label="Form progress">     
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-gray-100">
          <span className="font-medium text-gray-700">
             {currentStep}/3
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Step 1: Personal Info */}
        {currentStep === 1 && (
          <section aria-labelledby="personal-info-heading">
            <header className="text-center mb-8">
              <figure className="flex justify-center mb-4">
                <Image 
                  src="/assets/Shipper_Icon.png" 
                  width={65} 
                  height={65} 
                  alt="Shipper Icon"
                  aria-hidden="true"
                />
              </figure>
              <h1 id="personal-info-heading" className="text-3xl text-black font-bold mb-2">
                Sign up as a Shipper
              </h1>
              <p className="text-black">
                Book shipments, track cargo and manage logistics with ease
              </p>
            </header>

            <h2 className="text-xl font-semibold text-black mb-4">Personal Information</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-black mb-1">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.step1.fullName}
                  onChange={(e) => handleChange('step1', 'fullName', e.target.value)}
                  className={`block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step1?.fullName ? 'border-red-500' : 'border'}`}
                  aria-describedby={errors.step1?.fullName ? "fullName-error" : undefined}
                  required
                />
                {errors.step1?.fullName && (
                  <p id="fullName-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.step1.fullName}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.step1.email}
                  onChange={(e) => handleChange('step1', 'email', e.target.value)}
                  className={`block w-full rounded-md border-gray-300 shadow-sm p-2 bg-getStartedpgcustomWhite focus:border-blue-500 focus:ring-blue-500 ${errors.step1?.email ? 'border-red-500' : 'border'}`}
                  aria-describedby={errors.step1?.email ? "email-error" : undefined}
                  required
                />
                {errors.step1?.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.step1.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-black mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.step1.phone}
                  onChange={(e) => handleChange('step1', 'phone', e.target.value)}
                  className={`block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step1?.phone ? 'border-red-500' : 'border'}`}
                  aria-describedby={errors.step1?.phone ? "phone-error" : undefined}
                  required
                />
                {errors.step1?.phone && (
                  <p id="phone-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.step1.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-6">
              <button
                type="button"
                onClick={nextStep}
                className="btn w-full bg-gradient-to-b from-[#DD1234] to-[#B30F2A] border-none rounded-[100px] shadow-custom-2 text-[17px] text-white font-semibold py-3 hover:scale-105 duration-200 hover:opacity-80"
              >
                Next
              </button>
            </div>

            <footer className="text-center mt-4">
              <p className="text-black">
                Already have an account?{' '}
                <Link href="/shipperLogin" className="text-redText hover:underline">
                  Login
                </Link>
              </p>
            </footer>
          </section>
        )}

        {/* Step 2: Company Info */}
        {currentStep === 2 && (
          <section aria-labelledby="company-info-heading">
            <header className="text-center mb-8">
              <figure className="flex justify-center mb-4">
                <Image 
                  src="/assets/Shipper_Icon.png" 
                  width={65} 
                  height={65} 
                  alt="Shipper Icon"
                  aria-hidden="true"
                />
              </figure>
              <h1 id="company-info-heading" className="text-3xl text-black font-bold mb-2">
                Sign up as a Shipper
              </h1>
              <p className="text-black">
                Book shipments, track cargo and manage logistics with ease
              </p>
            </header>

            <h2 className="text-xl font-semibold text-black mb-4">Company Information (Optional)</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-black mb-1">
                  Company Name
                </label>
                <input
                  id="companyName"
                  type="text"
                  placeholder="Enter the name of your company"
                  value={formData.step2.companyName}
                  onChange={(e) => handleChange('step2', 'companyName', e.target.value)}
                  className={`block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step2?.companyName ? 'border-red-500' : 'border'}`}
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-black mb-1">
                  Industry
                </label>
                <Select
                  inputId="industry"
                  options={industryOptions}
                  value={industryOptions.find(opt => opt.value === formData.step2.Industry)}
                  onChange={(selected) => handleChange('step2', 'Industry', selected?.value || '')}
                  placeholder="Select your industry"
                  className="mt-1"
                  styles={{
                    control: (base) => ({
                      ...base,
                      borderColor: errors.step2?.Industry ? '#ef4444' : '#d1d5db',
                      borderRadius: '0.375rem',
                      padding: '0.5rem',
                      backgroundColor: '#yourCustomWhiteColor',
                    }),
                  }}
                />
              </div>
            </div>

            <div className="flex justify-between mt-6 space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="btn w-1/2 bg-white border border-gray-300 rounded-[100px] shadow-sm text-[17px] text-gray-700 font-semibold py-3 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                type="button"
                onClick={nextStep}
                className="btn w-1/2 bg-gradient-to-b from-[#DD1234] to-[#B30F2A] border-none rounded-[100px] shadow-custom-2 text-[17px] text-white font-semibold py-3 hover:scale-105 duration-200 hover:opacity-80"
              >
                Next
              </button>
            </div>

            <footer className="text-center mt-4">
              <p className="text-black">
                Already have an account?{' '}
                <Link href="/shipperLogin" className="text-redText hover:underline">
                  Login
                </Link>
              </p>
            </footer>
          </section>
        )}

        {/* Step 3: Account Setup */}
        {currentStep === 3 && (
          <section aria-labelledby="account-setup-heading">
            <header className="text-center mb-8">
              <figure className="flex justify-center mb-4">
                <Image 
                  src="/assets/Shipper_Icon.png" 
                  width={65} 
                  height={65} 
                  alt="Shipper Icon"
                  aria-hidden="true"
                />
              </figure>
              <h1 id="account-setup-heading" className="text-3xl text-black font-bold mb-2">
                Sign up as a Shipper
              </h1>
              <p className="text-black">
                Book shipments, track cargo and manage logistics with ease
              </p>
            </header>

            <h2 className="text-xl font-semibold text-black mb-4">Account Setup</h2>

            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
                  Create Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.step3.password}
                    onChange={(e) => handleChange('step3', 'password', e.target.value)}
                    className={`block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step3?.password ? 'border-red-500' : 'border'}`}
                    aria-describedby={errors.step3?.password ? "password-error" : undefined}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                      </svg>
                    )}
                  </button>
                </div>
                {errors.step3?.password && (
                  <p id="password-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.step3.password}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-black mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    value={formData.step3.confirmPassword}
                    onChange={(e) => handleChange('step3', 'confirmPassword', e.target.value)}
                    className={`block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step3?.confirmPassword ? 'border-red-500' : 'border'}`}
                    aria-describedby={errors.step3?.confirmPassword ? "confirmPassword-error" : undefined}
                    required
                  />
                </div>
                {errors.step3?.confirmPassword && (
                  <p id="confirmPassword-error" className="mt-1 text-sm text-red-600" role="alert">
                    {errors.step3.confirmPassword}
                  </p>
                )}
              </div>

              <div className="flex items-start mt-4">
                <div className="flex items-center h-5">
                  <input
                    id="acceptTerms"
                    type="checkbox"
                    checked={formData.step3.acceptTerms}
                    onChange={(e) => handleChange('step3', 'acceptTerms', e.target.checked)}
                    className={`h-4 w-4 rounded border-gray-300 bg-white ${errors.step3?.acceptTerms ? 'border-red-500' : 'border'}`}
                    aria-describedby={errors.step3?.acceptTerms ? "terms-error" : undefined}
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="acceptTerms" className="font-medium text-gray-700">
                    I agree to the{' '}
                    <Link href="#" className="text-redText underline hover:no-underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link href="#" className="text-redText underline hover:no-underline">
                      Privacy Policy
                    </Link>
                  </label>
                  {errors.step3?.acceptTerms && (
                    <p id="terms-error" className="mt-1 text-red-600" role="alert">
                      {errors.step3.acceptTerms}
                    </p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex justify-between mt-6 space-x-4">
              <button
                type="button"
                onClick={prevStep}
                className="btn w-1/2 bg-white border border-gray-300 rounded-[100px] shadow-sm text-[17px] text-gray-700 font-semibold py-3 hover:bg-gray-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="btn w-1/2 bg-gradient-to-b from-[#DD1234] to-[#B30F2A] border-none rounded-[100px] shadow-custom-2 text-[17px] text-white font-semibold py-3 hover:scale-105 duration-200 hover:opacity-80"
              >
                Sign Up
              </button>
            </div>

            <footer className="text-center mt-4">
              <p className="text-black">
                Already have an account?{' '}
                <Link href="/shipperLogin" className="text-redText hover:underline">
                  Login
                </Link>
              </p>
            </footer>
          </section>
        )}
      </form>
    </article>
  );
}