import {GlobalStylesProps} from "@mui/material";

const globalStyles:GlobalStylesProps['styles'] = {
    '*, ::after, ::before' : {
        margin : "0",
        padding : "0",
        boxSizing : "border-box",
    }
}

export default globalStyles;