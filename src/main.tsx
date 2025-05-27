import { FORM_CONFIG } from "constants/formConfig";
import { BrowserRouter } from "react-router-dom";
import { THEME_CONFIG } from "constants/theme";
import { createRoot } from "react-dom/client";
import { ConfigProvider, App } from "antd";
import { Routes } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { StrictMode } from "react";

import "./i18n";
import "./styles/global.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider theme={THEME_CONFIG} form={FORM_CONFIG} direction="ltr">
      <App>
        <Provider store={store}>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </Provider>
      </App>
    </ConfigProvider>
  </StrictMode>
);
