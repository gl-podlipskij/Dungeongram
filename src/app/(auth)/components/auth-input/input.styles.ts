import {SxProps} from "@mui/system";
import {Theme} from "@mui/material";

export const input:SxProps<Theme> = {
    "::before, ::after" : {
        content : "none",
    },
    padding : 1.5,
    borderRadius : 1.5,
    borderStyle : "solid",
    borderWidth : 1,
    borderColor : "grey.700",


    input : {
        padding : "0",
        outlineStyle : "none",
        borderStyle : "none",
    }
}
export const focusedInput:SxProps<Theme> = {
    outlineStyle : "solid",
    outlineWidth : "2px",
    outlineColor : "primary.main",
    outlineOffset : "1px",
}
export const icon:SxProps<Theme> = {
    cursor : "pointer",
    fontSize : "1.3em",
    color : "grey.300",
}
