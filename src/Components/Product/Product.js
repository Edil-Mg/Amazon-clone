import React from "react";
import "./Product.css";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, image, price, rating }) {
	const [{ basket }, dispatch] = useStateValue();
	// console.log('here is the basket', basket)
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
	return str.length > n ? str.substr(0, n - 1) + "..." : str;
}
	return (
		<div className="product">
			<div className="product__info">
				<p>{truncate(title, 80)}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<p>🌟</p>
						))}
				</div>
			</div>

			<img src={image} alt="" />

			<button onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
