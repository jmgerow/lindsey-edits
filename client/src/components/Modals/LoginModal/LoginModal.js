import React, { useState } from "react"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import PrimaryButton from "../../Buttons/PrimaryButton/PrimaryButton";
import SecondaryButton from "../../Buttons/SecondaryButton/SecondaryButton";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "220px",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function LoginModal({ title, setActiveUser, adminUser }) {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleChangeEmail = event => {
        setEmail(event.target.value);
    };

    const handleChangePassword = event => {
        setPassword(event.target.value);
    };

    const handleUpdateCreds = user => {
        setActiveUser(user);
        sessionStorage.setItem('token', user.token);
        setIsLoading(false);
        handleClose();
    }

    const handleLogin = () => {
        const payload = {
            email: email,
            password: password
        }

        fetch(`/api/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => {
            if (!res.ok) {
                throw new Error(res.json())
            }
            return res.json()
        }).then(json => {
            handleUpdateCreds(json)
        }).catch(err => {
            console.log(err);
            setErrorMessage("Invalid Credentials");
            setIsLoading(false);
        })
    };

    const handleLogout = () => {
        sessionStorage.removeItem("token");
        setActiveUser(null);
    }

    const handleCancel = () => {
        handleClose();
        setEmail("");
        setPassword("");
        setErrorMessage("");
    };

    return (
        <Box>
            {adminUser ? (
                <Typography
                    variant="body2"
                    onClick={handleLogout}
                    color="primary.light"
                    sx={{
                        "&:hover": {
                            cursor: "pointer"
                        },
                        width: "max-content",
                        padding: "2px"
                    }}
                >
                    Log Out
                </Typography>
            ) : (
                    <Typography
                        variant="body2"
                        onClick={handleOpen}
                        color="primary.light"
                        sx={{
                            "&:hover": {
                                cursor: "pointer"
                            },
                            width: "max-content",
                            padding: "2px"
                        }}
                    >
                        Log In
                    </Typography>
                )}
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
                    <Box sx={{ marginTop: "20px" }}>
                        <TextField
                            variant="outlined"
                            label="Email"
                            size="small"
                            value={email}
                            onChange={handleChangeEmail}
                            sx={{ width: "224px" }}
                        />
                    </Box>
                    <Box sx={{ marginTop: "20px" }}>
                        <TextField
                            variant="outlined"
                            label="Password"
                            size="small"
                            value={password}
                            onChange={handleChangePassword}
                            sx={{ width: "224px" }}
                        />
                    </Box>
                    <Box sx={{ margin: "5px 0" }}>
                        <Typography variant="body3" color="error.main">
                            {errorMessage}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "40px" }}>
                        <Box sx={{ marginLeft: "auto" }}>
                            <SecondaryButton
                                buttonText="Cancel"
                                onClick={handleCancel}
                            />
                        </Box>
                        <Box sx={{ marginLeft: "20px" }}>
                            <PrimaryButton
                                buttonText="Log In"
                                onClick={handleLogin}
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