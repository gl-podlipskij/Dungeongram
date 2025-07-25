"use client"
import {FC, useState} from "react";
import {Box, Container} from "@mui/material";
import Wallpaper from "../components/wallpaper";
import LoginForm from "@/app/(auth)/login/components/login-form/LoginForm";
import {AuthErrors} from "@/app/(auth)/types/authError";
import AuthApi from "@/api/auth";
import {AxiosError} from "axios";
import {LoginDto} from "@/api/dto/login.dto";
import {ACCESS_TOKEN} from "@/constant/cookies";
import {useRouter} from "next/navigation";
import {setCookies} from "@/lib/cookies/cookies";


const LoginPage:FC = ()=>{
    const router = useRouter();

    const [errors, setErrors] = useState<AuthErrors>({});

    const onSubmit = (dto:LoginDto)=>{
        AuthApi.login(dto).then(payload=>{
            const token = payload.token;
            setCookies(ACCESS_TOKEN, token).then(()=>router.push("/"));
        }).catch((error:AxiosError)=>{
            const errorData = error.response?.data;

            if (errorData !== null &&
                typeof errorData === "object" &&
                'errors' in errorData) {
                const errors = errorData['errors'] as AuthErrors;
                setErrors(errors);
                setTimeout(()=>setErrors({}), 2000);
            }
        });
    }

    return (
        <Box width="100%" minHeight="100vh" display="flex" flexDirection="column" alignItems="center" justifyContent={"center"}>
            <Wallpaper
                src={"wallpapers/login.jpg"}
            />
            <Container maxWidth={"sm"}>
                <LoginForm onSubmit={onSubmit} errors={errors}/>
            </Container>
        </Box>
    )
}

export default LoginPage;