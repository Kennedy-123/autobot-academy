'use client';

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaCheck, FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const EnrollPage = () => {
  const searchParams = useSearchParams();
  const courseName = searchParams.get('course') || 'Selected Course';
  const coursePrice = searchParams.get('price') || 'N/A';

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    goals: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-8 text-center">
          <div className="rounded-full bg-green-100 p-4 w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <FaCheck className="text-green-600 text-4xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Enrollment Successful!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for enrolling in <span className="font-semibold">{courseName}</span>.
            We&apos;ve sent a confirmation email with next steps to {formData.email}.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg mb-8 text-left">
            <h2 className="text-lg font-semibold mb-4">What&apos;s Next?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">1</span>
                <span>Check your email for course access instructions</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">2</span>
                <span>Join our student community on Slack</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-0.5">3</span>
                <span>Attend the orientation session on the course start date</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/courses"
              className="px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-center"
            >
              Browse More Courses
            </Link>
            <Link 
              href="/"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center"
            >
              Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href={`/courses/${encodeURIComponent(courseName.toLowerCase().replace(/\s+/g, '-'))}`}
            className="inline-flex items-center text-emerald-600 hover:text-emerald-800 mb-4"
          >
            <FaArrowLeft className="mr-2" /> Back to Course
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Enroll in {courseName}</h1>
          <p className="text-gray-600">Complete the form below to secure your spot in the course.</p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h2 className="text-lg font-medium text-gray-900">Course Details</h2>
            <p className="mt-1 text-sm text-gray-500">
              You&apos;re enrolling in: <span className="font-medium text-emerald-500">{courseName}</span>
            </p>
            <p className="mt-1 text-sm text-gray-500">
              Price: <span className="font-medium text-emerald-500">{coursePrice}</span>
            </p>
          </div>

          <div className="border-t border-gray-200 px-4 py-5 sm:p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaEnvelope className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaPhone className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3"
                        placeholder="+234 800 000 0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="education" className="block text-sm font-medium text-gray-700">
                      Highest Level of Education
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaGraduationCap className="h-5 w-5 text-gray-400" />
                      </div>
                      <select
                        id="education"
                        name="education"
                        value={formData.education}
                        onChange={handleChange}
                        className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-3 bg-white"
                      >
                        <option value="">Select education level</option>
                        <option value="high_school">High School</option>
                        <option value="bachelors">Bachelor&apos;s Degree</option>
                        <option value="masters">Master&apos;s Degree</option>
                        <option value="phd">PhD</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Additional Information</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                      Work Experience (if any)
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-start pt-3">
                        <FaBriefcase className="h-5 w-5 text-gray-400" />
                      </div>
                      <textarea
                        id="experience"
                        name="experience"
                        rows={3}
                        value={formData.experience}
                        onChange={handleChange}
                        className="focus:ring-emerald-500 focus:border-emerald-500 block w-full pl-10 sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Briefly describe your work experience..."
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-gray-700">
                      What are your learning goals? <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="goals"
                        name="goals"
                        rows={3}
                        required
                        value={formData.goals}
                        onChange={handleChange}
                        className="shadow-sm focus:ring-emerald-500 focus:border-emerald-500 block w-full sm:text-sm border border-gray-300 rounded-md p-3"
                        placeholder="What do you hope to achieve with this course?"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center">
                  <input
                    id="terms"
                    name="terms"
                    type="checkbox"
                    required
                    className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                  />
                  <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                    I agree to the{' '}
                    <Link href="/terms" className="text-emerald-600 hover:text-emerald-500">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-emerald-600 hover:text-emerald-500">
                      Privacy Policy
                    </Link>
                  </label>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Processing...' : 'Complete Enrollment'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollPage;
