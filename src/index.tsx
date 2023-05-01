import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ApiState from "./contexts";
import Providers from "./contexts/userContext";
import CarsContext from "./contexts/carsContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApiState>
        <Providers>
          <CarsContext>
            <App />
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </CarsContext>
        </Providers>
      </ApiState>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
