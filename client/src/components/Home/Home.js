import React from "react";
import Box from '@mui/material/Box';
import BannerPhoto from "../../assets/images/banner-photo.jpeg";
import Grid from '@mui/material/Grid';
import StyledCard from "../StyledCard/StyledCard";

export default function Home() {
    const homeCards = [
        {
            title: "Services",
            text: "Click here to learn more about the services I offer.",
            buttonPath: "/services"
        },
        {
            title: "About Me",
            text: "Click here to learn more about my background.",
            buttonPath: "/about"
        },
        {
            title: "Contact Me",
            text: "Click here to see how you can get in touch with me so we can discuss options and determine a fit.",
            buttonPath: "/contact"
        }
    ]

    return (
        <Box>
            <img src={BannerPhoto} alt="banner" width="100%"></img>
            <Box className="App-page-body" sx={{ margin: "50px 0" }}>
                <Grid container spacing={3}>
                    {homeCards.map((card, i) => (
                        <Grid key={`card-${i}`} item sx={12} sm={6} md={4}>
                            <StyledCard
                                title={card.title}
                                text={card.text}
                                buttonPath={card.buttonPath}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}