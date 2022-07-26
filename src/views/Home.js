/** @jsxImportSource theme-ui */
import React, { useContext } from "react"
import { Button } from "theme-ui"
import Cart from "../components/Cart"
import Modal from "../components/ui/Modal"
import AppContext from "../context/app-context"

const Home = () => {
  const { appState, openModal, closeModal } = useContext(AppContext)

  const { isModalOpen, isRightButtonDisabled } = appState

  return (
    <section
      sx={{
        bg: "background",
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        alignItems: "center",
      }}
    >
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <Cart />
        </Modal>
      )}
      <div
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "1200px",
        }}
      >
        <Button onClick={openModal} disabled={!isRightButtonDisabled}>
          LEFT
        </Button>
        <Button onClick={openModal} disabled={isRightButtonDisabled}>
          RIGHT
        </Button>
      </div>
    </section>
  )
}

export default Home
