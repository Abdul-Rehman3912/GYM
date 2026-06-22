import React from "react";
import Navbar from "../components/navbar.jsx";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../store/useProductStore.js";

export default function StartSelling() {
  const navigate = useNavigate();
  
  const { 
    productData, 
    errors, 
    updateProductField, 
    goToNextScreen 
  } = useProductStore();
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateProductField(name, value);
  };

  const handleNext = () => {
    const isValid = goToNextScreen();
    if (isValid) {
      navigate("/addImage");
    }
  };
  
  const categories = [
    "Select a category",
    "Electronics",
    "Clothing & Accessories",
    "Home & Garden",
    "Collectibles & Art",
    "Sports & Outdoors",
    "Toys & Hobbies",
    "Jewelry & Watches",
    "Books & Magazines",
    "Other"
  ];
  

  
  return (
    <div>
      <Navbar />
      <div className="mt-20 bg-gray-100 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-md p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Add Product
            </h1>
            <p className="text-gray-500 mt-1 text-sm md:text-base">
              Add Items on world#1 E-Commerce App
            </p>
          </div>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white text-sm">
                1
              </div>
              <span className="text-sm font-medium text-gray-900">
                Item Details
              </span>
            </div>
            
            <span className="text-gray-400">›</span>
            
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 text-sm">
                2
              </div>
              <span className="text-sm text-gray-500">
                Photos & Description
              </span>
            </div>
          </div>
          
          {/* Form Card */}
          <div className="border rounded-xl p-4 md:p-6">
            <h2 className="font-medium text-gray-900">Item Details</h2>
            <p className="text-sm text-gray-500 mb-4">
              Tell us about what you're selling
            </p>
            
            <div className="space-y-4">
              {/* Item Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Item Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={productData.title}
                  onChange={handleInputChange}
                  placeholder="Be specific - include brand and model"
                  className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black ${
                    errors.title ? "border-red-500" : ""
                  }`}
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                )}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={productData.category}
                    onChange={handleInputChange}
                    className={`w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black ${
                      errors.category ? "border-red-500" : ""
                    }`}
                  >
                    {categories.map((cat, index) => (
                      <option key={index} value={cat === "Select a category" ? "" : cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                  {errors.category && (
                    <p className="text-red-500 text-xs mt-1">{errors.category}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Price (USD) *
                  </label>
                  <div className={`flex items-center border rounded-lg px-3 py-2 ${
                    errors.price ? "border-red-500" : ""
                  }`}>
                    <span className="text-gray-500 mr-2">$</span>
                    <input
                      type="number"
                      name="price"
                      value={productData.price}
                      onChange={handleInputChange}
                      placeholder="0.00"
                      step="0.01"
                      min="0"
                      className="w-full outline-none text-sm"
                    />
                  </div>
                  {errors.price && (
                    <p className="text-red-500 text-xs mt-1">{errors.price}</p>
                  )}
                </div>
              </div>
              
              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNext}
                  className="bg-black text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-800 transition"
                >
                  Next: Add Photos & Description →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}