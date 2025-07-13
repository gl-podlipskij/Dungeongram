"use client"
import {FC, useState} from "react";
import {Box, Button, Link as MuiLink, Stack, Typography} from "@mui/material";
import AuthFieldContainer from "@/app/(auth)/components/auth-field/AuthFieldContainer";
import {AuthPasswordInput, AuthTextInput} from "@/app/(auth)/components/auth-input/AuthTextInput";
import Link from "next/link";
import AuthCard from "@/app/(auth)/components/auth-card/AuthCard";
import {AuthErrors} from "@/app/(auth)/types/authError";
import {LoginDto} from "@/api/dto/login.dto";

export interface LoginFormProps {
    errors: AuthErrors;
    onSubmit: (dto:LoginDto)=>void;
}
const LoginForm:FC<LoginFormProps> = ({
    errors, onSubmit
}) => {
    const [emailOrNickname, setEmailOrNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = ()=>{
        onSubmit({
            emailOrNickname,
            password,
        });
    }

    return (
        <AuthCard>
            <Typography fontWeight="bold" variant="h4" alignSelf={"center"}>Login</Typography>
            <Stack marginTop={4} gap={2} direction="column">
                <AuthFieldContainer
                    title="Nickname or Email"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing "
                    errors={errors["emailOrNickname"] ?? []}
                >
                    <AuthTextInput
                        value={emailOrNickname}
                        onChange={setEmailOrNickname}
                    />
                </AuthFieldContainer>
                <AuthFieldContainer title="Password" errors={errors["password"] ?? []}>
                    <AuthPasswordInput
                        value={password}
                        onChange={setPassword}
                    />
                </AuthFieldContainer>
            </Stack>
            <Box marginTop={4} display="flex" flexDirection="column" gap={1}>
                <Button sx={{
                    padding : 1.2,
                    fontSize : "1.1em",
                }} variant="contained"
                onClick={handleSubmit}>
                    Login
                </Button>
                <MuiLink  href="/register" color="textSecondary" component={Link}>
                    <Typography>Don&#39;t have account? Register</Typography>
                </MuiLink>
            </Box>
        </AuthCard>
    );
};

export default LoginForm;