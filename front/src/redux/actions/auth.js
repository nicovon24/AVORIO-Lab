import axios from "axios";
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from "../action-types"; // Import action types from the correct path

export function loginUser(email, password) {
	return async function (dispatch) {
		try {
			const response = await axios.post("http://localhost:3000/users/login", {
				email,
				password,
			});
			return dispatch({
				type: LOGIN_SUCCESS,
				payload: response.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}

export function logoutUser() {
	return async function (dispatch) {
		try {
			localStorage.setItem("token", null);

			return dispatch({
				type: LOGOUT_SUCCESS,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
