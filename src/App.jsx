import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hero from "./components/Home/Hero";
import Footer from "./components/Footer/Footer";
// import Signup from "./components/SignUp/Signup";
import SignIn from "./components/SignIn/SignIn";
import AboutUs from "./components/About/AboutUs";
import Header from "./components/Header/Header";
import Faq from "./components/Faq/Faq";
import Service from "./components/Service/Service";
import Work from "./components/Work/Work";


const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />}/>
          {/* <Route path="/create" element={<Signup />}/> */}
          <Route path="/sign-in" element={<SignIn />}/>
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/faq" element={<Faq />}/>
          <Route path="/services" element={<Service/>}/>
          <Route path="/work" element={<Work/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
