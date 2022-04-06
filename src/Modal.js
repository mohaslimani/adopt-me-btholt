import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal");

const Modal = ({ children }) => {
  // The useRef Hook allows you to persist values between renders.
  const myRef = useRef(null);
  if (!myRef.current) myRef.current = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(myRef.current);
    return () => modalRoot.removeChild(myRef.current);
    // use effect arrow function will return a function that will run when the component unmonunt
  }, []);

  return createPortal(<div> {children} </div>, myRef.current);
};

export default Modal;
