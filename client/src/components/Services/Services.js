import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';
import ServicesUpdateModal from "../ServicesUpdateModal/ServicesUpdateModal";
import ServicesCard from "../ServicesCard/ServicesCard"

export default function Services({ adminUser }) {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const sortServices = (s) => {
        return s.sort(function (a, b) {
            return a.sequence - b.sequence;
        })
    }

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
        const updatedServices = [...services]
        const index = updatedServices.findIndex(s => s.id === updatedService.id)

        if (index !== -1) {
            updatedServices.splice(index, 1, updatedService);
        } else {
            updatedServices.push(updatedService);
        }

        updatedServices.sort(function (a, b) {
            return b.sequence - a.sequence;
        })

        setServices(sortServices(updatedServices));
    };

    const removeService = (service) => {
        const updatedServices = [...services];
        const index = updatedServices.findIndex(s => s.id === service.id)

        updatedServices.splice(index, 1);

        setServices(updatedServices);
    }

    useEffect(() => {
        getServices();
    }, [])

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
                                <ServicesCard
                                    service={service}
                                    adminUser={adminUser}
                                    updateServices={updateServices}
                                    removeService={removeService}
                                />
                            </Grid>
                        ))}
                    </Grid>
                )}
        </Box>
    )
}