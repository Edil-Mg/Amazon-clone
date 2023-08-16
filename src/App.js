import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from "./Components/StateProvider/StateProvider";
import { auth } from "../src/Components/firebase/firebase";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

//components
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Login from "./Components/Login/Login";
import MoreProducts from "./Components/MoreProducts/MoreProducts";
import Payment from "./Components/Payments/Payment";
import Orders from "./Components/Orders/Orders";
import Carousel from "./Components/Carousel/Carousel";

const promise = loadStripe(
	"pk_test_51Nd2FSINVaoEEQY3RnU6Jw5mQ4UsB0EkMuWCmyfblnRuN0UMe22wxQELsOqNpQ4ngOGdySfCHKY1xNiT671s57aT00j2f3Xczi"
);



function App() {
	const [{}, dispatch] = useStateValue();

	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				<Routes>
					<Route
						path="/orders"
						element={
							<>
								<Header />
								<Orders />
							</>
						}
					/>
					<Route
						path="/login"
						element={
							<>
								<Header />
								<Login />
							</>
						}
					/>
					<Route
						path="/checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>

					<Route
						path="/payment"
						element={
							<>
								<Header />
								<Elements stripe={promise}>
									<Payment />
								</Elements>
							</>
						}
					/>

					<Route
						path="/moreproducts"
						element={
							<>
								<Header />
								<MoreProducts />
							</>
						}
					/>
					<Route
						path="/"
						element={
							<>
								<Header />
								<Carousel />
								<Home />
							</>
						}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
