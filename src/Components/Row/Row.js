import React from 'react'
import "./Row.css"
import { Link } from "react-router-dom";



function Row({ image, description }) {
	
	

	return (
		<div className="row">
			<div className='row__image'>
				<img src={image} alt="" />
			</div>
			<Link to="/moreproducts" className="link">
				<span className="linked__desc">{description} </span>
			</Link>
		</div>
	);
}

export default Row