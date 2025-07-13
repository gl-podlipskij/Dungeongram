"use client"
import {createTheme} from "@mui/material";
import {geistSans, primaryFont} from "@/theme/fonts";

const theme = createTheme({
    palette : {
        mode : "dark",
        primary : {
            main : "#e53935",
            dark : "#b91c1c",
            light : "#f87171",
        },
        background : {
            default : "rgb(30, 30, 30)",
            paper : "rgb(23, 23, 23)",
        },
        secondary : {
            light : "#434343",
            main : "rgb(36, 36, 36)",
        },

        divider : "rgba(255, 255, 255, 0.4)",
    },
    typography : {
        fontFamily : geistSans.style.fontFamily,
        h6 : {
            fontFamily : primaryFont.style.fontFamily,
        },
        h5 : {
            fontFamily : primaryFont.style.fontFamily,
        },
        h4 : {
            fontFamily : primaryFont.style.fontFamily,
        },
        h3 : {
            fontFamily : primaryFont.style.fontFamily,
        },

    },
    components : {
        MuiAvatar : {
            styleOverrides : {
                root : ({theme})=>{
                    return {
                        padding : theme.spacing(1),
                        backgroundColor : theme.palette.secondary.main,
                        borderRadius : theme.spacing(1),
                        width : "48px",
                        height : "48px",
                        cursor : "pointer",
                        transition : "0.1s",
                        "&:hover": {
                            backgroundColor : theme.palette.secondary.light,
                        }
                    }
                }
            }
        }
    }
});


export default theme;