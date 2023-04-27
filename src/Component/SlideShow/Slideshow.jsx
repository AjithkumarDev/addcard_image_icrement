import React, { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";
import images from "./Data";

export default function Slideshow() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setActiveIndex(index);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const handleWheel = (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      setZoomLevel(Math.min(zoomLevel + 0.1, 2));
    } else if (event.deltaY > 0) {
      setZoomLevel(Math.max(zoomLevel - 0.1, 1));
    }
  };

  return (
    <div className="container">
      <div>
        <Carousel
          activeIndex={activeIndex}
          onSelect={(index) => setActiveIndex(index)}
        >
          {images.map((image, index) => (
            <Carousel.Item key={image.id}>
              <img
                className="d-block w-100"
                style={{
                  maxHeight: "400px",
                  maxWidth: "100% ",
                  padding: "10px 0 0",
                }}
                src={image.src}
                alt={image.alt}
              />
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="">
          {images.map((image, index) => (
            <div key={image.id}>
              <img
                className="d-block w-100"
                style={{
                  maxHeight: "100px",
                  maxWidth: "20% ",
                  float: "left",
                  padding: "5px 5px 0 0",
                }}
                src={image.src}
                alt={image.alt}
                onClick={() => handleImageClick(image, index)}
              />
            </div>
          ))}
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        style={{ width: "80%", borderRadius: "20px" }}
      >
        <Modal.Body
          centered
          style={{
            padding: 0,
            border: 0,
            borderRadius: "50%",
          }}
        >
          <img
            src={selectedImage?.src}
            alt={selectedImage?.alt}
            onWheel={handleWheel}
            style={{
              borderRadius: "20px",
              width: "120%",
            }}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
