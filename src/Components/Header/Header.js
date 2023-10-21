import React from 'react'
import "./Header.css"
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider/StateProvider';
import { auth } from '../firebase/firebase';



function Header() {
	const [{ basket, user }, dispatch] = useStateValue();

	const handleAuthenticaton = () => {
		if (user) {
			auth.signOut();
		}
	};

  return (
		<div className="header">
			<Link to="/">
				<img
					className="header__logo"
					src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				/>
			</Link>
			<Link to="/" className="header__deliveryLink">
				<span className="header__deliveryIcon">
					<LocationOnIcon fontSize="small" />
				</span>
				<span className="header__optionLineOne">Delivering to</span>
				<span className="header__optionLineTwo">Your Location</span>
			</Link>
			<div className="header__search">
				<input className="header__searchInput" type="text" placeholder='Search Amazon'/>
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header__nav">
				<Link to={!user && "/login"}>
					<div onClick={handleAuthenticaton} className="header__option">
						<span className="header__optionLineOne">
							Hello {!user ? "Guest" : user.email}
						</span>
						<span className="header__optionLineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>
					</div>
				</Link>
				<Link to="/orders">
					<div className="header__option">
						<span className="header__optionLineOne">Returns</span>
						<span className="header__optionLineTwo">& Orders</span>
					</div>
				</Link>

				<div className="header__option">
					<span className="header__optionLineOne">Your</span>
					<span className="header__optionLineTwo">Prime</span>
				</div>

				<Link to="/checkout">
					<div className="header__optionBasket">
						<ShoppingCartIcon />
						<span className="header__optionLineTwo header__basketCount">
							{basket.length}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Header