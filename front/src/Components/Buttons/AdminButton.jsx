import React from "react";
import { Link } from "react-router-dom";

const AdminButton = () => {
	return (
		<Link to="/admin" className="border-2 border-white rounded-full  text-white py-2 px-4 bg-blue-500 hover:bg-blue-400">
			{/* ADMIN */}
			<i class="fa fa-male" aria-hidden="true"></i><br></br>
			<span className="text-[12px]">ADMIN</span>
		</Link>
	);
};

export default AdminButton;
