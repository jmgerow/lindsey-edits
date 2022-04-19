import React from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
    return (
        <Box className="App-page-body">
            <Typography variant="h1" color="primary.light">
                Contact
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
                <Box sx={{ marginRight: "50px" }}>
                    <a href="https://www.linkedin.com/in/lindsey-lewandowski-b61b1b55" target="_blank" rel="noopener noreferrer">
                        <LinkedInIcon sx={{ color: "#0A65C2", fontSize: "80px" }} />
                    </a>
                </Box>
                <Box sx={{ marginRight: "50px" }}>
                    <a href="https://twitter.com/lewandowskilin?lang=en" target="_blank" rel="noopener noreferrer">
                        <TwitterIcon sx={{ color: "#1C9CEF", fontSize: "80px" }} />
                    </a>
                </Box>
                <Box>
                    <a href="mailto:lewandowski.lindsey@gmail.com" target="_blank" rel="noopener noreferrer">
                        <EmailIcon sx={{ color: "active.main", fontSize: "80px" }} />
                    </a>
                </Box>
            </Box>
        </Box>
    )
}