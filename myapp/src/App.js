import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import DetailsPage from "./components/DetailsPage";
import { Provider } from "react-redux";
import store from "./Store";
import { Link } from "react-router-dom";
function App() {
  return (
    <>
      <h1 style={{color:'Green'}}>Welcome To Emoji's Hub</h1>
      <h2 style={{color:'Green'}}>Here Are Some Emojis</h2>
      <h3 style={{color:'Green'}}>Press Home For Emojis</h3>
      <h3 style={{color:'Green'}}>Press Details For Emojis Details</h3>
      <Provider store={store}>
        <Router>
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/details/:categoryId">Details</Link>
          <br></br>
          <Link to="/">Back</Link>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/details/:categoryId" element={<DetailsPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
