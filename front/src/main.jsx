import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import store from "./redux/store/store";
import Landing from "./Pages/Landing";
import Cart from "./Pages/Cart";
import Error404 from "./Pages/Error404/Error404";
import LogIn from "./Components/LogIn/LogIn"
import Admin from "./Pages/Admin";
import PurchasePage from "./Pages/PurchasePage";
import Buys from "./Pages/Buys";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Toaster />
			<Provider store={store}>
				<App />
				<Routes>
					<Route exact path="/" element={<Landing />}></Route>
					<Route exact path="/login" element={<LogIn />}></Route>
					<Route exact path="/cart" element={<Cart />}></Route>
					<Route exact path="/purchase" element={<PurchasePage />}></Route>
					<Route exact path="/admin" element={<Admin />}></Route>
					<Route exact path="/buys" element={<Buys />}></Route>
					<Route exact path="*" element={<Error404 />}></Route>
				</Routes>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
