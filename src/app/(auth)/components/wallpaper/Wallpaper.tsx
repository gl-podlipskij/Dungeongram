import {FC} from "react";
import {Box} from "@mui/material";

export interface WallpaperProps {
    src : string;
}
const Wallpaper:FC<WallpaperProps> = ({
    src
})=>{
    return (
        <Box
            position="absolute"
            sx={{
                backgroundImage : `url(${src})`,
                backgroundSize : "cover",
            }}
            zIndex="-1"
            width="100%"
            height="100%"
        />
    )
}

export default Wallpaper;