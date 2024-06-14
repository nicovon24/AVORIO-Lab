import {
	GET_ALL_PRODUCTS,
	CREATE_PRODUCT, // Importar la nueva acción
} from "../action-types.js";

const initialState = {
	products: [],
};

function rootReducer(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_PRODUCTS:
			return {
				...state,
				products: action.payload,
			};
		case CREATE_PRODUCT:
			return {
				...state,
				products: [...state.products, action.payload],
			};
		default:
			return state;
	}
}

export default rootReducer;
