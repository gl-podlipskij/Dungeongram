import {FC, ReactNode} from "react";
import {Box} from "@mui/material";
import Sidebar from "@/app/(main)/components/sidebar/Sidebar";
import * as styles from "./layout.styles";
import {redirect} from "next/navigation";
import {getCookies} from "@/lib/cookies/cookies";
import {ACCESS_TOKEN} from "@/constant/cookies";

export interface MainLayoutProps {
    children: ReactNode;
}
const MainLayout:FC<MainLayoutProps> = async ({
    children
})=>{
    const token = await getCookies(ACCESS_TOKEN);
    if (token === undefined) redirect("/register");


    return (
        <Box sx={styles.page}>
            <Sidebar/>
            <Box flexGrow={1} height="100%">
                {children}
            </Box>
        </Box>
    )
}

export default MainLayout;