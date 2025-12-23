'use client';

import { Suspense } from 'react';
import EnrollForm from '../../components/EnrollForm';
import { FaSpinner } from 'react-icons/fa';

export default function EnrollPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin text-blue-500">
          <FaSpinner size={32} />
        </div>
      </div>
    }>
      <EnrollForm />
    </Suspense>
  );
}