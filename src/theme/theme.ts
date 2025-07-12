"use client"
import {createTheme} from "@mui/material";
import {geistSans} from "@/theme/fonts";

const theme = createTheme({
    palette : {
        mode : "dark",
        primary : {
            main : "#e53935",
            dark : "#b91c1c",
            light : "#f87171",
        },
        background : {
            default : "rgb(23, 23, 23)",
            paper : "rgb(0, 0, 0)",
        },
    },
    typography : {
        fontFamily : geistSans.style.fontFamily,
    }
});


export default theme;