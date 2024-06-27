import axios from "axios";
import { GET_BUYS } from "../action-types";

export const createBuy = async (buy) => {
    try {
        const response = await axios.post("http://localhost:3000/buy", buy);
        return response;
    } catch (err) {
        console.error(err);
    }
}

export function getAllBuys() {
	return async function (dispatch) {
		try {
			const response = await axios.get("http://localhost:3000/buy");
			const buys = response.data;

			return dispatch({
				type: GET_BUYS,
				payload: buys,
			});
		} catch (error) {
			console.log(error);
		}
	};
}