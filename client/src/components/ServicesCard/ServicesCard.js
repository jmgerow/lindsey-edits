import React from "react";
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import ServicesUpdateModal from "../ServicesUpdateModal/ServicesUpdateModal";
import ServicesDeleteModal from "../ServicesDeleteModal/ServicesDeleteModal";

export default function ServicesCard({ service, adminUser, updateServices, removeService }) {
    console.log(adminUser)
    return (
        <Card
            sx={{
                minHeight: "200px",
                margin: "5px 0",
                backgroundColor: "background.main"
            }}
        >
            <Box sx={{ padding: "10px", display: "block", justifyContent: "center" }}>
                <Box sx={{ padding: "10px 20px", display: "flex", alignItems: "center" }}>
                    <Typography variant="h2" color="primary.light">
                        {service.title}
                    </Typography>
                    {adminUser &&
                        <Box sx={{ marginLeft: "auto", display: "flex" }}>
                            <Box>
                                <ServicesUpdateModal
                                    modalTitle="Add New Service"
                                    type="edit"
                                    updateServices={updateServices}
                                    service={service}
                                />
                            </Box>
                            <Box sx={{ marginLeft: "20px" }}>
                                <ServicesDeleteModal
                                    service={service}
                                    removeService={removeService}
                                />
                            </Box>
                        </Box>
                    }
                </Box>
                <Box sx={{ padding: "20px" }}>
                    <TextField
                        variant="standard"
                        value={service.text}
                        size="small"
                        fullWidth
                        multiline
                        InputProps={{
                            disableUnderline: true,
                        }}
                        inputProps={{
                            sx: {
                                color: "primary.main"
                            }
                        }}
                    />
                </Box>
            </Box>
        </Card>
    )
}