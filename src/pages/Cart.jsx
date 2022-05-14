import CartItem from "../components/CartItem";
import { useGlobalContext } from "../context";

const Cart = () => {
	const { cart, clearCart, subTotal } = useGlobalContext();
	return (
		<>
			<ul className="mb-12 px-12 flex flex-col items-center justify-center">
				{cart.length > 0 && (
					<button
						className="bg-red-700 text-white px-3 py-2 rounded-lg place-self-end mx-36 mt-6"
						onClick={clearCart}
					>
						Clear Items
					</button>
				)}
				{cart.length ? (
					cart.map((item) => {
						return <CartItem key={item.id} {...item} />;
					})
				) : (
					<h1 className="my-12 font-bold text-3xl">
						Your Cart is Empty...
					</h1>
				)}
			</ul>
			{cart.length > 0 && (
				<h2 className="text-center text-3xl mb-10 font-extrabold italic">
					SubTotal:{" "}
					<span className="text-red-700">${subTotal.toFixed(2)}</span>
				</h2>
			)}
		</>
	);
};

export default Cart;
