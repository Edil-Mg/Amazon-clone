const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51Nd2FSINVaoEEQY3K90L9HUZ7m2kCjesmSc1HLiUY12OIU5mG4A4ngHl8vwj7nDJ92x6EQjdlTcG7lStaYFuyaFg00Ni7LNHkh"
);

// App config
const app = express();

//  Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Recieved for this amount >>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: "usd",
	});

	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

//  Listen command
exports.api = functions.https.onRequest(app);

// const { onRequest } = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
// // const functions = require('firebase-functions'); // Corrected typo

// const express = require('express');
// const cors = require('cors'); // Corrected typo
// const stripe = require("stripe")(
//   'sk_test_51Nd2FSINVaoEEQY3K90L9HUZ7m2kCjesmSc1HLiUY12OIU5mG4A4ngHl8vwj7nDJ92x6EQjdlTcG7lStaYFuyaFg00Ni7LNHkh'
// );

// // App config
// const app = express();

// // Middlewares
// app.use(cors({ origin: true }));
// app.use(express.json()); // Corrected typo

// app.get('/', (request, response) => response.status(200).send('hello world'));

// // app.post('/payments/create', async(request, response) => {
// //     const total = request.query.total;
// //     console.log('Payment Request Received for this amount >>> ', total);
// //     const paymentIntent = await stripe.paymentIntents.create({
// //         amount: total,
// //         currency: 'usd',
// //     })
// //     // OK - Created
// //     response.status(201).send({
// //         clientSecret: paymentIntent.client_secret,
// //     })
// // })

// // Listen command here
// exports.api = functions.https.onRequest(app); // Corrected typo
