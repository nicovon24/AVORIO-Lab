import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createOrder, getAllOrders, substractInOrder } from "../redux/actions/orders";
import { Link, useNavigate } from "react-router-dom";

const OrdersGrid = () => {
  const orders = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const addToCart = (product) => {
    dispatch(createOrder(product._id))
      .then(item => {
        dispatch(getAllOrders());
      });
  };

  const substractInCart = (product) => {
    dispatch(substractInOrder(product._id))
      .then(item => {
        dispatch(getAllOrders());
      });
  };

  useEffect(() => {
    dispatch(getAllOrders());
  }, [dispatch]);

  const calculateSubtotal = (items) => {
    return items.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const calculateTotal = () => {
    return orders.reduce((acc, order) => acc + calculateSubtotal(order.products), 0);
  };
  console.log(orders);
  return (
    <div className="container mx-auto px-4 py-8">
      {orders?.[0]?.products.length > 0 ? <>

        {/* products already exist in the order  */}
        <h1 className="text-2xl font-bold mb-4">Orders</h1>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black ">Imagen</th>
              <th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">Producto</th>
              <th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">Cantidad</th>
              <th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">Precio</th>
              <th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">Acciones</th>
              <th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              order.products.map((item, index) => (
                <tr key={`${order._id}-${index}`}>
                  <td className="px-4 py-2 border   border-black flex justify-center ">
                    <img src={item.product.image} alt={item.product.title} className="w-36 h-25" />
                  </td>
                  <td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">{item.product.title}</td>
                  <td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">{item.quantity}</td>
                  <td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">${item.price}</td>
                  <td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">
                    <button
                      className="border-2 rounded-lg px-2 py-1 mt-4 bg-green-500 text-white"
                      onClick={() => addToCart(item.product)}
                    >
                      <i class="fa fa-plus" aria-hidden="true"></i>
                      {/* {'  '} Agregar  */}
                    </button>
                    <button
                      className="border-2 rounded-lg px-2 py-1 mt-4 ml-2 bg-red-500 text-white"
                      onClick={() => substractInCart(item.product)}
                    >
                      <i class="fa fa-minus" aria-hidden="true"></i>
                      {/* {'  '} Borrar  */}
                    </button>
                  </td>
                  <td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">${item.quantity * item.price}</td>

                </tr>
              ))
            ))}
            <tr>
              <td colSpan="5" className="font-bold border-2 border-collapse border-r-2 overflow-hidden border-black py-4">Total:</td>
              <td className="font-bold border border-black py-4 ">${calculateTotal()}</td>
            </tr>
          </tbody>
        </table>
        <button className="border-black mt-8 py-4 px-8 rounded-md text-white bg-blue-500 hover:bg-blue-800" onClick={() => navigate("/purchase")}> Comprar </button>
      </>


        :

        <>
          {/* no products  */}
          <label>Ningun producto en el carrito, seleccione un producto</label><br></br><br></br><br></br>
          <Link to="/" className="bg-blue-500 text-white mt-8 py-4 px-8 rounded-md">
            Seleccionar productos
          </Link>
        </>
      }
    </div>
  );
};

export default OrdersGrid;
