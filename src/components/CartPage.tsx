import { useSelector } from "react-redux";
import type { Item } from "../features/cartSlice";

export function CartPage() {
  const items = useSelector((state: any) => state.cart.items);

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
              <p className="cartPage-about">{item.about}</p>
              <div className="cartPage-price-details">
                <p className="cartPage-price">{item.price}</p>
                <div className="quantity-counter">
                  <p className="minus">-</p>
                  <p className="cartPage-quantity"> {item.quantity}</p>
                  <p className="plus">+</p>
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
          <button className="cartPage-checkout-btn">Checkout</button>
        </div>
      </div>
    </div>
  );
}
