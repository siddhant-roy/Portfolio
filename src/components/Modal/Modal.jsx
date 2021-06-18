import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ closeModal }) => {
  return ReactDOM.createPortal(
    <div onClick={closeModal} className="modal-overlay">
      <div onClick={(e) => e.stopPropagation()} className="modal-container">
        <div className="upper-section">
          <h1>Welcome to my portfolio!</h1>
          <p onClick={closeModal} className="close">
            &times;
          </p>
        </div>
        <div className="middle-section">
          <h3>This website is still in progress!</h3>
          <p>
            If you have any suggestions or queries, you can contact me on
            LinkedIn using the below button or through the contact page in this
            website
          </p>
          <p>Have a great day :)</p>
        </div>
        <div className="lower-section">
          <button onClick={closeModal} className="modal-btn btn-red">
            Close
          </button>
          <a
            href="https://www.linkedin.com/in/siddhantroy/"
            target="_blank"
            rel="noreferrer"
            className="modal-btn btn-green"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
