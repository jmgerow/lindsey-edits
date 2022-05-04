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
            lineHeight: "32px",
            fontFamily: "Wensley"
        },
        h2: {
            fontSize: "24px",
            lineHeight: "26px",
            fontFamily: "Wensley"
        },
        h3: {
            fontSize: "18px",
            lineHeight: "20px",
            fontFamily: "Wensley"
        },
        body1: {
            fontSize: "16px",
            lineHeight: "18px",
            fontFamily: "Wensley"
        },
        body2: {
            fontSize: "14px",
            lineHeight: "16px",
            fontFamily: "Wensley"
        },
        body3: {
            fontSize: "12px",
            lineHeight: "14px",
            fontFamily: "Wensley"
        }
    }
});

export default theme;