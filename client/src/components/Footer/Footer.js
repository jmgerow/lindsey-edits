import React from "react";
import "./Footer.css";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LoginModal from "../Modals/LoginModal/LoginModal";

export default function Home({ setActiveUser }) {
    return (
        <Box className="Footer-container">
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ marginRight: "20px" }}>
                    <a href="https://www.linkedin.com/in/lindsey-lewandowski-b61b1b55" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: "active.main" }} />
                    </a>
                </Box>
                <Box>
                    <a href="https://twitter.com/lewandowskilin?lang=en" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon sx={{ color: "active.main" }} />
                    </a>
                </Box>
            </Box>
            <Box sx={{ marginLeft: "auto" }}>
                <Box sx={{ display: "flex", justifyContent: "end" }}>
                    <LoginModal title="Login" setActiveUser={setActiveUser} />
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                    <Typography variant="body2" color="primary.light">
                        &copy; 2022 Lindsey Lewandowski
                    </Typography>
                </Box>
            </Box>
        </Box >
    )
}