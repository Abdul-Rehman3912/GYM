import React, { useEffect } from "react";
import Hero from "../components/hero.jsx";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/navbar.jsx";
import { useProductStore } from "../store/useProductStore"; 
import { useNavigate } from "react-router-dom";

const Products = () => {
  const { products, getProducts, isLoadingProducts } = useProductStore();
   const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      <Navbar />

      <Hero/>
      <div className="p-6">
        <h1 className="text-2xl px-5 font-bold mb-6">🔥 Featured Products</h1>

        {isLoadingProducts ? (
          <p><i><b>Loading products...</b></i></p>
        ) : (
          <div className="grid grid-cols-1 px-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            
            {products.map((item) => (
              <ProductCard key={item.id}
               product={item} />
            ))}

          </div>
        )}
      </div>
    </div>
  );
};

export default Products;