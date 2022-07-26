import { useReducer } from "react"
import AppContext from "./app-context"

const initialState = {
  isRightButtonDisabled: true,
  isModalOpen: false,
}

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ON_OFF_BUTTON":
      return {
        ...state,
        isRightButtonDisabled: !state.isRightButtonDisabled,
      }
    case "OPEN_MODAL":
      return {
        ...state,
        isModalOpen: true,
      }
    case "CLOSE_MODAL":
      console.log("close modal!")
      return {
        ...state,
        isModalOpen: false,
      }
    default:
      return state
  }
}

export const AppStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState)

  const openModalHandler = () => {
    dispatch({ type: "OPEN_MODAL" })
  }

  const closeModalHandler = () => {
    dispatch({ type: "CLOSE_MODAL" })
  }

  const toggleDisableButtonHandler = () => {
    dispatch({ type: "TOGGLE_ON_OFF_BUTTON" })
  }

  const appStateCtx = {
    appState: state,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
    toggleButton: toggleDisableButtonHandler,
  }

  return (
    <AppContext.Provider value={appStateCtx}>{children}</AppContext.Provider>
  )
}
