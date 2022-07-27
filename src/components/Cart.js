/** @jsxImportSource theme-ui */
import React, { useCallback, useContext } from "react"
import { Button, Close } from "theme-ui"
import AppContext from "../context/app-context"

const Cart = () => {
  const { appState, closeModal, toggleButton } = useContext(AppContext)

  const { isRightButtonDisabled } = appState

  const onClickYesButtonHandler = useCallback(() => {
    closeModal()
    toggleButton()
  }, [])

  const onClickNoButtonHandler = useCallback(() => {
    closeModal()
  }, [])

  return (
    <div sx={{ p: 5 }}>
      <div sx={{ textAlign: "right" }}>
        <Close onClick={closeModal} />
      </div>
      <p sx={{ textAlign: "center" }}>
        Would you like to make active {isRightButtonDisabled ? "RIGHT" : "LEFT"}{" "}
        button?
      </p>
      <div sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button variant="small" onClick={onClickYesButtonHandler}>
          YES
        </Button>
        <Button onClick={onClickNoButtonHandler} variant="small">
          NO
        </Button>
      </div>
    </div>
  )
}

export default Cart
