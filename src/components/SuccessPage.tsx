import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
export function SuccessPage() {
  return (
    <div className="success-page">
      <h1 className="success-header">Your order has been placed</h1>
      <p className="success-text">
        Thank you for shopping with us. We will send you a confirmation email
        shortly.
      </p>
      <Link to="/">
      <button className="backHome-btn">
        Back to Home
        </button>
      </Link>
    </div>
  );
}