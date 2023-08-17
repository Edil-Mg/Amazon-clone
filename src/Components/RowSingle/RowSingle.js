import React from "react";
import "./RowSingle.css";
import { Link } from "react-router-dom";
// import { Container } from "@mui/material";
// import { Container, Row, Col } from "react-bootstrap";

function RowSingle({ tittle, image, description }) {
	return (
		<div className="single__row">
			<h2 className="rowSingle__tittle">{tittle}</h2>
			<Link to="/moreproducts">
				<img src={image} alt="" />
			</Link>
			<Link to="/moreproducts" className="bottom__link">
				<span>{description}</span>
			</Link>
		</div>
	);
}

export default RowSingle;

