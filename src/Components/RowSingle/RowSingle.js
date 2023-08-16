import React from "react";
import "./RowSingle.css";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
// import { Container, Row, Col } from "react-bootstrap";

function RowSingle({ tittle, image, description }) {
	return (
		<div className="row__single">
			<h2 className="single__tittle">{tittle}</h2>
			<Link to="/moreproducts">
				<img src={image} alt="" />
			</Link>
			<Link to="/moreproducts" className="bottom__link">
				<p className="single__description">{description}</p>
			</Link>
		</div>
	);
}

export default RowSingle;

