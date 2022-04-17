import React, { useState, useEffect } from "react";
import "./About.css"
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';

import EditModal from "../Modals/EditModal/EditModal";

export default function About({ textTypes }) {
    const [aboutText, setAboutText] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [textId, setTextId] = useState("");

    const getAboutText = (textTypeId) => {
        setIsLoading(true);
        fetch(`/api/texts?textTypeId=${textTypeId}`, {
            headers: {
                "Content-Type": "application/json",
            }
        }).then(res => res.json())
            .then(data => {
                setAboutText(data[0].text);
                setTextId(data[0]._id);
                setIsLoading(false);
            }).catch(err => {
                console.log(err);
                setIsLoading(false);
            })
    }

    useEffect(() => {
        let textTypeId = ""

        if (textTypes.length && !aboutText.length) {
            const type = textTypes.find(t => t.type === "about-me");
            textTypeId = type._id;

            if (textTypeId) {
                getAboutText(textTypeId)
            }
        };
    }, [textTypes, aboutText]);

    return (
        <Box>
            <Box className="App-page-body">
                <Box sx={{ display: "flex" }}>
                    <Typography variant="h2" color="primary.light">
                        About Lindsey
                    </Typography>
                    <Box sx={{ marginLeft: "auto" }}>
                        <EditModal
                            id={textId}
                            title="Edit About Me"
                            originalContent={aboutText}
                            updateContent={setAboutText}
                        />
                    </Box>
                </Box>
                <Box className="About-text-body">
                    {isLoading ? (
                        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
                            <CircularProgress sx={{ color: "active.main" }} />
                        </Box>
                    ) : (
                            <TextField
                                variant="standard"
                                value={aboutText}
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
                        )}
                </Box>
            </Box>
        </Box>
    )
}