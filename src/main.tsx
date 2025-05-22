import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { AppRoutes } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StrictMode } from "react";

import "./i18n";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
