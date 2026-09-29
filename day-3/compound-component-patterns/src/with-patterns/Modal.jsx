import React from "react";

function Modal({ children, isOpen, isClose }) {
  if (!isOpen) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal-container">{children}</div>
      <button className="modal-close" onClick={isClose}>
        X
      </button>
    </div>
  );
}

export function ModalHeader({ children }) {
  return <div className="modal-header">{children}</div>;
}

export function ModalBody({ children }) {
  return <div className="modal-body">{children}</div>;
}

export function ModalFooter({ children }) {
  return <div className="modal-footer">{children}</div>;
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
