const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const {v4:uuidv4} = require("uuid");

router.post("/payment", async (req, res) => {
  const {token,amount } = req.body;
  const idempotencyKey = uuidv4();

  return stripe.customers
    .create({
      source: token.id,
      email: token.email,
    })
    .then((customer) => {
      stripe.paymentIntents.create(
        {
          amount: amount,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          // description: `purchase of ${product.name}`,
          shipping: {
            name: token.card.name,
            address: {
              country: token.card.address_country,
            },
          },
        },
        { idempotencyKey }
      );
    })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => console.log(err));
});
module.exports = router;
