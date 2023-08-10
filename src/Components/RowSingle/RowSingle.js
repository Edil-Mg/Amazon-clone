import React from "react";
import "./RowSingle.css";
import { Link } from "react-router-dom";

function RowSingle({ tittle, image, description }) {
	return (
		<div className="row__single">
			<h2 className="single__tittle">{tittle}</h2>
			<div className="imag__container">
				<img src={image} alt="" />

				
			<Link to="/moreproducts" className="bottom__link">
				<p className="single__description">Shop style savings</p>
			</Link>
			</div>
		</div>
	);
}

export default RowSingle;
