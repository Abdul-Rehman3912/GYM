import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { axiosInstance } from '../libs/axios.js';

const Success = () => {
  const location = useLocation();
  const [orderDetails, setOrderDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get('orderId');

  useEffect(() => {
    if (orderId) {
      const fetchOrder = async () => {
        try {
          const response = await axiosInstance.get(`/payment/status/${orderId}`);
          setOrderDetails(response.data);
        } catch (error) {
          console.error('Error fetching order status:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchOrder();
    } else {
      setLoading(false);
    }
  }, [orderId]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg max-w-md w-full p-8 text-center">
        <div className="text-green-500 text-6xl mb-4">✅</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">Thank you for your purchase.</p>
        
        {orderId && (
          <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left">
            <p className="text-sm"><strong>Order ID:</strong> #{orderId}</p>
            {/* <p className="text-sm"><strong>Status:</strong> {orderDetails?.paymentStatus || 'processing'}</p> */}
          </div>
        )}
        
        <Link to="/" className="block bg-black text-white py-2.5 rounded-lg font-medium hover:bg-gray-800 transition">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Success;