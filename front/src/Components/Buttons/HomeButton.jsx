import React from "react";
import { Link } from "react-router-dom";

const HomeButton = () => {
	return (
		<Link to="/" className="border-2 border-white rounded-full  text-white py-2 px-4 bg-blue-500 hover:bg-blue-400">
			<i class="fa fa-home" aria-hidden="true"></i>
		</Link>
	);
};

export default HomeButton;
