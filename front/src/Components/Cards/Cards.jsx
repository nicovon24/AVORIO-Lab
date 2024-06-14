import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/actions';
import Card from './Card';
import CreateProductForm from '../Create/CreateProduct';

const Cards = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const openForm = () => {
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <button onClick={openForm} className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4">Add Product</button>
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <div key={product.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <Card product={product} />
          </div>
        ))}
      </div>
      <CreateProductForm isOpen={isFormOpen} onClose={closeForm} />
    </div>
  );
};

export default Cards;
