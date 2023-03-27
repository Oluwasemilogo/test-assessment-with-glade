import data from "../data/items.json";
import { useParams } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../features/cartSlice";

export function DetailsPage() {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.cart.items);
  const { name } = useParams();
  // Find the item that matches the name parameter
  const item = data.find((item) => item.name === name);
  if (!item) {
    // If the item is not found, display an error message
    return <p>Item not found</p>;
  }

  return (
    <div className="details-container">
      <Link to="/" className="return-link">
        <div>
          <button className="back-btn">Back</button>
        </div>
      </Link>
      <section className="details-content">
        <div className="details-image-container">
          <div>
            <img src={item["img-url"]} alt="" className="details-image" />
          </div>
        </div>
        <div className="details-text">
          <h1 className="details-name">{item.name}</h1>
          <p className="details-model">{item.model}</p>
          <p className="details-price">${item.price}</p>
          <p className="details-about">{item.about}</p>
          <Link
            to="/cart"
            style={{
              color: "inherit",
              textDecoration: "inherit",
            }}
          >
            <div className="cart-btn-container">
              <button
                className="cart-btn"
                onClick={() => {
                  dispatch(addToCart(item));
                  console.log(items);
                }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        </div>
      </section>
      <section className="details-section">
        <h2 className="details-description-header">Description</h2>
        <p className="details-description">{item.description}</p>
      </section>
    </div>
  );
}
