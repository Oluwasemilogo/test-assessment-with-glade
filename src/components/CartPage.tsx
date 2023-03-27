import { loadStripe, RedirectToCheckoutOptions } from "@stripe/stripe-js";
import { useSelector } from "react-redux";
import { addToCart, Item, removeFromCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { Stripe } from "@stripe/stripe-js";

export function CartPage() {
  const items = useSelector((state: any) => state.cart.items);
  const dispatch = useDispatch();

  let stripePromise: Promise<Stripe | null>;

  const getStripe = () => {
    if (!stripePromise) {
      stripePromise = loadStripe(
        "pk_test_51MqEXXHiuRXXH1aDWaqjwoYq1RjxG6PeG9pVeJ8hblzgbr0Crr0Pa8wmfcJ3SIjiNDwJ3i8r4iZQ0vuHs4cG0Wv400UGSQx9hO"
      );
    }
    return stripePromise;
  };

  const prod = items.map((item: Item) => {
    return { price: item.priceId, quantity: item.quantity };
  });
  const products = [...prod];
  console.log(products);

  const checkoutOptions: RedirectToCheckoutOptions = {
    cancelUrl: `${window.location.origin}/cancel`,
    successUrl: `${window.location.origin}/success`,
    lineItems: products,
    mode: "payment",
  };
  const redirectToCheckout = async (): Promise<void> => {
    console.log("redirectingToCheckout");

    const stripe = await getStripe();
    const error = await stripe?.redirectToCheckout(checkoutOptions);
    console.log("Stripe Checkout error", error);
  };

  return (
    <div className="cartPage-overall-container">
      <div className="cart-session">
        <h1 className="cartPage-header">Check your Cart Items</h1>
        {items.map((item: Item) => (
          <div key={item.name} className="cartPage-container">
            <div className="cartPage-image-container">
              <img src={item["img-url"]} alt="" className="cartPage-image" />
            </div>
            <div className="cartPage-content">
              <p className="cartPage-name">{item.name}</p>
              <p className="cartPage-model">{item.model}</p>
              <p className="cartPage-about">{item.about} </p>
              <div className="cartPage-price-details">
                <p className="cartPage-price">
                  ${+item.price * item.quantity}{" "}
                </p>
                <div className="quantity-counter">
                  <p
                    className="minus"
                    onClick={() => {
                      dispatch(removeFromCart(item));
                    }}
                  >
                    -
                  </p>
                  <p className="cartPage-quantity"> {item.quantity}</p>
                  <p
                    className="plus"
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                  >
                    +
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="cartPage-checkout">
        <h2 className="cartPage-name">Cart Checkout</h2>
        <p className="cartPage-total">Cart Total</p>
        <div className="cartPage-checkout-btn-container">
          <button
            className="cartPage-checkout-btn"
            onClick={redirectToCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
