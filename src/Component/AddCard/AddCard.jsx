import React, { useState } from "react";
import "./AddCard.css";
import { Modal } from "react-bootstrap";

export default function AddCard() {
  const [count, setCount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

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

  const handleAddCard = () => {
    if (count > 0) {
      const totalAmount = count * 349;
      setShowModal(true);
      console.log(totalAmount);
    } else {
      alert("Select the product");
    }
  };

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

          <button className="btn btn-primary" onClick={handleAddCard}>
            Add Card
          </button>
          <Modal show={showModal} onHide={handleCloseModal} centered>
            <Modal.Body style={{ textAlign: "center" }}>
              <p>{count} shoes have been added to your cart.</p>
              <p>Total amount Rs: {count * 349}</p>
              <button className="btn btn-success">Click to Pay</button>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
}
