import React from "react";
import { useLocation } from "react-router-dom";
import AddButton from "../Buttons/AddButton";
import CartButton from "../Buttons/CartButton";
import BackButton from "../Buttons/BackButton";
import LogoutButton from "../Buttons/LogoutButton";
import HomeButton from "../Buttons/HomeButton";
import Admin from "../../Pages/Admin";
import AdminButton from "../Buttons/AdminButton";
import BuysButton from "../Buttons/BuysButton";

const Navbar = ({ user_type }) => {
	const location = useLocation();

	return (
		<nav className="flex justify-between items-center gap-4 py-4 px-4 border-b-2 w-full bg-blue-500 mb-4">
			<BackButton />
			{/* {user_type && (
				<label className="text-white border-b-2 border-white py-2 px-4">
					{user_type?.toUpperCase()}
				</label>
			)} */}
			{user_type != "admin" && <HomeButton />}
			{user_type != "admin" && <CartButton />}
			{user_type == "admin" && <AdminButton />}
			{user_type == "admin" && <BuysButton />}
			{location.pathname !== "/login" && <LogoutButton />}
		</nav>
	);
};

export default Navbar;
