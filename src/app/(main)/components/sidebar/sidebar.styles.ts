import {SxProps, Theme} from "@mui/material";

export const container:SxProps<Theme> = {
    p : 2,
    display: "flex",
    flexDirection: "column",
    backgroundColor : "background.paper",
}
export const divider:SxProps<Theme> = {
    marginTop : 1,
    marginBottom: 1,
}
export const avatar:SxProps<Theme> = {
    width: "48px",
    height: "48px",
}