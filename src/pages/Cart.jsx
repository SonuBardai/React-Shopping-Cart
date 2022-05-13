import CartItem from "../components/CartItem";

const Cart = ({ cartItems }) => {
	return (
		<>
			<ul className="mb-12 px-12 flex flex-col items-center justify-center">
				{cartItems.map((item) => {
					return <CartItem key={item.name} {...item} />;
				})}
			</ul>
		</>
	);
};

export default Cart;
