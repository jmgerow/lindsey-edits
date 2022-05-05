import React, { useState } from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DeleteButton from "../Buttons/DeleteButton/DeleteButton";
import PrimaryButton from "../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../Buttons/SecondaryButton/SecondaryButton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "60vw",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function ServicesDeleteModal({ service, removeService }) {
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleDelete = () => {
        const token = sessionStorage.getItem("token");
        fetch(`/api/services/${service.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            }
        }).then(res => res.json())
            .then(data => {
                removeService(service);
                handleClose();
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    return (
        <Box>
            <DeleteButton onClick={handleOpen} label="Add New Service" />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="update-service-modal"
                aria-describedby="update-service-modal"
            >
                <Box sx={style}>
                    <Typography variant="h2" color="primary.light" sx={{ textAlign: "center", lineHeight: "30px" }}>
                        {`Are you sure you want to delete the ${service.title} service?`}
                    </Typography>
                    <Box sx={{ display: "flex", marginTop: "20px" }}>
                        <Box sx={{ marginLeft: "auto" }}>
                            <SecondaryButton
                                buttonText="Cancel"
                                onClick={handleClose}
                            />
                        </Box>
                        <Box sx={{ marginLeft: "20px" }}>
                            <PrimaryButton
                                buttonText="Delete"
                                onClick={handleDelete}
                                disabled={isLoading}
                                isLoading={isLoading}
                            />
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </Box>
    )
}