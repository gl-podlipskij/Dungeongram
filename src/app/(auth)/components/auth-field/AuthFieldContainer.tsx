"use client"
import {createRef, FC, ReactNode, useEffect} from "react";
import {Fade, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import useBoolean from "@/hooks/useBoolean";

export interface AuthInputProps {
    title : string;
    description ?: string;
    errorText : string | null;
    children ?: ReactNode;
}
const AuthFieldContainer:FC<AuthInputProps> = ({
    title, description, children
})=>{
    const [isFocused, focus, blur] = useBoolean();
    const containerRef = createRef<HTMLDivElement>();

    const onClick = (ev:MouseEvent)=>{
        const target = ev.target;
        if (target === null) return;
        if (!(target instanceof HTMLElement)) return;
        if (containerRef.current === null) return;

        if (!containerRef.current.contains(target)) {
            blur();
        }

    }
    useEffect(() => {
        document.addEventListener("click", onClick);
        return ()=>{
            document.removeEventListener("click", onClick);
        }
    });

    return (
        <Stack onClick={focus} ref={containerRef} display="flex" flexDirection="column" gap={1.5}>
            <Typography textTransform="uppercase" variant="h6">{title}</Typography>
            {children}
            {
                description !== undefined &&
                <Fade in={isFocused} hidden={!isFocused}>
                    <Typography>{description}</Typography>
                </Fade>
            }
        </Stack>
    )
}

export default AuthFieldContainer;