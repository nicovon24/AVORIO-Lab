import React, { useEffect } from "react";
import AddButton from "../Components/Buttons/AddButton";
import { useDispatch, useSelector } from "react-redux";
import { getAllBuys } from "../redux/actions/buys";

const Buys = () => {
	const { user_type } = useSelector((state) => state);
	const { buys } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
		dispatch(getAllBuys());
	}, [dispatch]);

	return (
		<div>
			{user_type == "admin" && <AddButton />}
			<div className="container mx-auto px-4 py-8">
				<h1 className="text-2xl font-bold mb-4">Ventas</h1>
				<table className="table-auto w-full">
					<thead>
						<tr>
							<th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-blue-600">Nombre</th>
							<th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-blue-600">Email</th>
							<th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-blue-600">Dirección</th>
							<th className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-blue-600">ID de Orden</th>
						</tr>
					</thead>
					<tbody>
						{buys.map((user, index) => (
							<tr key={`${user._id}-${index}`}>
								<td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">{user.name}</td>
								<td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">{user.email}</td>
								<td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">{user.address}</td>
								<td className="px-4 py-2 border-2 border-collapse border-r-2 overflow-hidden border-black">{user.OrderId}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Buys;
