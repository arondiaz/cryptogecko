import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CoinContextProvider from "./context/CoinContext.jsx";
import ExchangeContextProvider from "./context/ExchangeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <CoinContextProvider>
        <ExchangeContextProvider>
          <App />
        </ExchangeContextProvider>
      </CoinContextProvider>
    </BrowserRouter>
  </StrictMode>
);
