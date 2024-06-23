import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import Landing from "./Pages/Landing";
import Cart from "./Pages/Cart";
import Error404 from "./Pages/Error404/Error404";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App/>
				<Routes>
					<Route exact path="/" element={<Landing />}></Route>
					<Route exact path="/cart" element={<Cart />}></Route>
					<Route exact path="*" element={<Error404 />}></Route>
				</Routes>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>
);
