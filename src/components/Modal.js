import React from "react";
import  ReactDOM  from "react-dom";

function Modal({ isOpen, children }) {
  if (!isOpen) return null;
  return  ReactDOM.createPortal(
    <div>
      <div className="fixed top-0 left-0 right-0 bottom-0 opacity-70 z-[1000]" />
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white m-0 border-0 p-0 z-[1000]">
        {children}
      </div>
    </div>
    , document.getElementById("portal")
  );
}

export default Modal;
