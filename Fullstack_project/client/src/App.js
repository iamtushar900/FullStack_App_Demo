import "./App.css";

import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import About from "./components/About";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Contact from "./components/Contact";
import { useState } from "react";
import { useEffect } from "react";
import Loder from "./components/Loder";
import Private from "./components/private/Private";

function App() {
  const [auth, setAuth] = useState(localStorage.getItem("student"));



  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar auth={auth} setAuth={setAuth} />
        {loading ? (
          <Loder />
        ) : (
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/login" element={<Login setAuth={setAuth} />} />
            <Route element={<Private auth={auth}></Private>}>
              
              <Route exact path="/contact" element={<Contact />} />
            </Route>
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
