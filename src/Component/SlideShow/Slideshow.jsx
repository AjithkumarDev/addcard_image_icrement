import React, { useState } from "react";
import { Carousel, Modal } from "react-bootstrap";

export default function Slideshow() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  const images = [
    {
      id: 1,
      src: "./images/image-product-1.jpg",
      alt: "First slide",
    },
    {
      id: 2,
      src: "./images/image-product-2.jpg",
      alt: "Second slide",
    },
    {
      id: 3,
      src: "./images/image-product-3.jpg",
      alt: "Third slide",
    },
    {
      id: 4,
      src: "./images/image-product-4.jpg",
      alt: "Third slide",
    },
  ];

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

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Body style={{ overflow: "auto" }}>
          <img
            style={{ maxHeight: `${500 * zoomLevel}px`, maxWidth: "100%" }}
            src={selectedImage?.src}
            alt={selectedImage?.alt}
            onWheel={handleWheel}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
}
