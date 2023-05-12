import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {persistor, store} from "./store/store.jsx";
import { PersistGate } from 'redux-persist/integration/react';
import Spinner from "./components/Spinner.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={<Spinner />} persistor={persistor} >
      <App />
      </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
