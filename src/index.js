import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ThemeProvider } from "theme-ui"
import { theme } from "./theme-ui/theme"
import { AppStateProvider } from "./context/app-provider"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <ThemeProvider theme={theme}>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </ThemeProvider>
)
