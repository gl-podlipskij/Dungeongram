"use client"
import {FC, useState} from "react";
import {Box, Typography, Container, Stack, Button, Link as MuiLink} from "@mui/material";
import Wallpaper from "../components/wallpaper";
import AuthCard from "@/app/(auth)/components/auth-card/AuthCard";
import AuthFieldContainer from "@/app/(auth)/components/auth-field/AuthFieldContainer";
import Link from "next/link";
import {AuthPasswordInput, AuthTextInput} from "@/app/(auth)/components/auth-input/AuthTextInput";


const LoginPage:FC = ()=>{
    const [emailOrNickname, setEmailOrNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    return (
        <Box width="100%" minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent={"center"}>
            <Wallpaper
                src={"wallpapers/login.jpg"}
            />
            <Container maxWidth={"sm"}>
                    <AuthCard>
                        <Typography fontWeight="bold" variant="h4" alignSelf={"center"}>Login</Typography>
                        <Stack marginTop={4} gap={3} direction="column">
                            <AuthFieldContainer
                                title="Nickname or Email"
                                description="Lorem ipsum dolor sit amet, consetetur sadipscing "
                                errorText={null}
                            >
                                <AuthTextInput
                                    value={emailOrNickname}
                                    onChange={setEmailOrNickname}
                                />
                            </AuthFieldContainer>
                            <AuthFieldContainer title="Password" errorText={null}>
                                <AuthPasswordInput
                                    value={password}
                                    onChange={setPassword}
                                />
                            </AuthFieldContainer>
                        </Stack>
                        <Box marginTop={4} display="flex" flexDirection="column" gap={1}>
                            <Button sx={{
                                padding : 1.2,
                            }} variant="contained">
                                Login
                            </Button>
                            <MuiLink href="/register" component={Link}>
                                <Typography>Don&#39;t have account? Register</Typography>
                            </MuiLink>
                        </Box>
                    </AuthCard>
            </Container>
        </Box>
    )
}

export default LoginPage;