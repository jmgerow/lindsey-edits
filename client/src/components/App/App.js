import React, { useState, useEffect } from "react";
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Home from "../Home/Home"
import theme from "../../themes/theme"
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Services from '../Services/Services';
import About from "../About/About"
import Footer from "../Footer/Footer"

export default function App() {
  const [textTypes, setTextTypes] = useState([])
  const [activeUser, setActiveUser] = useState({})
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

  return (
    <div className="App" style={{ overflow: "scroll" }}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Box sx={{ minHeight: "100vh", marginBottom: `-${footerHeight}` }}>
            <NavBar />
            <Box sx={{ marginTop: "100px" }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about" element={<About textTypes={textTypes} />} />
              </Routes>
            </Box>
            <Box sx={{ height: footerHeight }}></Box>
          </Box>
          <Box sx={{ minHeight: footerHeight, backgroundColor: "primary.lightest" }}>
            <Footer setActiveUser={setActiveUser} />
          </Box>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};
