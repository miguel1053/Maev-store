import { StrictMode } from "react";

import * as ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/index"; // Certifique-se de apontar para o arquivo correto
import { createRoot } from "react-dom/client";
import App from "../App";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Elemento #root não encontrado!");
}
