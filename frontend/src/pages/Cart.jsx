import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/Cart/CartItem";
import { userRequest } from "../requestMethods";
import StripeCheckout from "react-stripe-checkout";
import Title from "../components/Title";
import { resetCartQuantity } from "../Redux/slice/cart";
import { useDispatch } from "react-redux";
import CartTotal from "../components/Cart/CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const cart = useSelector((state) => state.cart);
  const KEY = import.meta.env.VITE_STRIPE_KEY;
  const dispatch = useDispatch();
  const navigate= useNavigate();
  const handleReset = () => {
    console.log("click");
    dispatch(resetCartQuantity());
  };

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          token: stripeToken,
          amount: cart.total * 100,
        });
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title title={"YOUR CART"} />
      </div>
      <div>
        {cart.products.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </div>

      <div className="flex justify-end mt-6" >
          <div className="w-full sm:w-[450px]">
            <CartTotal/>
            <div className="w-full text-end">
              <StripeCheckout
                name="PRAGO"
                billingAddress
                shippingAddress
                description={`Your total bill is Rs. ${cart.total}`}
                amount={cart.total}
                token={onToken}
                stripeKey={KEY}
              >
              <button
              className="mt-5 py-3 px-6 bg-black text-white font-medium tracking-wider hover:scale-105 transition duration-200"
      
            >
              PAY NOW
            </button>
              </StripeCheckout>
           
            </div>
          </div>
      </div>
    </div>
  );
};

export default Cart;
