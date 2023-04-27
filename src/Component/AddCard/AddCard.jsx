import React, { useState } from "react";
import "./AddCard.css";
import "bootstrap/dist/js/bootstrap.bundle";

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

        <div>
          <h2 style={{ fontWeight: "700" }}>
            $349.00
            <span
              style={{
                color: "darkorange",
                fontSize: "1.1rem",
                padding: "5px",
                margin: "5px",
              }}
              className="badge bg-orange"
            >
              50%
            </span>
          </h2>
        </div>
        <div style={{ opacity: "0.3", margin: "0 6rem 1.5rem 0" }}>
          <s>$250.00 </s>
        </div>

        <div className="CardBtn">
          <button className="btn btn-colorcard btn-light btncards ">
            <span className="btn btn-orange" onClick={handleDecrement}>
              <img src="./images/icon-minus.svg" alt="No thanks" />
            </span>
            <h4>{count}</h4>
            <span className="btn btn-orange" onClick={handleIncrement}>
              <img src="./images/icon-plus.svg" alt="No thanks" />
            </span>
          </button>

          <button
            class="btn btn-Addcard"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
            disabled={isCountZero}
            onClick={() => handleAddCard(count)}
          >
            <img
              src="./images/icon-cart.svg"
              alt="No thanks"
              style={{ filter: "invert(100%)" }}
            />
            Add Card
          </button>
        </div>
      </div>

      {/* Offcanvas */}

      <div className="CardOffsets ">
        <div
          class="offcanvas top-0 end-0 m-3"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div className=" image-container">
            <div className="purchaseCheckout">
              <img
                style={{ width: "2rem", margin: "0 0rem 0 10rem" }}
                src="./images/icon-cart.svg"
                alt="No Img"
              />
              <span className="badge  badge-top ">{count}</span>
            </div>
            <div>
              <img
                className="image_Avatar"
                style={{ width: "2rem", margin: "0 3rem 0 15rem" }}
                src="./images/image-avatar.png"
                alt="No Img"
              />
            </div>
          </div>
          <hr />
          <div class="offcanvas-header">
            <p style={{ fontWeight: "550", margin: "10px" }}>Card</p>
          </div>
          <hr />
          <div className="offcanvas-body  ">
            <div className="offcanvas_content">
              <img
                className="checkoutImage"
                src="./images/image-product-1-thumbnail.jpg"
                alt="Nothing to show"
              />
              <span>
                <p className="m-0 ">Fall Limited Edition Sneakers </p>
                <p>
                  {`$${349.0}x${count}  `}
                  <b>{`$${count * 349.0} `} </b>
                </p>
              </span>
              <img
                className="checkoutdelete"
                src="./images/icon-delete.svg"
                alt="Nothing to show"
              />
            </div>

            <button className="btn btn-custom1 m-2 col-12">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
