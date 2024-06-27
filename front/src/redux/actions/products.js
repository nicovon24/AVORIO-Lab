import {
	CREATE_PRODUCT,
	GET_ALL_PRODUCTS, 
} from "../action-types.js";
import axios from "axios";

export function getAllProducts() {
	return async function (dispatch) {
		try {
			const response = await axios.get("http://localhost:3000/products");
			const products = response.data;

			return dispatch({
				type: GET_ALL_PRODUCTS,
				payload: products,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function createProduct(product) {
	return async function (dispatch) {
		try {
			const response = await axios.post("http://localhost:3000/products", product);
			const newProduct = response.data;

			return dispatch({
				type: CREATE_PRODUCT,
				payload: newProduct,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
