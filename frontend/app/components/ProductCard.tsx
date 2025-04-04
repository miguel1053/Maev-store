// components/ProductCard.tsx

import * as React from "react";


interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  if (!product) {
    return <p>Erro: Produto não encontrado</p>; // Evita erro de undefined
  }

  const { name, price, image } = product;
  const imageUrl = image || "/images/placeholder.png"; // Imagem padrão

  return (
    <div className="border rounded-lg p-4 shadow-md">
      <img src={imageUrl} alt={name} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-600">{price}</p>
    </div>
  );
};

export default ProductCard;
