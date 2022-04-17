import React from "react";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

export default function EditButton({ onClick }) {
    return (
        <IconButton onClick={onClick}>
            <EditIcon sx={{ color: "primary.light" }} />
        </IconButton>
    )
}