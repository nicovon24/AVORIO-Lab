import React from "react";
import { Link } from "react-router-dom";

const BuysButton = () => {
	return (
		<Link to="/buys" className="border-2 border-white rounded-full    text-white py-2 px-4 ">
            <i class="fa fa-money" aria-hidden="true"></i>
		</Link>
	);
};

export default BuysButton;
