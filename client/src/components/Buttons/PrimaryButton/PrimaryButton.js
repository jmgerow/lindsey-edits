import React from "react";
import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import CircularProgress from '@mui/material/CircularProgress';

export default function PrimaryButton({
    buttonText,
    onClick,
    disabled,
    isLoading,
    width,
}) {
    return (
        <Button
            variant="contained"
            onClick={onClick}
            disabled={disabled}
            sx={{
                minHeight: "36px",
                width: width || "102px",
                boxShadow: "none",
                color: "primary.contrastText",
                backgroundColor: "active.main",
                "&:hover": {
                    backgroundColor: "active.main"
                },
                "&:disabled": {
                    backgroundColor: "disabled.main",
                    color: "disabled.contrastText"
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