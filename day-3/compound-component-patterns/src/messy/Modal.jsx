import React from "react";

function Modal({ title, body, secondaryAction, primaryAction }) {
  return (
    <div className="modal-backdrop">
      <div className="modal-container">
        <h2 className="modal-header">{title}</h2>
        <div className="modal-body">{body}</div>
        <div className="modal-footer">
          <button className="footer-buttons">{secondaryAction}</button>
          <button className="footer-buttons">{primaryAction}</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
