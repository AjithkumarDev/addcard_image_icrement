import React from "react";
import "./FrontUI.css";
import Slideshow from "./SlideShow/Slideshow";
import AddCard from "./AddCard/AddCard";

export default function FrontUI() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img src="./images/logo.svg" alt="" />
          </a>

          <div className=" navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Collections
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container container1">
        <div className="slider col-5">
          <Slideshow />
        </div>
        <div className="addcard col-7">
          <AddCard />
        </div>
      </div>
    </div>
  );
}
