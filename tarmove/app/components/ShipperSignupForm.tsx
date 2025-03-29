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
    phone: string; // Changed from BigInteger to string
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
      if (!formData.step1.fullName) newErrors.step1 = { ...newErrors.step1, fullName: 'Required' };
      if (!formData.step1.email) {
        newErrors.step1 = { ...newErrors.step1, email: 'Required' };
      } else if (!/^\S+@\S+\.\S+$/.test(formData.step1.email)) {
        newErrors.step1 = { ...newErrors.step1, email: 'Invalid email' };
      }
      if (!formData.step1.phone) newErrors.step1 = { ...newErrors.step1, phone: 'Required' };
    }

    if (step === 2) {
      // Removed validation for optional fields
    }

    if (step === 3) {
      if (!formData.step3.password) {
        newErrors.step3 = { ...newErrors.step3, password: 'Required' };
      } else if (formData.step3.password.length < 8) {
        newErrors.step3 = { ...newErrors.step3, password: 'Minimum 8 characters' };
      }
      if (formData.step3.password !== formData.step3.confirmPassword) {
        newErrors.step3 = { ...newErrors.step3, confirmPassword: 'Passwords must match' };
      }
      if (!formData.step3.acceptTerms) {
        newErrors.step3 = { ...newErrors.step3, acceptTerms: 'You must accept the terms' };
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
    <div className="max-w-md mx-auto p-6 bg-getStartedpgcustomWhite rounded-lg shadow-md">
      {/* Progress Indicator */}
      <div className="flex justify-end">     
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full">
          <span className="font-medium">
            {currentStep}/3
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Info */}
        {currentStep === 1 && (
          <div className="">
            <div className='flex justify-center'><Image src="/assets/Shipper_Icon.png" width={65} height={65} alt="ShipperIcon" /></div>
            <div className='flex justify-center text-3xl text-black font-bold'>Sign up as a Shipper</div>
            <div className='flex justify-center text-black'>Book Shipments, track cargo and manage logistics</div>
            <div className='flex justify-center text-black mb-6'>with ease</div>
            <h2 className="text-xl font-semibold text-black mb-3">Personal Information</h2>

            {/* Form fields for step 1 */}
            <div className='mb-5'>
              <label className="block text-sm font-medium text-black">Full Name</label>
              <input
                type="text"
                placeholder='Enter your full name'
                value={formData.step1.fullName}
                onChange={(e) => handleChange('step1', 'fullName', e.target.value)}
                className={`mt-1 block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step1?.fullName ? 'border-red-500' : 'border'}`}
              />
              {errors.step1?.fullName && <p className="mt-1 text-sm text-red-600">{errors.step1.fullName}</p>}
            </div>

            <div className='mb-5'>
              <label className="block text-sm font-medium text-black">Email Address</label>
              <input
                type="email"
                placeholder='Enter your email address'
                value={formData.step1.email}
                onChange={(e) => handleChange('step1', 'email', e.target.value)}
                className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm p-2 bg-getStartedpgcustomWhite focus:border-blue-500 focus:ring-blue-500 ${errors.step1?.email ? 'border-red-500' : 'border'}`}
              />
              {errors.step1?.email && <p className="mt-1 text-sm text-red-600">{errors.step1.email}</p>}
            </div>

            <div className='mb-5'>
              <label className="block text-sm font-medium text-black">Phone</label>
              <input
                type="tel"
                placeholder='Enter your phone number'
                value={formData.step1.phone}
                onChange={(e) => handleChange('step1', 'phone', e.target.value)}
                className={`mt-1 block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step1?.phone ? 'border-red-500' : 'border'}`}
              />
              {errors.step1?.phone && <p className="mt-1 text-sm text-red-600">{errors.step1.phone}</p>}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="btn w-full bg-gradient-to-b from-[#DD1234] to-[#B30F2A] border-none rounded-[100px] shadow-custom-2 text-[17px] text-[#FFFFFF] font-[600] hover:scale-105 duration-200 hover:opacity-80"
              >
                Next
              </button>
            </div>
            <Link href={'/shipperLogin'}>
              <div className='flex justify-center mt-3 text-black'>Already have an account? <span className='text-redText ml-2'> Login</span></div>
            </Link>
          </div>
        )}

        {/* Step 2: Company Info */}
        {currentStep === 2 && (
          <div className="">
            <div className='flex justify-center'><Image src="/assets/Shipper_Icon.png" width={65} height={65} alt="ShipperIcon" /></div>
            <div className='flex justify-center text-3xl text-black font-bold'>Sign up as a Shipper</div>
            <div className='flex justify-center text-black'>Book Shipments, track cargo and manage logistics</div>
            <div className='flex justify-center text-black mb-6'>with ease</div>
            <h2 className="text-xl font-semibold text-black mb-3">Company Information (Optional)</h2>

            <div className='mb-5'>
              <label className="block text-sm font-medium text-black">Company Name</label>
              <input
                type="text"
                placeholder='Enter the name of your company'
                value={formData.step2.companyName}
                onChange={(e) => handleChange('step2', 'companyName', e.target.value)}
                className={`mt-1 block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step2?.companyName ? 'border-red-500' : 'border'}`}
              />
              {errors.step2?.companyName && <p className="mt-1 text-sm text-red-600">{errors.step2.companyName}</p>}
            </div>

            <div className='mb-5'>
              <label className="block text-sm font-medium text-black">Industry</label>
              <Select
                options={industryOptions}
                value={industryOptions.find(opt => opt.value === formData.step2.Industry)}
                onChange={(selected) => handleChange('step2', 'Industry', selected?.value || '')}
                placeholder="Select your industry"
                className={`mt-1 ${errors.step2?.Industry ? 'border-red-500' : ''}`}
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
              {errors.step2?.Industry && <p className="mt-1 text-sm text-red-600">{errors.step2.Industry}</p>}
            </div>

            <div className="flex justify-end">
              <button
                type="button"
                onClick={nextStep}
                className="btn w-full bg-gradient-to-b from-[#DD1234] to-[#B30F2A] border-none rounded-[100px] shadow-custom-2 text-[17px] text-[#FFFFFF] font-[600] hover:scale-105 duration-200 hover:opacity-80"
              >
                Next
              </button>
            </div>
            <Link href={'/shipperLogin'}>
              <div className='flex justify-center mt-3 text-black'>Already have an account? <span className='text-redText ml-2'> Login</span></div>
            </Link>
          </div>
        )}

        {/* Step 3: Account Setup */}
        {currentStep === 3 && (
        <div className="">
            <div className='flex justify-center'><Image src="/assets/Shipper_Icon.png" width={65} height={65} alt="ShipperIcon" /></div>
            <div className='flex justify-center text-3xl text-black font-bold'>Sign up as a Shipper</div>
            <div className='flex justify-center text-black'>Book Shipments, track cargo and manage logistics</div>
            <div className='flex justify-center text-black mb-6'>with ease</div>
            <h2 className="text-xl font-semibold text-black mb-3">Password</h2>
        {/* ... other content ... */}

        <div className='mb-5 relative'>
        <label className="block text-sm font-medium text-black">Create Password</label>
        <div className="relative">
            <input
            type={showPassword ? "text" : "password"}
            placeholder='Enter your password'
            value={formData.step3.password}
            onChange={(e) => handleChange('step3', 'password', e.target.value)}
            className={`mt-1 block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step3?.password ? 'border-red-500' : 'border'}`}
            />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            style={{ top: '0px' }} // Adjust based on your label height
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
        {errors.step3?.password && <p className="mt-1 text-sm text-red-600">{errors.step3.password}</p>}
        </div>

        <div className='mb-5 relative'>
        <label className="block text-sm font-medium text-black">Confirm Password</label>
        <div className="relative">
            <input
            type={showPassword ? "text" : "password"}
            placeholder='Confirm your password'
            value={formData.step3.confirmPassword}
            onChange={(e) => handleChange('step3', 'confirmPassword', e.target.value)}
            className={`mt-1 block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step3?.confirmPassword ? 'border-red-500' : 'border'}`}
            />
            <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
            style={{ top: '0px' }}
            >
            {/* Same eye icon as above */}
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
        {errors.step3?.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.step3.confirmPassword}</p>}
        </div>

            {/* Terms and Conditions */}
        <div className="flex items-start mb-5">
              <div className="flex items-center h-5 bg-#fff">
                <input
                  type="checkbox"
                  checked={formData.step3.acceptTerms}
                  onChange={(e) => handleChange('step3', 'acceptTerms', e.target.checked)}
                  className={`h-4 w-4 rounded border-gray-300 bg-white ${errors.step3?.acceptTerms ? 'border-red-500' : 'border'}`}
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700">
                  I agree to the <a href="#" className="text-redText underline">Terms of Service</a> and <a href="#" className="text-redText underline">Privacy Policy</a>
                </label>
                {errors.step3?.acceptTerms && <p className="mt-1 text-red-600">{errors.step3.acceptTerms}</p>}
              </div>
            </div>

        <div className="flex justify-end">
            <button
            type="submit"
            className="btn w-full bg-gradient-to-b from-[#DD1234] to-[#B30F2A] border-none rounded-[100px] shadow-custom-2 text-[17px] text-[#FFFFFF] font-[600] hover:scale-105 duration-200 hover:opacity-80"
            >
            SignUp
            </button>
        </div>
        <Link href={'/shipperLogin'}>
            <div className='flex justify-center mt-3 text-black'>Already have an account? <span className='text-redText ml-2'> Login</span></div>
        </Link>
        </div>
)}
      </form>
    </div>
  );
}