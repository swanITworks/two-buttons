export const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
    monospace: "Menlo, monospace",
  },
  colors: {
    text: "#000",
    background: "#fff",
    primary: "#e5053a",
    secondary: "#E3EDF7",
    third: "#00294B",
  },
  buttons: {
    primary: {
      color: "background",
      bg: "primary",
      fontSize: 8,
      cursor: "pointer",
      "&:hover": {
        bg: "text",
      },
      "&:disabled": {
        bg: "secondary",
        color: "textOnDark",
        cursor: "default",
      },
    },
    small: {
      fontSize: 3,
      bg: "third",
      cursor: "pointer",
    },
  },
}
