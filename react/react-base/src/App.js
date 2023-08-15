import React from "react";
import { Router } from "react-router-dom";
<<<<<<< HEAD
import { ToastContainer } from "react-toastify";

import history from "./services/history";
=======

import { history } from "./services/history";
>>>>>>> 2b53ddc (update)
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./components/Header";
import Routes from "./routes";

function App() {
  return (
<<<<<<< HEAD
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toast-container" />
    </Router>
=======
    <>
       <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      </Router>
    </>
>>>>>>> 2b53ddc (update)
  );
}
export default App;
