'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface FormData {
  email: string;
  password: string;
}

interface FormErrors {
  email: string;
  password: string;
  general?: string;
}

export default function ShipperLoginForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({ email: '', password: '' });
  const [errors, setErrors] = useState<FormErrors>({ email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: '', general: '' }));
  };

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormErrors = { email: '', password: '' };

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call - replace with actual authentication logic
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }

      router.push('/dashboard');
    } catch (error) {
      setErrors(prev => ({
        ...prev,
        general: error instanceof Error ? error.message : 'An unexpected error occurred',
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-lg border border-gray-200 shadow-lg p-8 bg-white w-full max-w-md">
        <div className="flex justify-center mb-8">
          <Image src="/assets/Shipper_Icon.png" width={80} height={80} alt="Shipper Icon" className="hover:scale-105 transition-transform" />
        </div>
        
        <h2 className="text-center text-3xl font-bold text-black mb-2">Shipper Login</h2>
        <p className="text-center text-black mb-8">Access your shipper account to manage your logistics</p>

        {errors.general && (
          <div className="mb-4 p-3 bg-pink text-redText rounded-md">{errors.general}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
              className={`block w-full rounded-md shadow-sm bg-white p-3 border-gray-500 focus:ring-redText focus:border-redText ${errors.email ? 'border-redText' : 'border-gray-500'}`}
              aria-invalid={!!errors.email}
              disabled={isSubmitting}
            />
            {errors.email && <p className="mt-1 text-sm text-redText">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              className={`block w-full rounded-md shadow-sm bg-white p-3 border-gray-500 border-spacing-1 focus:ring-redText focus:border-redText ${errors.password ? 'border-redText' : 'border-gray-500'}`}
              aria-invalid={!!errors.password}
              disabled={isSubmitting}
            />
            {errors.password && <p className="mt-1 text-sm text-redText">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <Link href="/forgot-password" className="font-medium text-redText hover:text-redText">
                Forgot password?
              </Link>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-b from-redText to-redText hover:from-redText hover:to-redText text-white font-semibold py-2 px-4 rounded-md shadow-sm transition-all duration-200 ease-in-out transform hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-black">
          Don&apos;t have an account?{' '}
          <Link href="/shipperSignup" className="font-semibold text-redText hover:text-redText">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
