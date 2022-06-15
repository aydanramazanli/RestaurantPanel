import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataProvider } from "./Datas/Context";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain="dev-m4efr6j5.us.auth0.com"
        clientId="YEAsIhSV30GUSFbYWzAiITfeXhNYtdyd"
        redirectUri={window.location.origin}
      >
        <DataProvider>
          <App />
        </DataProvider>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>
);
