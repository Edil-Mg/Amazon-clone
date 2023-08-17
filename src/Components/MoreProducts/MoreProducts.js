import React from "react";
import "./MoreProducts.css";
import { useStateValue } from "../StateProvider/StateProvider";

function MoreProducts({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();

	const addToBasket = () => {
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				image: image,
				price: price,
				rating: rating,
			},
		});
	};

	function truncate(str, n) {
		if (str && str.length > n) {
			return str.substr(0, n - 1) + "...";
		}
		return str;
	}

	return (
		<div className="MoreProducts">
			<div className="MoreProducts__info">
				<p>{truncate(title, 80)}</p>
				<p className="MoreProducts__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="MoreProducts__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p key={i}>🌟</p>
						))}
				</div>
			</div>

			<img src={image} alt="" />

			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default MoreProducts;
