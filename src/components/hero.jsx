import React from 'react'
import { useNavigate  } from 'react-router-dom';

function hero() {

  const navigate = useNavigate();
  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl md:mt-20 md:text-5xl font-bold text-gray-900 leading-tight">
          Find Everything here
        </h1>

        <p className="mt-4 text-gray-600 max-w-xl text-lg">
          Find unique items from sellers around the world. Real-time ,
          transparent pricing, and secure transactions.
        </p>

        
      </div>
    </section>
  );
}

export default hero