import {
	CREATE_ORDER,
	GET_ALL_ORDERS, // Importar la nueva acción
} from "../action-types.js";
import axios from "axios";

export function getAllOrders() {
	return async function (dispatch) {
		try {
			const response = await axios.get("http://localhost:3000/order");
			const orders = response.data;

			return dispatch({
				type: GET_ALL_ORDERS,
				payload: orders,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function createOrder(order) {
	return async function (dispatch) {
		try {
			const response = await axios.post("http://localhost:3000/order", {
				products: order,
			});
			const newOrder = response.data;

			return dispatch({
				type: CREATE_ORDER,
				payload: newOrder,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
