import { createStore, applyMiddleware, compose } from "redux";
import { thunk } from "redux-thunk"; // Use named import
import rootReducer from "../reducer/reducer.js";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

export default store;
