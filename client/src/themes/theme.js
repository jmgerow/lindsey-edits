import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: "#37474f",
            light: "#78909c",
            lightest: "#cfd8dc",
            contrastText: "#ffffff"
        },
        background: {
            main: "#fafafa"
        },
        active: {
            main: "#0097a7"
        },
        error: {
            main: "#c62828"
        },
        disabled: {
            main: "#EAEAEB",
            contrastText: "#FFFFFF"
        }
    },
    typography: {
        h1: {
            fontSize: "30px",
            lineHeight: "32px"
        },
        h2: {
            fontSize: "24px",
            lineHeight: "26px"
        },
        h3: {
            fontSize: "18px",
            lineHeight: "20px"
        },
        body1: {
            fontSize: "16px",
            lineHeight: "18px"
        },
        body2: {
            fontSize: "14px",
            lineHeight: "16px"
        },
        body3: {
            fontSize: "12px",
            lineHeight: "14px"
        }
    }
});

export default theme;