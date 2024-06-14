import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../redux/actions/actions';

const CreateProductForm = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    image: '',
    title: '',
    description: '',
    category: '',
    price: ''
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(product));
    setProduct({
      image: '',
      title: '',
      description: '',
      category: '',
      price: ''
    });
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-md max-w-md w-full relative">
        <button className="absolute top-0 right-0 p-2" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Image URL:</label>
            <input type="text" name="image" value={product.image} onChange={handleChange} className="w-full border rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Title:</label>
            <input type="text" name="title" value={product.title} onChange={handleChange} className="w-full border rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Description:</label>
            <input type="text" name="description" value={product.description} onChange={handleChange} className="w-full border rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Category:</label>
            <input type="text" name="category" value={product.category} onChange={handleChange} className="w-full border rounded-md p-2" />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Price:</label>
            <input type="number" name="price" value={product.price} onChange={handleChange} className="w-full border rounded-md p-2" />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md">Create Product</button>
        </form>
      </div>
    </div>
  );
};

export default CreateProductForm;
