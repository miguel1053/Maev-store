// components/ProductList.tsx

import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Top Branco",
    price: "R$ 49,90",
    image: "/images/top-branco.jpg"
  },
  {
    id: 2,
    name: "Vestido Preto Longo",
    price: "R$ 89,90",
    image: "/images/vestido-preto.jpg"
  },
  {
    id: 3,
    name: "Saia Rosa",
    price: "R$ 59,90",
    image: "/images/saia-rosa.jpg"
  }
];

const ProductList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
