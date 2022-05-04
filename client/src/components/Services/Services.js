import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import StyledCard from "../StyledCard/StyledCard";
import ServicesUpdateModal from "../ServicesUpdateModal/ServicesUpdateModal";

export default function Services({ adminUser }) {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getServices = () => {
        setIsLoading(true);
        fetch(`/api/services`, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
            .then(data => {
                setServices(data);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    const updateServices = (updatedService) => {
        //TODO account for if service already exists
        const updatedServices = [...services]

        updatedServices.push(updatedService)
        setServices(updatedServices)
    }

    useEffect(() => {
        if (!services.length) {
            getServices();
        }
    }, [services])

    return (
        <Box className="App-page-body">
            <Box sx={{ display: "flex" }}>
                <Typography variant="h1" color="primary.light">
                    Services
                </Typography>
                {adminUser &&
                    <Box sx={{ marginLeft: "auto" }}>
                        <ServicesUpdateModal
                            modalTitle="Add New Service"
                            type="add"
                            updateServices={updateServices}
                        />
                    </Box>
                }
            </Box>
            {isLoading ? (
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                    <CircularProgress sx={{ color: "active.main" }} />
                </Box>
            ) : (
                    <Grid container sx={{ marginTop: "30px" }} spacing={3}>
                        {services.map((service, i) => (
                            <Grid key={`service-card-${i}`} item xs={12}>
                                <StyledCard title={service.title} text={service.text} />
                            </Grid>
                        ))}
                    </Grid>
                )}
        </Box>
    )
}