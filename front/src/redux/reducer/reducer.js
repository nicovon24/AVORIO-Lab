import {
	GET_ALL_PRODUCTS,
	CREATE_PRODUCT,
	GET_ALL_ORDERS, // Importar la nueva acción
	CREATE_ORDER,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS, // Importar la nueva acción
} from "../action-types.js";

const initialState = {
	products: [],
	orders: [], // Agregar el array de órdenes al estado inicial
	token: null,
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
		case GET_ALL_ORDERS:
			return {
				...state,
				orders: action.payload,
			};
		case CREATE_ORDER:
			return {
				...state,
				orders: [...state.orders, action.payload],
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.token,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				token: null,
			};
		default:
			return state;
	}
}

export default rootReducer;
