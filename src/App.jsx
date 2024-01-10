import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Home/Hero";
// import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";
import SignIn from "./components/SignIn/SignIn";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/create" element={<Signup />}/>
          <Route path="/sign-in" element={<SignIn />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
