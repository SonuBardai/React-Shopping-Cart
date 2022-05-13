const Card = ({ title, content, icon }) => {
	return (
		<>
			<a
				href=""
				className="relative block group h-96 w-[300px] rounded-lg"
			>
				<span className="absolute inset-0 border-2 border-black border-dashed"></span>

				<div className="relative flex items-end h-full transition-transform transform bg-white border-2 border-black group-hover:-translate-x-2 group-hover:-translate-y-2">
					<div className="px-8 pb-8 transition-opacity group-hover:opacity-0 group-hover:absolute">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 640 512"
							width={60}
						>
							<path d={icon} />
						</svg>

						<h2 className="mt-4 text-2xl font-medium">{title}</h2>
					</div>

					<div className="absolute p-8 transition-opacity opacity-0 group-hover:opacity-100 group-hover:relative">
						<h2 className="mt-4 text-2xl font-medium">{title}</h2>

						<p className="mt-4">{content}</p>

						<p className="mt-8 font-bold">Read more</p>
					</div>
				</div>
			</a>
		</>
	);
};

export default Card;
