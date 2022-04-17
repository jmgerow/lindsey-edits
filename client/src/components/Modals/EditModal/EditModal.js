import React, { useState, useEffect } from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import EditButton from "../../Buttons/EditButton/EditButton";
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";

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

export default function EditModal({ id, title, originalContent, updateContent }) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSave = () => {
        console.log("save")
        const token = sessionStorage.getItem("token");
        const payload = {
            text: value,
            id: id
        }

        fetch(`/api/texts`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "x-auth-token": token
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then(data => {
                updateContent(data);
                handleClose();
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    const handleCancel = () => {
        handleClose();
        setValue(originalContent)
    }

    useEffect(() => {
        setValue(originalContent)
    }, [originalContent])

    return (
        <Box>
            <EditButton onClick={handleOpen} />
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="edit-modal"
                aria-describedby="edit-content-modal"
            >
                <Box sx={style}>
                    <Typography variant="h2" color="primary.light">
                        {title}
                    </Typography>
                    <TextField
                        variant="outlined"
                        size="small"
                        value={value}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        maxRows={10}
                    />
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