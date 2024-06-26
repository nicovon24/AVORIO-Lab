import React from "react";
import { Link } from "react-router-dom";

const AdminButton = () => {
	return (
		<Link to="/admin" className="border-2 border-white rounded-full  text-white py-2 px-4">
			{/* ADMIN */}
			<i class="fa fa-male" aria-hidden="true"></i>
		</Link>
	);
};

export default AdminButton;
