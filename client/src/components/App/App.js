import React, { useState, useEffect } from "react";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Home from "../Home/Home";
import theme from "../../themes/theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Services from '../Services/Services';
import About from "../About/About";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";

export default function App() {
  const [textTypes, setTextTypes] = useState([])
  const [activeUser, setActiveUser] = useState({})
  const [adminUser, setAdminUser] = useState(false)
  const footerHeight = "80px";

  useEffect(() => {
    if (!textTypes.length) {
      fetch("/api/textTypes", {
        headers: {
          "Content-Type": "application/json",
        }
      }).then(res => res.json())
        .then(data => setTextTypes(data));
    }
  }, [textTypes])

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      fetch(`/api/auth`, {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": token
        }
      }).then(res => {
        if (!res.ok) {
          throw new Error(res.json())
        }
        return res.json()
      }).then(json => {
        setAdminUser(true)
      }).catch(err => {
        console.log(err);
        setAdminUser(false);
      })
    } else {
      setAdminUser(false)
    };
  }, [activeUser])

  return (
    <div className="App" style={{ overflow: "scroll" }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box sx={{ minHeight: "100vh", marginBottom: `-${footerHeight}` }}>
            <Box sx={{ height: "100px" }}>
              <NavBar />
            </Box>
            <Box sx={{ height: "100%" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services adminUser={adminUser} />} />
                <Route path="/about" element={<About textTypes={textTypes} adminUser={adminUser} />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
            <Box sx={{ height: footerHeight }}></Box>
          </Box>
          <Box sx={{ minHeight: footerHeight, backgroundColor: "primary.lightest" }}>
            <Footer setActiveUser={setActiveUser} adminUser={adminUser} />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
