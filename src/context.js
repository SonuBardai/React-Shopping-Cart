import { createContext, useContext, useEffect, useState } from "react";
import { data } from "./data";

export const AppContext = createContext();

export const StoreProvider = ({ children }) => {
	const [cart, setCart] = useState(data.cartItems);

	const getTotal = () => {
		let temp = 0;
		for (let i = 0; i < cart.length; i++) {
			temp += cart[i].amount;
		}
		return temp;
	};

	const [quantity, setQuantity] = useState(getTotal());

	const getSubTotal = () => {
		let temp = 0;
		for (let i = 0; i < cart.length; i++) {
			temp += cart[i].total;
		}
		return temp;
	};

	const [subTotal, setSubTotal] = useState(getSubTotal());

	useEffect(() => {
		setQuantity(getTotal());
		setSubTotal(getSubTotal());
	}, [cart]);

	useEffect(() => {
		const tempCart = cart.filter((item) => item.amount);
		setCart(tempCart);
	}, [cart]);

	const clearItems = () => {
		setCart([]);
	};

	const incrementItem = (id) => {
		setCart(
			cart.map((item) => {
				if (item.id === id) {
					item.amount++;
					item.total = item.price * item.amount;
				}
				return item;
			})
		);
	};

	const decrementItem = (id) => {
		setCart(
			cart.map((item) => {
				if (item.id === id) {
					item.amount--;
					item.total = item.price * item.amount;
					if (item.amount <= 0) {
						item.amount = 0;
					}
				}
				return item;
			})
		);
	};

	return (
		<AppContext.Provider
			value={{
				cards: data.cards,
				quantity,
				getTotal,
				subTotal,
				cart,
				clearItems,
				incrementItem,
				decrementItem,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
