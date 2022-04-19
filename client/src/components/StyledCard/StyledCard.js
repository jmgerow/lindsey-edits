import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

export default function StyledCard({ title, text, buttonPath }) {
    let navigate = useNavigate();

    const handleClick = () => {
        console.log("going to", buttonPath)
        navigate(buttonPath);
    }

    return (
        <Card
            sx={{
                minHeight: "200px",
                margin: "5px 0",
                backgroundColor: "background.main",
                "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "primary.lightest"
                }
            }}
            onClick={handleClick}
        >
            <Box sx={{ padding: "10px", display: "block", justifyContent: "center" }}>
                <Box sx={{ padding: "5px 0", minWidth: "100%", textAlign: "center" }}>
                    <Typography variant="h2" color="primary.light">
                        {title}
                    </Typography>
                </Box>
                <Box sx={{ padding: "5px 0" }}>
                    <Typography variant="body1" color="primary.main">
                        {text}
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}