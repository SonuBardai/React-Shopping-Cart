import { useGlobalContext } from "../context";

import { AiFillDelete } from "react-icons/ai";

const CartItem = ({ id, name, amount, size, color, price, total, image }) => {
	const { incrementItem, decrementItem, removeItem } = useGlobalContext();
	return (
		<>
			<li className="flex items-center justify-between py-4 h-[170px] w-[700px] rounded-lg px-12 my-10 shadow-lg shadow-gray-400">
				<div className="flex items-start">
					<img
						className="flex-shrink-0 object-cover w-32 h-24 rounded-lg"
						src={image}
						alt=""
					/>

					<div className="ml-4">
						<p className="text-lg font-bold italic text-red-700">
							{name}
						</p>

						<div className="mt-1 space-y-1 text-gray-500">
							<div>
								<div className="inline">Color: {color}</div>
							</div>
							<div>
								<div className="inline">Sizes: {size}</div>
							</div>
							<div>
								<div className="inline">
									${price.toFixed(2)} each
								</div>
							</div>
						</div>
					</div>
				</div>
				<div>
					<div className="my-2 flex flex-col items-center justify-center">
						<button
							className="text-2xl font-bold text-red-700"
							onClick={() => incrementItem(id)}
						>
							+
						</button>
						<p>{amount}</p>
						<button
							className="text-2xl font-bold text-red-700"
							onClick={() => decrementItem(id)}
						>
							-
						</button>
						<AiFillDelete
							className="cursor-pointer text-red-700 my-1"
							onClick={() => removeItem(id)}
						/>
					</div>
					<p className="text-lg font-bold italic">
						${total.toFixed(2)}
					</p>
				</div>
			</li>
		</>
	);
};

export default CartItem;
