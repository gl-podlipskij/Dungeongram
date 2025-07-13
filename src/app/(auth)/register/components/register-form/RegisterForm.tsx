"use client"
import {FC, useState} from "react";
import AuthCard from "@/app/(auth)/components/auth-card/AuthCard";
import {Box, Button, Stack, Typography, Link as MuiLink, Link} from "@mui/material";
import AuthFieldContainer from "@/app/(auth)/components/auth-field/AuthFieldContainer";
import {AuthPasswordInput, AuthTextInput} from "@/app/(auth)/components/auth-input/AuthTextInput";
import {RegisterDto} from "@/api/dto/register.dto";
import {AuthErrors} from "@/app/(auth)/types/authError";


export interface RegisterFormProps {
    onSubmit : (dto:RegisterDto)=>void;
    errors : AuthErrors;
}
const RegisterForm:FC<RegisterFormProps> = ({
    onSubmit, errors
})=>{

    const [email, setEmail] = useState<string>("");
    const [nickname, setNickname] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmedPassword, setConfirmedPassword] = useState<string>("");

    const handleSubmit = ()=>{
        onSubmit({
           email,
           nickname,
           password,
           confirmedPassword,
        });
    }

    return (
        <AuthCard>
            <Typography fontWeight="bold" variant="h4" alignSelf={"center"}>Sign up</Typography>
            <Stack marginTop={4} gap={2} direction="column">
                <AuthFieldContainer
                    title="Email address"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing "
                    errors={errors["email"] ?? []}
                >
                    <AuthTextInput
                        value={email}
                        onChange={setEmail}
                    />
                </AuthFieldContainer>
                <AuthFieldContainer
                    title="Nickname"
                    errors={errors["nickname"] ?? []}
                >
                    <AuthTextInput
                        value={nickname}
                        onChange={setNickname}
                    />
                </AuthFieldContainer>

                <AuthFieldContainer title="Password" errors={errors["password"] ?? []}>
                    <AuthPasswordInput
                        value={password}
                        onChange={setPassword}
                    />
                </AuthFieldContainer>
                <AuthFieldContainer title="Confirmed Password" errors={errors["confirmedPassword"] ?? []}>
                    <AuthPasswordInput
                        value={confirmedPassword}
                        onChange={setConfirmedPassword}
                    />
                </AuthFieldContainer>
            </Stack>
            <Box marginTop={4} display="flex" flexDirection="column" gap={1}>
                <Button onClick={handleSubmit} sx={{
                    padding : 1.2,
                    fontSize : "1.1em",
                }} variant="contained">
                    Sign up
                </Button>
                <MuiLink  href="/login" color="textSecondary" component={Link}>
                    <Typography>Already have account? Login</Typography>
                </MuiLink>
            </Box>
        </AuthCard>
    )
}

export default RegisterForm;