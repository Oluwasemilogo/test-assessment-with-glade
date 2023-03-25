import data from "../data/items.json";
import { useParams } from "react-router-dom";
import "../App.css";
import { Link } from "react-router-dom";

export function DetailsPage() {
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
            <p className="details-price">{item.price}</p>
            <p className="details-about">{item.about}</p>
            <div className="cart-btn-container">
              <button className="cart-btn">Add to Cart</button>
            </div>
          </div>
        </section>
        <section className="details-section">
          <h2 className="details-description-header">Description</h2>
          <p className="details-description">{item.description}</p>
        </section>
      </div>
    );
}




