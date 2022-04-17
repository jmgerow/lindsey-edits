import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function NavBar() {
    return (
        <AppBar className="NavBar-container" sx={{ backgroundColor: "background.main" }}>
            <Grid container>
                <Grid item xs={6}>
                    <Box sx={{ padding: "10px 0", display: "inline-block", verticalAlign: "middle" }}>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <Typography variant="h1" color="primary.main" sx={{ marginBottom: "10px" }}>
                                Lindsey Lewandowski
                            </Typography>
                        </Link>
                        <Typography variant="h3" color="primary.light" sx={{ display: "flex" }}>
                            Copy Editor <div>&nbsp;&nbsp;&nbsp;</div> | <div>&nbsp;&nbsp;&nbsp;</div> Chicago, IL
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box sx={{ display: "flex", padding: "30px 0" }}>
                        <Link className="NavBar-link" to="/" style={{ marginLeft: "auto" }}>
                            <Typography className="NavBar-link" variant="body1" color="primary.light">
                                Home
                            </Typography>
                        </Link>
                        <Link className="NavBar-link" to="/services">
                            <Typography className="NavBar-link" variant="body1" color="primary.light">
                                Services
                            </Typography>
                        </Link>
                        <Link className="NavBar-link" to="/about">
                            <Typography className="NavBar-link" variant="body1" color="primary.light">
                                About
                            </Typography>
                        </Link>
                    </Box>
                </Grid>
            </Grid>
        </AppBar>
    )
}