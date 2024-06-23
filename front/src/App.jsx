import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { useSelector } from "react-redux";

function App() {
	const navigate = useNavigate();
	const {token} = useSelector((token) => token);

	useEffect(() => {
		if (token==null || !token) {
			navigate("/login");
			// window.location.href('/login');
		}
	}, [token]);

	return (
		<body>
			<Navbar />
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
			></link>
		</body>
	);
}

export default App;
