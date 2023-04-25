import React, { useState } from "react";
import { Modal } from "react-bootstrap";

Modal.setAppElement("#root");

function Sided() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Example App</h1>
        <button onClick={openModal}>Open Modal</button>
      </header>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Modal Content</h2>
        <p>
          This is an example of a modal popup that replaces a side slide bar.
        </p>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default Sided;
