import React, { useState } from 'react';
import CreateProductForm from '../Create/CreateProduct';

const ProductCard = ({ product }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="card border-2 border-gray-300 rounded-md p-4 mb-8">
      <img src={product.image} alt={product.title} className="w-full rounded-3xl h-32 mb-4 object-contain" />
      <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
      <p className="mb-4">{product.description}</p>
      <p className="font-bold">Price: ${product.price}</p>
      <CreateProductForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
};

export default ProductCard;