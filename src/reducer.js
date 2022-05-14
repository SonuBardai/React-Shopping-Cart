export const reducer = (state, action) => {
	if (action.type === "CLEAR_CART") {
		return { ...state, cart: [] };
	}

	if (action.type === "INCREMENT_ITEM") {
		const tempCart = state.cart.map((item) => {
			if (item.id === action.payload) {
				return {
					...item,
					amount: item.amount + 1,
					total: (item.amount + 1) * item.price,
				};
			}
			return item;
		});
		return { ...state, cart: tempCart };
	}

	if (action.type === "DECREMENT_ITEM") {
		const tempCart = state.cart
			.map((item) => {
				if (item.id === action.payload) {
					if (item.amount <= 0) {
						return { ...item, amount: 0 };
					}
					return {
						...item,
						amount: item.amount - 1,
						total: (item.amount - 1) * item.price,
					};
				}
				return item;
			})
			.filter((item) => {
				return item.amount !== 0;
			});
		return { ...state, cart: tempCart };
	}

	if (action.type === "GET_TOTAL") {
		let quantity = 0;
		let subTotal = 0;
		state.cart.map((item) => {
			quantity += item.amount;
			subTotal += item.total;
			return { ...item, quantity, subTotal };
		});
		return { ...state, quantity, subTotal };
	}

	if (action.type === "REMOVE_ITEM") {
		const tempCart = state.cart.filter(
			(item) => item.id !== action.payload
		);
		return { ...state, cart: tempCart };
	}

	throw Error("No Action Reducer Found.");
};
