import React from "react";
import { Link } from "react-router-dom";

const AdminButton = () => {
	return (
		<Link to="/admin" className="bg-blue-500 text-white py-2 px-4 rounded-md ">
			<i class="fa fa-male" aria-hidden="true"></i>
		</Link>
	);
};

export default AdminButton;
