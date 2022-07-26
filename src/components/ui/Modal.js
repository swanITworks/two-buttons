/** @jsxImportSource theme-ui */
import { keyframes } from "@emotion/react"

import ReactDOM from "react-dom"

const Backdrop = ({ onBackDropClick }) => {
  const backDropStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100vh",
    zIndex: "20",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  }

  return <div onClick={onBackDropClick} sx={backDropStyle}></div>
}

const ModalOverlay = ({ children }) => {
  const slideDown = keyframes` from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }`

  const modalStyle = {
    position: "fixed",
    top: "5%",
    width: "35%",
    left: "34%",
    backgroundColor: "white",
    padding: "0",
    borderRadius: "0px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)",
    zIndex: "30",
    animation: `${slideDown} 300ms ease-out forwards`,
    maxHeight: "90vh",
    overflowY: "auto",
  }
  return (
    <div sx={modalStyle}>
      <div>{children}</div>
    </div>
  )
}

const portalElement = document.getElementById("overlays")

const Modal = ({ children, onClose, boxWidthPx }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onBackDropClick={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay width={boxWidthPx}>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  )
}

export default Modal
