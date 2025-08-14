import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NavBar from "./components/Nav/NavBar";
import SignUp from "./components/Signup/SignUp";
import House from "./components/Houses/House";
import Listing from "./components/Listing/Listing";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/houses" element={<House />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <div>
        <NavBar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
