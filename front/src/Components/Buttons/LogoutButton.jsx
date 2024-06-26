import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../redux/actions/auth";

const LogoutButton = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_type');
    dispatch(logoutUser())
    navigate("/")
  };

  return (
      <Link to="/" className="text-white py-2 px-4 hover:bg-blue-400" onClick={handleLogout}>
        {/* <i className="fa fa-sign-out" aria-hidden="true"></i> */}
        <i className="fa fa-sign-out" aria-hidden="true"></i><br></br>
        <span className="text-[12px]">LOGOUT</span>
      </Link>
  );
};

export default LogoutButton;