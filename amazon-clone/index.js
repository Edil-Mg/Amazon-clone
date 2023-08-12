/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });




// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")(process.env.Skey);
// // - App config
// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => res.send("its working"));

// app.post("/payments/create", async (req, res) => {
// 	try {
// 		const total = req.query.total;
// 		const paymentIntent = await stripe.paymentIntents.create({
// 			amount: parseInt(total),
// 			currency: "usd",
// 		});
// 		res.send({
// 			clientSecret: paymentIntent.client_secret,
// 		});
// 	} catch (error) {
// 		console.log(error.message);
// 		res.status(500).send("server error");
// 	}
// });

// app.listen(8990, () => {
// 	console.log("server is listening to 8990");
// });