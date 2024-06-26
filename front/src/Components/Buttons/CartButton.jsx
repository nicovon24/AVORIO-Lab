import React from "react";
import { Link } from "react-router-dom"; // Importa Link

const CartButton = () => {
	return (
		<div className="flex flex-col">
			<div>
				<Link
					to="/cart"
					className="text-white py-2 px-4 border-2 border-white rounded-full bg-blue-500 hover:bg-blue-400"
				>
					<i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
					
				</Link>
			</div>
		</div>
	);
};

export default CartButton;
