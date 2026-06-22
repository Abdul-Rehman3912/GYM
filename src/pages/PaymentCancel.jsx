import React from 'react';
import { Link } from 'react-router-dom';

const Cancel = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center">
        <div className="text-red-500 text-6xl mb-4">❌</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Cancelled</h1>
        <p className="text-gray-600 mb-6">Your payment was not completed. You can try again whenever you are ready.</p>
        
        <div className="space-y-2">
          <Link to="/" className="block bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition">
            Back to Shop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cancel;