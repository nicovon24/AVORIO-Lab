import React from "react";
import AddButton from "../Components/Buttons/AddButton";
import { useSelector } from "react-redux";

const Admin = () => {
	const { user_type } = useSelector((state) => state);
	const {products} = useSelector((state) => state);
	return (
		<div>
			{user_type == "admin" && <AddButton />}
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-2xl font-bold mb-4">Productos</h1>
				<table className="table-auto w-full">
					<thead>
						<tr>
							<th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black" >Imagen</th>
							<th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">Producto</th>
							<th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">Precio</th>
						</tr>
					</thead>
					<tbody>
						{products.map((item, index) => (
							<tr key={`${item._id}-${index}`}>
								<td className="px-4 py-2 border   border-black flex justify-center">
									<img src={item.image} alt={item.title} className="w-36 h-25 border-blue-600 " />
								</td>
								<td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">{item.title}</td>
								<td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">${item.price}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Admin;
