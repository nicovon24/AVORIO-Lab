import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../redux/actions/orders";
import { useNavigate } from "react-router-dom";

const OrdersGrid = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const calculateSubtotal = (items) => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const calculateTotal = () => {
    return orders.reduce((acc, order) => acc + calculateSubtotal(order.products), 0);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2 border border-blue-500">Image</th>
            <th className="px-4 py-2 border border-blue-500">Product</th>
            <th className="px-4 py-2 border border-blue-500">Quantity</th>
            <th className="px-4 py-2 border border-blue-500">Price</th>
            <th className="px-4 py-2 border border-blue-500">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            order.products.map((item, index) => (
              <tr key={`${order._id}-${index}`}>
                <td className="px-4 py-2 border border-blue-500">
                  <img src={item.product.image} alt={item.product.title} className="w-12" />
                </td>
                <td className="px-4 py-2 border border-blue-500">{item.product.title}</td>
                <td className="px-4 py-2 border border-blue-500">{item.quantity}</td>
                <td className="px-4 py-2 border border-blue-500">${item.price}</td>
                <td className="px-4 py-2 border border-blue-500">${item.quantity * item.price}</td>
              </tr>
            ))
          ))}
          <tr>
            <td colSpan="4" className="font-bold border border-blue-500 py-4">Total:</td>
            <td className="font-bold border border-blue-500 py-4 ">${calculateTotal()}</td>
          </tr>
        </tbody>
      </table>
      <button className="bg-blue-500 mt-8 py-4 px-8 rounded-md" onClick={()=>navigate("/purchase")}> Ir a Comprar </button>
    </div>
  );
};

export default OrdersGrid;
