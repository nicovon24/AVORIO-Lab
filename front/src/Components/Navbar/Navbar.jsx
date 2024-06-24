import React from "react";
import { useLocation } from "react-router-dom";
import AddButton from "../Buttons/AddButton";
import CartButton from "../Buttons/CartButton";
import BackButton from "../Buttons/BackButton";
import LogoutButton from "../Buttons/LogoutButton";
import HomeButton from "../Buttons/HomeButton";
import Admin from "../../Pages/Admin";
import AdminButton from "../Buttons/AdminButton";

const Navbar = ({ user_type }) => {
	const location = useLocation();

	return (
		<nav className="flex justify-between items-center gap-4 pb-4 mb-4 border-b-2 w-full">
			{user_type && (
				<label className="bg-blue-500 text-white py-2 px-4 rounded-md">
					{user_type?.toUpperCase()}
				</label>
			)}
			<BackButton />
			{user_type != "admin" && <HomeButton />}
			<CartButton />
			{user_type == "admin" && <AdminButton />}
			{location.pathname !== "/login" && <LogoutButton />}
		</nav>
	);
};

export default Navbar;
