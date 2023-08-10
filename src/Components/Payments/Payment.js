import "./Payment.css";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "../axios/axios";
import { db } from "../firebase/firebase";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	const Navigate = useNavigate();

	const stripe = useStripe();
	const elements = useElements();

	const getBasketTotal = (basket) =>
		basket.reduce((amount, item) => item.price + amount, 0);
	// amount here is an accumulator and initial value is 0

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");

	const [clientSecret, setClientSecret] = useState(true);

	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true); // always disabled at first
	//this is the states for the buy now button

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: "post",
				url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
				//every thing after "?" is the query parameters
			});

			setClientSecret(response.data.clientSecret);
		};

		getClientSecret();
	}, [basket]);

	console.log("THE SECRET IS>>>", clientSecret);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				// paymentIntent = payment confirmation

				db.collection("users")
					.doc(user?.uid)
					.collection("orders")
					.doc(paymentIntent.id)
					.set({
						basket: basket,
						amount: paymentIntent.amount,
						created: paymentIntent.created,
					});

				setSucceeded(true);
				setError(null);
				setProcessing(false);

				dispatch({
					type: "EMPTY_BASKET",
				});

				Navigate("/orders");
			});
	};

	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : "");
	};

	return (
		<div className="payment">
			<div className="payment__container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>

				{/* Payment section - delivery address */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment__address">
						<p>{user?.email}</p>
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>

				{/* Payment section - Review Items */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Review items and delivery</h3>
					</div>
					<div className="payment__items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				{/* Payment section - Payment method */}
				<div className="payment__section">
					<div className="payment__title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment__details">
						{/* Stripe magic will go */}

						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />

							<div className="payment__priceContainer">
								<CurrencyFormat
									renderText={(value) => <h3>Order Total: {value}</h3>}
									decimalScale={2}
									value={getBasketTotal(basket)}
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing ? <p>Processing</p> : "Buy Now"}</span>
								</button>
							</div>

							{/* Errors */}
							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;

// try {
// 	const { paymentIntent } = await stripe.confirmCardPayment(
// 		clientSecret,
// 		{
// 			payment_method: {
// 				card: element.getElement(CardElement),
// 			},
// 		}
// 	);

// await db
// 	.collection("users")
// 	.doc(user?.uid)
// 	.collection("orders")
// 	.doc(paymentIntent.id)
// 	.set({
// 		basket: basket,
// 		amount: paymentIntent.amount,
// 		created: paymentIntent.created,
// 	});

// dispatch({
// 	type: "EMPTY_BASKET",
// });

// 		setSucceeded(true);
// 		setError(null);
// 		setProcessing(false);

// 		// Navigate here after all asynchronous operations are complete
// 		Navigate("/orders");
// 	} catch (error) {
// 		console.error("Error confirming payment:", error);
// 		setError("An error occurred while processing the payment.");
// 		setProcessing(false);
// 	}
// };
