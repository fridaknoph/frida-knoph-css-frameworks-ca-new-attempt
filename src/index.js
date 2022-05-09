import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { render } from "react-dom";
import { client } from "./utils/client";
import HomePage from "./pages/HomePage.js";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HomePage />
    </ApolloProvider>
  </React.StrictMode>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
