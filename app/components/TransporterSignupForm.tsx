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
    noofVehicles: string;
    VehicleTypes: string[];
    TotalCapacity: string;
    OperationArea: string;
  };
  step3: {
    documents: File[];
  };
  step4: {
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
      noofVehicles: '',
      VehicleTypes: [],
      TotalCapacity: '',
      OperationArea: '',
    },
    step3: {
      documents: [],
    },
    step4: {
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const OperationAreaOptions = [
    { value: 'Accra', label: 'Accra' },
    { value: 'Tema', label: 'Tema' },
    { value: 'Kasoa', label: 'Kasoa' },
    { value: 'Kumasi', label: 'Kumasi' },
    { value: 'Ho', label: 'Ho' },
    { value: 'Koforidua', label: 'Koforidua' },
    { value: 'Tamale', label: 'Tamale' },
    { value: 'Bolgatanga', label: 'Bolgatanga' },
    { value: 'Brong-Ahafo', label: 'Brong-Ahafo' },
  ];

  const VehicleTypeOptions = [
    { value: 'box_truck', label: 'Box Truck' },
    { value: 'flatbed', label: 'Flatbed' },
    { value: 'refrigerated', label: 'Refrigerated' },
    { value: 'tanker', label: 'Tanker' },
    { value: 'dry_van', label: 'Dry Van' },
    { value: 'container', label: 'Container' },
    { value: 'lowboy', label: 'Lowboy' },
  ];

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

    if (step === 4) {
      if (!formData.step4.password) {
        newErrors.step4 = { ...newErrors.step4, password: 'Required' };
      } else if (formData.step4.password.length < 8) {
        newErrors.step4 = { ...newErrors.step4, password: 'Minimum 8 characters' };
      }
      if (formData.step4.password !== formData.step4.confirmPassword) {
        newErrors.step4 = { ...newErrors.step4, confirmPassword: 'Passwords must match' };
      }
      if (!formData.step4.acceptTerms) {
        newErrors.step4 = { ...newErrors.step4, acceptTerms: 'You must accept the terms' };
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    step: keyof FormData,
    field: string,
    value: string | boolean | string[]
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

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        step3: {
          ...prev.step3,
          documents: [...prev.step3.documents, ...files]
        }
      }));
    }
  };

  const removeDocument = (index: number) => {
    setFormData(prev => {
      const updatedDocs = [...prev.step3.documents];
      updatedDocs.splice(index, 1);
      return {
        ...prev,
        step3: {
          ...prev.step3,
          documents: updatedDocs
        }
      };
    });
  };

  const skipStep = () => {
    setCurrentStep(prev => prev + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      try {
        const formDataToSend = new FormData();
        
        // Append all form data
        Object.entries(formData.step1).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });
        
        Object.entries(formData.step2).forEach(([key, value]) => {
          if (key === 'VehicleTypes') {
            formDataToSend.append(key, JSON.stringify(value));
          } else {
            formDataToSend.append(key, value);
          }
        });
        
        formData.step3.documents.forEach((file, index) => {
          formDataToSend.append(`documents_${index}`, file);
        });
        
        Object.entries(formData.step4).forEach(([key, value]) => {
          formDataToSend.append(key, value.toString());
        });

        const response = await fetch('/api/signup', {
          method: 'POST',
          body: formDataToSend,
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

  return (
    <div className="max-w-md mx-auto p-6 bg-getStartedpgcustomWhite rounded-lg shadow-md">
      {/* Progress Indicator */}
      <div className="flex justify-end">     
        <div className="inline-flex items-center justify-center px-4 py-2 rounded-full">
          <span className="font-medium">
            {currentStep}/4
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Info */}
        {currentStep === 1 && (
          <div className="">
            <div className='flex justify-center'><Image src="/assets/Transporter_Icon.png" width={65} height={65} alt="TransporterIcon" /></div>
            <div className='flex justify-center text-3xl text-black font-bold'>Sign up as a Transporter</div>
            <div className='flex justify-center text-black'>Find Shipments, manage fleets and earn money with</div>
            <div className='flex justify-center text-black mb-6'>Tarmove</div>
            <h2 className="text-xl font-semibold text-black mb-3">Personal Information</h2>

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
            <Link href={'/transporterLogin'}>
              <div className='flex justify-center mt-3 text-black'>Already have an account? <span className='text-redText ml-2'> Login</span></div>
            </Link>
          </div>
        )}

        {/* Step 2: Fleet Information */}
        {currentStep === 2 && (
          <div className="">
            <div className='flex justify-center'><Image src="/assets/Transporter_Icon.png" width={65} height={65} alt="TransporterIcon" /></div>
            <div className='flex justify-center text-3xl text-black font-bold'>Sign up as a Transporter</div>
            <div className='flex justify-center text-black'>Find Shipments, manage fleets and earn money with</div>
            <div className='flex justify-center text-black mb-6'>Tarmove</div>
            <h2 className="text-xl font-semibold text-black mb-3">Fleet Information</h2>

            <div className='mb-5'>
              <label className="block text-sm font-medium text-black">Number of Vehicles</label>
              <input
                type="text"
                placeholder='Enter number of vehicles'
                value={formData.step2.noofVehicles}
                onChange={(e) => handleChange('step2', 'noofVehicles', e.target.value)}
                className={`mt-1 block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step2?.noofVehicles ? 'border-red-500' : 'border'}`}
              />
              {errors.step2?.noofVehicles && <p className="mt-1 text-sm text-red-600">{errors.step2.noofVehicles}</p>}
            </div>

            <div className='mb-5'>
              <label className="block text-sm font-medium text-black">Vehicle Types</label>
              <Select
                isMulti
                options={VehicleTypeOptions}
                value={VehicleTypeOptions.filter(opt => 
                  formData.step2.VehicleTypes.includes(opt.value)
                )}
                onChange={(selected) => handleChange(
                  'step2', 
                  'VehicleTypes', 
                  selected ? selected.map(opt => opt.value) : []
                )}
                placeholder="Select vehicle types..."
                className={`mt-1 ${errors.step2?.VehicleTypes ? 'border-red-500' : ''}`}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: errors.step2?.VehicleTypes ? '#ef4444' : '#d1d5db',
                    borderRadius: '0.375rem',
                    padding: '0.5rem',
                    backgroundColor: '#yourCustomWhiteColor',
                  }),
                  multiValue: (base) => ({
                    ...base,
                    backgroundColor: '#E5E7EB',
                  }),
                }}
              />
              {errors.step2?.VehicleTypes && (
                <p className="mt-1 text-sm text-red-600">{errors.step2.VehicleTypes}</p>
              )}
            </div>

            <div className='mb-5'>
              <label className="block text-sm font-medium text-black">Total Capacity (in tons)</label>
              <input
                type="text"
                placeholder='Enter total capacity'
                value={formData.step2.TotalCapacity}
                onChange={(e) => handleChange('step2', 'TotalCapacity', e.target.value)}
                className={`mt-1 block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step2?.TotalCapacity ? 'border-red-500' : 'border'}`}
              />
              {errors.step2?.TotalCapacity && <p className="mt-1 text-sm text-red-600">{errors.step2.TotalCapacity}</p>}
            </div>

            <div className='mb-5'>
              <label className="block text-sm font-medium text-black">Operation Area</label>
              <Select
                options={OperationAreaOptions}
                value={OperationAreaOptions.find(opt => opt.value === formData.step2.OperationArea)}
                onChange={(selected) => handleChange('step2', 'OperationArea', selected?.value || '')}
                placeholder="Select operation area"
                className={`mt-1 ${errors.step2?.OperationArea ? 'border-red-500' : ''}`}
                styles={{
                  control: (base) => ({
                    ...base,
                    borderColor: errors.step2?.OperationArea ? '#ef4444' : '#d1d5db',
                    borderRadius: '0.375rem',
                    padding: '0.5rem',
                    backgroundColor: '#yourCustomWhiteColor',
                  }),
                }}
              />
              {errors.step2?.OperationArea && <p className="mt-1 text-sm text-red-600">{errors.step2.OperationArea}</p>}
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
            <Link href={'/transporterLogin'}>
              <div className='flex justify-center mt-3 text-black'>Already have an account? <span className='text-redText ml-2'> Login</span></div>
            </Link>
          </div>
        )}

        {/* Step 3: Documents */}
        {currentStep === 3 && (
          <div className="">
            <div className='flex justify-center'><Image src="/assets/Transporter_Icon.png" width={65} height={65} alt="TransporterIcon" /></div>
            <div className='flex justify-center text-3xl text-black font-bold'>Sign up as a Transporter</div>
            <div className='flex justify-center text-black'>Find Shipments, manage fleets and earn money with</div>
            <div className='flex justify-center text-black mb-6'>Tarmove</div>
            <div className='mb-4 text-xl text-black font-bold'>License & Certification (Optional)</div>

            <div className='mb-5'>
              <label className="block text-sm font-medium text-black">Upload Documents</label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                <svg 
                  className="mx-auto h-12 w-12 text-black" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-getStartedpgcustomWhite rounded-md font-medium text-black hover:text-blue-500 focus-within:outline-none"
                    >
                      <span>Click to upload or drag and drop your documents here</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        multiple
                        className="sr-only bg-background"
                        onChange={handleFileUpload}
                      />
                    </label>
                    
                  </div>
                  <p className="text-xs text-black">
                    (Driver's license, insurance, certificate etc)
                  </p>
                </div>
              </div>
              {formData.step3.documents.length > 0 && (
                <div className="mt-2">
                  <p className="text-sm font-medium">Uploaded files:</p>
                  <ul className="text-sm text-gray-500">
                    {formData.step3.documents.map((file, index) => (
                      <li key={index} className="flex items-center">
                        {file.name}
                        <button
                          type="button"
                          onClick={() => removeDocument(index)}
                          className="ml-2 text-red-500"
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
            <Link href={'/transporterLogin'}>
              <div className='flex justify-center mt-3 text-black'>Already have an account? <span className='text-redText ml-2'> Login</span></div>
            </Link>
          </div>
        )}

        {/* Step 4: Account Setup */}
        {currentStep === 4 && (
          <div className="">
            <div className='flex justify-center'><Image src="/assets/Transporter_Icon.png" width={65} height={65} alt="TransporterIcon" /></div>
            <div className='flex justify-center text-3xl text-black font-bold'>Sign up as a Transporter</div>
            <div className='flex justify-center text-black'>Find Shipments, manage fleets and earn money with</div>
            <div className='flex justify-center text-black mb-6'>Tarmove</div>
            <h2 className="text-xl font-semibold text-black mb-3">Account Setup</h2>

            <div className='mb-5 relative'>
              <label className="block text-sm font-medium text-black">Create Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Enter your password'
                  value={formData.step4.password}
                  onChange={(e) => handleChange('step4', 'password', e.target.value)}
                  className={`mt-1 block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step4?.password ? 'border-red-500' : 'border'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
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
              {errors.step4?.password && <p className="mt-1 text-sm text-red-600">{errors.step4.password}</p>}
            </div>

            <div className='mb-5 relative'>
              <label className="block text-sm font-medium text-black">Confirm Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Confirm your password'
                  value={formData.step4.confirmPassword}
                  onChange={(e) => handleChange('step4', 'confirmPassword', e.target.value)}
                  className={`mt-1 block w-full rounded-md border-gray-300 bg-getStartedpgcustomWhite p-2 shadow-sm focus:border-blue-500 focus:ring-blue-500 ${errors.step4?.confirmPassword ? 'border-red-500' : 'border'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
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
              {errors.step4?.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.step4.confirmPassword}</p>}
            </div>

            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  checked={formData.step4.acceptTerms}
                  onChange={(e) => handleChange('step4', 'acceptTerms', e.target.checked)}
                  className={`h-4 w-4 rounded border-gray-300 bg-white ${errors.step4?.acceptTerms ? 'border-red-500' : 'border'}`}
                />
              </div>
              <div className="ml-3 text-sm">
                <label className="font-medium text-gray-700">
                  I agree to the <a href="#" className="text-redText underline">Terms of Service</a> and <a href="#" className="text-redText underline">Privacy Policy</a>
                </label>
                {errors.step4?.acceptTerms && <p className="mt-1 text-red-600">{errors.step4.acceptTerms}</p>}
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="btn w-full bg-gradient-to-b from-[#DD1234] to-[#B30F2A] border-none rounded-[100px] shadow-custom-2 text-[17px] text-[#FFFFFF] font-[600] hover:scale-105 duration-200 hover:opacity-80"
              >
                Sign Up
              </button>
            </div>
            <Link href={'/transporterLogin'}>
              <div className='flex justify-center mt-3 text-black'>Already have an account? <span className='text-redText ml-2'> Login</span></div>
            </Link>
          </div>
        )}
      </form>
    </div>
  );
}