import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import EditButton from "../Buttons/EditButton/EditButton";
import AddButton from "../Buttons/AddButton/AddButton";
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

export default function ServicesUpdateModal({ modalTitle, type, service, updateServices }) {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [text, setText] = useState("");
    const [sequence, setSequence] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleTitleChange = event => {
        setTitle(event.target.value);
    };

    const handleTextChange = event => {
        setText(event.target.value);
    };

    const handleSequenceChange = event => {
        setSequence(event.target.value);
    };

    const createNewService = () => {
        const token = sessionStorage.getItem("token");
        const payload = {
            title: title,
            text: text,
            sequence: sequence
        }

        fetch(`/api/services`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then(data => {
                updateServices(data.enteredService);
                handleClose();
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    };

    const updateService = () => {
        const token = sessionStorage.getItem("token");
        const payload = {
            id: service.id,
            title: title,
            text: text,
            sequence: sequence
        }

        fetch(`/api/services`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then(data => {
                updateServices(data.enteredService);
                handleClose();
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    const handleSave = () => {
        if (type === "add") {
            createNewService()
        } else {
            updateService()
        }
    };

    const handleCancel = () => {
        handleClose();
        setTitle("");
        setText("");
        setSequence("");
    };

    useEffect(() => {
        if (service) {
            setTitle(service.title);
            setText(service.text);
            setSequence(service.sequence);
        }
    }, [service]);

    return (
        <Box>
            {type === "add" ? (
                <AddButton onClick={handleOpen} label="Add New Service" />
            ) : (
                    <EditButton onClick={handleOpen} />
                )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="update-service-modal"
                aria-describedby="update-service-modal"
            >
                <Box sx={style}>
                    <Typography variant="h2" color="primary.light">
                        {modalTitle}
                    </Typography>
                    <Box sx={{ margin: "20px 0" }}>
                        <TextField
                            label="Title"
                            variant="outlined"
                            size="small"
                            value={title}
                            onChange={handleTitleChange}
                            fullWidth
                        />
                    </Box>
                    <Box sx={{ margin: "20px 0" }}>
                        <TextField
                            label="Text"
                            variant="outlined"
                            size="small"
                            value={text}
                            onChange={handleTextChange}
                            fullWidth
                            multiline
                            maxRows={10}
                        />
                    </Box>
                    <Box sx={{ margin: "20px 0" }}>
                        <TextField
                            label="Sequence Number"
                            variant="outlined"
                            size="small"
                            value={sequence}
                            onChange={handleSequenceChange}
                            fullWidth
                        />
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "20px" }}>
                        <Box sx={{ marginLeft: "auto" }}>
                            <SecondaryButton
                                buttonText="Cancel"
                                onClick={handleCancel}
                            />
                        </Box>
                        <Box sx={{ marginLeft: "20px" }}>
                            <PrimaryButton
                                buttonText="Save"
                                onClick={handleSave}
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