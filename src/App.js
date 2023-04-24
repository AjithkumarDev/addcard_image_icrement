import { Modal } from "react-bootstrap";
import "./App.css";
import FrontUI from "./Component/FrontUI";
import { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="App">
      <FrontUI />

      <div class="attribution">
        <span
          className="btn "
          onClick={() => {
            setShowModal(true);
          }}
        >
          Click Here
        </span>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body style={{ textAlign: "center" }}>
          <p style={{ textAlign: "center" }}>Successfully created</p>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default App;
