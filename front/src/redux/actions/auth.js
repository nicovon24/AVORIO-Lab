import axios from "axios";
import { LOGIN_SUCCESS } from "../action-types"; // Import action types from the correct path

export function loginUser(email, password) {
	return async function (dispatch) {
		try {
			const response = await axios.post("http://localhost:3000/users/login", {
				email,
				password,
			});
			localStorage.setItem("token", response.data.token);
			return dispatch({
				type: LOGIN_SUCCESS,
				payload: response.data.token,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
