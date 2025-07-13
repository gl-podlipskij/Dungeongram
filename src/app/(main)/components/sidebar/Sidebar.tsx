import {FC} from "react";
import {Avatar, Box, Divider} from "@mui/material";
import * as styles from "./sidebar.styles";
import {Stack} from "@mui/system";


const Sidebar:FC = ()=>{
    return (
        <Box sx={styles.container}>
            <Avatar
                sx={styles.avatar}
                src="/logo/64.png"
            />
            <Divider sx={styles.divider}/>
            <Stack width="100%" direction="column" gap={1}>
                <Avatar sx={{color : "primary.main"}}/>
            </Stack>
        </Box>
    )
}

export default Sidebar;