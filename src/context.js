import { createContext, useContext, useEffect, useReducer } from "react";
import { data } from "./data";
import { reducer } from "./reducer";

export const AppContext = createContext();

export const StoreProvider = ({ children }) => {
	const initialState = {
		cart: data.cartItems,
		quantity: 0,
		subTotal: 0,
		cards: data.cards,
	};

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		dispatch({ type: "GET_TOTAL" });
	}, [state.cart]);

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};

	const incrementItem = (id) => {
		dispatch({ type: "INCREMENT_ITEM", payload: id });
	};

	const decrementItem = (id) => {
		dispatch({ type: "DECREMENT_ITEM", payload: id });
	};

	const removeItem = (id) => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

	return (
		<AppContext.Provider
			value={{ ...state, clearCart, incrementItem, decrementItem, removeItem }}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
