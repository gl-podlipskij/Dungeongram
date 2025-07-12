import {Input, Theme} from "@mui/material";
import {ChangeEvent, FC, useState} from "react";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import * as styles from "./input.styles";
import useBoolean from "@/hooks/useBoolean";
import {SxProps} from "@mui/system";

export interface AuthInputProps {
    value : string;
    onChange : (value : string) => void;
}
export const AuthTextInput:FC<AuthInputProps> = ({
    value, onChange
})=>{
    const [isFocusing, focus, blur] = useBoolean();

    const handleChange = (ev:ChangeEvent<HTMLInputElement>)=>{
        onChange(ev.target.value);
    }

    return (
        <Input
            onFocus={focus}
            onBlur={blur}
            sx={{
                ...styles.input,
                ...(isFocusing ? styles.focusedInput : undefined),
            } as SxProps<Theme>}
            value={value}
            onChange={handleChange}
        />
    )
}

export const AuthPasswordInput:FC<AuthInputProps> = ({
    value, onChange
})=>{
    const [isFocusing, focus, blur] = useBoolean();

    const [hide, setHide] = useState<boolean>(true);

    const handleChange = (ev:ChangeEvent<HTMLInputElement>)=>{
        onChange(ev.target.value);
    }
    const handleClick = ()=>{
        setHide((prev)=>!prev);
    }
    const Icon = hide ? VisibilityOffIcon : VisibilityIcon;

    return (
        <Input
            onFocus={focus}
            onBlur={blur}
            type={hide ? "password" : "text"}
            value={value}
            onChange={handleChange}
            sx={{
                ...styles.input,
                ...(isFocusing ? styles.focusedInput : {}),
            } as SxProps<Theme>}
            endAdornment={
               <Icon sx={styles.icon} onClick={handleClick}/>
            }
        />
    )
}