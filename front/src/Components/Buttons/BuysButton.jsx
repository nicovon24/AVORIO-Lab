import React from "react";
import { Link } from "react-router-dom";

const BuysButton = () => {
	return (
		<Link to="/buys" className="border-2 border-white rounded-lg    text-white py-2 px-4 bg-blue-500 hover:bg-blue-400">
            <i class="fa fa-money" aria-hidden="true"></i><br></br>
            <span className="text-[12px]">VENTAS</span>
		</Link>
	);
};

export default BuysButton;
