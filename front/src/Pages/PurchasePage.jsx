import { useState } from "react";
import { useSelector } from "react-redux";
import { createBuy } from "../redux/actions/buys";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PurchasePage = () => {
    const orders = useSelector((state) => state.orders);
    const [values, setValues] = useState({ username: "", email: "", address: "" })
    const navigate = useNavigate();

    const handleSendData = async () => {
        const body = ({ username: values.username, email: values.email, address: values.address, orderId: orders[0]._id })
        const response = await createBuy(body);
        if (response) {
            toast.success("Compra Realizada");
            navigate("/");
        }
        else {
            toast.error("Todos los campos son obligatorios");
        }
        setValues({ username: "", email: "", address: "" })
    }
    return (
        <div className="border-2 border-black rounded-xl w-1/2  flex flex-col mx-auto">
            <h1 className="font-bold text-2xl my-4">Termina tu orden, por favor</h1>
            <div className="flex justify-start mb-6">
                <label htmlFor="" className="ml-2 mr-6 justify-start w-1/3"> Nombre </label>
                <input
                    type="text"
                    className="border-2 border-black rounded-lg px-2 w-full mr-10 "
                    onChange={(e) =>
                        setValues((prevValues) => ({
                            ...prevValues,
                            username: e.target.value
                        }))
                    }
                    value={values.username}
                />
            </div>
            <div className="flex justify-start mb-6">
                <label htmlFor="" className="ml-2 mr-6 justify-start  w-1/3"> Email </label>
                <input
                    type="text"
                    className="border-2 border-black rounded-lg px-2 w-full mr-10 "
                    onChange={(e) =>
                        setValues((prevValues) => ({
                            ...prevValues,
                            email: e.target.value
                        }))
                    }
                    value={values.email}
                />
            </div>
            <div className="flex justify-start mb-6">
                <label htmlFor="" className="ml-2 mr-6  w-1/3 justify-start"> Direccion </label>
                <input
                    type="text"
                    className="border-2 border-black rounded-lg px-2 w-full mr-10 "
                    onChange={(e) =>
                        setValues((prevValues) => ({
                            ...prevValues,
                            address: e.target.value
                        }))
                    }
                    value={values.address}
                />
            </div>
            <div className="mx-8">
                <div className="flex flex-row justify-between font-bold">
                    <p className="w-1/4">Productos</p>
                    <p className="w-1/4">Precios</p>
                    <p className="w-1/4">Cantidad</p>
                </div>

                {orders && orders.length > 0 && orders[0].products && orders[0].products.length > 0 ? (
                    orders[0].products.map((product, index) => {
                        return (
                            <div key={index} className="flex flex-row justify-between mx-auto my-2">
                                <p className="w-1/4">{product.product.title}</p>
                                <p className="w-1/4">${product.price}</p>
                                <p className="w-1/4">X{product.quantity}</p>
                            </div>
                        );
                    })
                ) : (
                    <p>Ningun producto disponible</p>
                )}
            </div>
            <p className="text-right mr-6 font-bold text-xl mb-4">Total: ${orders && orders[0] && orders[0].total}</p>
            <button
                className="w-5/6 mx-auto bg-blue-600 rounded-xl mb-4 py-2  hover:bg-blue-500 text-white"
                onClick={() => {
                    handleSendData()
                }}
            >Comprar ahora</button>
        </div>


    )
}





export default PurchasePage;
