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
    <div>
      <Link to="/" className="border-2 border-white rounded-full  text-white py-2 px-4 rounded-md " onClick={handleLogout}>
        <i className="fa fa-sign-out" aria-hidden="true"></i>
      </Link>
    </div>
  );
};

export default LogoutButton;