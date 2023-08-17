import React from 'react'
import "./Row.css"
import { Link } from "react-router-dom";
import MoreProducts from '../MoreProducts/MoreProducts';



function Row({
	image1,
	image2,
	image3,
	image4,
	tittle,
	description,
	subtitle1,
	subtitle2,
	subtitle3,
	subtitle4,
}) {
	return (
		<div className="row">
			<p className="single__tittle">{tittle}</p>
			<div className="row__container">
				<div className="top__row">
					<div className="img__one">
						<Link to="/moreproducts" className="img__links">
							<img src={image1} alt="" />
							<p>{subtitle1}</p>
						</Link>
					</div>

					<div>
						<Link to="/moreproducts" className="img__links">
							<img src={image2} alt="" />
							<p>{subtitle2}</p>
						</Link>
					</div>
				</div>

				<div className="bottom__row">
					<div className="img__two">
						<Link to="/moreproducts" className="img__links">
							<img src={image3} alt="" />
							<p>{subtitle3}</p>
						</Link>
					</div>
					<div>
						<Link to="/moreproducts" className="img__links">
							<img src={image4} alt="" />
							<p>{subtitle4}</p>
						</Link>
					</div>
				</div>
			</div>
			<Link to="/moreproducts" className="b__link">
				<span className="linked__desc">{description} </span>
			</Link>
		</div>
	);
}

export default Row