import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
	return (
		<Link to="/" className="bg-blue-500 text-white py-2 px-4 rounded-md ">
			<i class="fa fa-home" aria-hidden="true"></i>
		</Link>
	);
};

export default HomeButton;
