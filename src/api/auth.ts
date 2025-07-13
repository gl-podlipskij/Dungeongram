import api from "@/api/index";
import {RegisterDto} from "@/api/dto/register.dto";
import {LoginResponse} from "@/api/response/login";
import {LoginDto} from "@/api/dto/login.dto";
import {RegisterResponse} from "@/api/response/register";

const AuthApi = {
    async login(dto: LoginDto) {
        const res = await api.patch<LoginResponse>("/auth/login", dto);
        return res.data;
    },
    async register(dto:RegisterDto) {
        const res = await api.post<RegisterResponse>("auth/register", dto);
        return res.data;
    }
}

export default AuthApi;