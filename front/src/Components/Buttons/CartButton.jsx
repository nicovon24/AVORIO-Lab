import React from "react";
import { Link } from "react-router-dom"; // Importa Link

const CartButton = () => {
	return (
		<div className="flex flex-col">
			<div>
				<Link
					to="/cart"
					className="bg-blue-500 text-white py-2 px-4 rounded-md "
				>
					<i class="fa fa-cart-arrow-down" aria-hidden="true"></i>
				</Link>
			</div>
		</div>
	);
};

export default CartButton;
