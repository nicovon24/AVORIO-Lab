import {
	GET_ALL_POSTS
} from "./action-types.js";

import axios from "axios";

// export function getAllPosts() {
// 	return async function (dispatch) {
// 		try {
// 			const response = await axios.get("/publications/all");
// 			const blogPosts = response.data.filter((el) => !el.isInstagram);
// 			const igPosts = response.data.filter((el) => el.isInstagram);

// 			return dispatch({
// 				type: GET_ALL_POSTS,
// 				payload: { igPosts, blogPosts },
// 			});
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	};
// }
