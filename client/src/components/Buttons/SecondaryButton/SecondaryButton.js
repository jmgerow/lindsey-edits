import React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';

export default function PrimaryButton({
    buttonText,
    onClick,
    disabled,
    isLoading,
    width
}) {
    return (
        <Button
            variant="outlined"
            onClick={onClick}
            disabled={disabled}
            sx={{
                minHeight: "36px",
                width: width || "102px",
                boxShadow: "none",
                color: "active.main",
                backgroundColor: "primary.contrastText",
                borderColor: "active.main",
                "&:hover": {
                    backgroundColor: "primary.contrastText"
                },
                "&:disabled": {
                    backgroundColor: "disabled.main",
                    color: "disabled.contrastText",
                    border: 0
                }
            }}
        >
            {isLoading ? (
                <CircularProgress size={20} sx={{ color: "active.main" }} />
            ) : (
                    <Typography variant="body2">
                        {buttonText}
                    </Typography>
                )}
        </Button>
    )
}