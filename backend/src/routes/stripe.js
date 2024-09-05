const router = require("express").Router();
const stripe = require("stripe")(process.env.STRIPE_KEY);
const {v4:uuidv4} = require("uuid");

router.post("/payment", async (req, res) => {
  const { product, token } = req.body;
  const idempotencyKey = uuidv4();

  return stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      stripe.paymentIntents.create(
        {
          amount: product.price * 100,
          currency: "usd",
          customer: customer.id,
          receipt_email: token.email,
          description: `purchase of ${product.name}`,
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
