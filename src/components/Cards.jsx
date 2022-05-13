import Card from "./Card";

const Cards = ({cards}) => {
	return (
		<div className="my-16">
			<strong className="text-center mb-10 text-4xl font-extrabold text-red-700 sm:block">
				Our Stuff!
			</strong>
			<div className="flex justify-center items-center gap-14">
				{cards.map((card) => (
					<Card
						key={card.id}
						title={card.title}
						content={card.content}
						icon={card.icon}
					/>
				))}
			</div>
		</div>
	);
};

export default Cards;
