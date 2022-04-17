import React from "react";
import Box from '@mui/material/Box';
import BannerPhoto from "../../assets/images/banner-photo.jpeg";
import Typography from "@mui/material/Typography";

export default function Home() {
    return (
        <Box >
            <img src={BannerPhoto} alt="banner" width="100%"></img>
            <Typography variant="h1">
                home
            </Typography>
        </Box>
    )
}