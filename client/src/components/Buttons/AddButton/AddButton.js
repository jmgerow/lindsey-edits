import React from "react";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';

export default function EditButton({ onClick, label }) {
    return (
        <IconButton onClick={onClick} sx={{ "&:hover": { backgroundColor: "transparent", borderRadius: 0 } }}>
            <AddIcon sx={{ color: "active.main" }} />
            <Typography variant="body2" color="active.main">
                {label}
            </Typography>
        </IconButton>
    )
}