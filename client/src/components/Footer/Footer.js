import React from "react";
import "./Footer.css";
import Box from '@mui/material/Box';
import LoginModal from "../Modals/LoginModal/LoginModal"

export default function Home({ setActiveUser }) {
    return (
        <Box className="Footer-container">
            <LoginModal title="Login" setActiveUser={setActiveUser} />
        </Box>
    )
}