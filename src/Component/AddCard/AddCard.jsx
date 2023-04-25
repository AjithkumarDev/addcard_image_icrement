import React, { useState } from "react";
import "./AddCard.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function AddCard() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(0);
    }
  };

  const handleAddCard = (count) => {
    if (count > 0) {
      const totalAmount = count * 349;
      console.log(totalAmount);
    } else {
      alert("Select the product");
    }
  };
  const isCountZero = count === 0;
  return (
    <div className="container">
      <div>
        <h3>Shoe For Sale</h3>
        <p>
          A shoe is an item of footwear intended to protect and comfort the
          human foot. They are often worn with a sock. Shoes are also used as an
          item of decoration and fashion.
        </p>

        <h2>Rs.349/- per shoe</h2>

        <div className="CardBtn">
          <button className="btn btn-danger" onClick={handleDecrement}>
            -
          </button>
          <h3>{count}</h3>
          <button className="btn btn-primary" onClick={handleIncrement}>
            +
          </button>

          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            disabled={isCountZero}
            onClick={() => handleAddCard(count)}
          >
            Add Card
          </button>
        </div>
      </div>

      {/* Offcanvas */}
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div class="offcanvas-header">
          <h5 id="offcanvasRightLabel">Shopping Cart</h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Number of Shoes: {count}</p>
          <p>Total Amount: {count * 349}</p>
          <button className="btn btn-success m-2">Pay Now</button>
          <button className="btn btn-danger">Cancel</button>
        </div>
      </div>
    </div>
  );
}
