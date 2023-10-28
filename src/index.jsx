import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./i18n";
import "./index.css";
import NavigationContextProvider from "../src/context/NavigationContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavigationContextProvider>
      <App />
    </NavigationContextProvider>
  </React.StrictMode>
);
