import React from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function EditButton({ onClick }) {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                padding: 0,
                "&:hover": {
                    backgroundColor: "transparent",
                    borderRadius: 0
                }
            }}
        >
            <DeleteIcon sx={{ color: "primary.light" }} />
        </IconButton>
    )
}