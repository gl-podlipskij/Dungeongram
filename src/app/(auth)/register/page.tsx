"use client"
import {FC, useState,} from "react";
import {Box, Container} from "@mui/material";
import Wallpaper from "@/app/(auth)/components/wallpaper";
import RegisterForm from "@/app/(auth)/register/components/register-form/RegisterForm";
import {RegisterDto} from "@/api/dto/register.dto";
import AuthApi from "@/api/auth";
import {AuthErrors} from "@/app/(auth)/types/authError";
import {AxiosError} from "axios";
import {useRouter} from "next/navigation";
import {ACCESS_TOKEN} from "@/constant/cookies";
import {setCookies} from "@/lib/cookies/cookies";


const RegisterPage:FC = ()=>{
    const router = useRouter();

    const [errors, setErrors] = useState<AuthErrors>({});


    const onSubmit = (dto:RegisterDto)=> {
        AuthApi.register(dto).then(payload=>{
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
                src={"wallpapers/register.jpg"}
            />
            <Container maxWidth={"sm"}>
                <RegisterForm errors={errors} onSubmit={onSubmit}/>
            </Container>
        </Box>
    )
}

export default RegisterPage;