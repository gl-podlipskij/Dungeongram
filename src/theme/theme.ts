import {createTheme} from "@mui/material";

const theme = createTheme({
    palette : {
        primary : {
            main : '#e53935',
            dark : '#b91c1c',
            light : '#f87171',
        },
        background : {
            default : 'rgb(23, 23, 23)',
            paper : 'rgb(0, 0, 0)',
        },
    },
});


export default theme;