import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
export function CancelPage() {
  return (
    <div className="cancel-page">
      <h1 className="cancel-header">Your order has been cancelled</h1>
      <p className="cancel-text">
        Thank you for shopping with us. We hope to see you again soon.
          </p>
            <Link to="/">
              <button className="backHome-btn">Back to Home</button>
            </Link>
          
    </div>
  );
}