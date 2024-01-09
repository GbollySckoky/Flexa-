import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Home/Hero";
// import Footer from "./components/Footer/Footer";
import Signup from "./components/Signup/Signup";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />}/>
          <Route path="/create" element={<Signup />}/>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
