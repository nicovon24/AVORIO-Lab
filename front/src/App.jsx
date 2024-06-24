import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "./redux/actions/products";

function App() {
	const navigate = useNavigate();
	const {token, user_type} = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllProducts());
	}, [dispatch]);

	useEffect(() => {
		if(user_type){
			if(user_type=='admin'){
				navigate("/admin");
			}
			else if(user_type=='user'){
				navigate("/");
			}
		}
		else{
			if (token==null || !token) {
				navigate("/login");
			}
		}
	}, [token]);

	return (
		<body>
			<Navbar user_type={user_type}/>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			></link>
		</body>
	);
}

export default App;
