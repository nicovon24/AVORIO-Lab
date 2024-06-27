import {
	GET_ALL_PRODUCTS,
	CREATE_PRODUCT,
	GET_ALL_ORDERS, 
	CREATE_ORDER,
	LOGIN_SUCCESS,
	LOGOUT_SUCCESS,
	GET_BUYS,
	SUBTRACT_IN_ORDER,
	// REMOVE_ORDER,
} from "../action-types.js";

const initialState = {
	products: [],
	orders: [], 
	token: null,
	buys: []
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
			const { products } = state.orders[0]; 
			
			const updatedProducts = products.map(order => {
				if (order.product._id === action.order) {
				return {
					...order,
					quantity: order.quantity + 1
				};
				}
				return order;
			});

			const newOrders = state.orders

			newOrders[0].products = updatedProducts

			return {
				...state,
				orders: newOrders
			};

		case SUBTRACT_IN_ORDER:
			let products2 = state.orders[0].products

			console.log(products2);
			
			let updatedProducts2 = products2.map(order => {
				if (order.product._id === action.order) {
					console.log(order.quantity - 1);
					return {
						...order,
						quantity: order.quantity - 1
					};
				}
				return order;
			});

			updatedProducts2 = updatedProducts2.filter(item=>item.quantity>0)

			let newOrders2 = state.orders

			newOrders2[0].products = updatedProducts2

			console.log(newOrders2);

			return {
				...state,
				orders: newOrders2
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				token: action.payload.token,
				user_type: action.payload.type,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				token: null,
				user_type: null,
			};
		case GET_BUYS:
			return {
				...state,
				buys: action.payload
			};
		default:
			return state;
	}
}

export default rootReducer;
