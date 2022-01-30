const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send("Home page");
});



const KEY = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(KEY);
app.post('/cart/payment', (req, res) => {
    stripe.charges.create(
        {
            source: req.body.tokenId,
            amount: req.body.amount,
            currency: "aud",
        },
        (stripeErr, stripeRes) => {
            if (stripeErr) {
                res.status(500).json(stripeErr);
            } else {
                res.status(200).json(stripeRes);
            }
        }
   )
    
    res.send(body);
});

app.listen(4000, () => {
    console.log('running on port 4000')
});