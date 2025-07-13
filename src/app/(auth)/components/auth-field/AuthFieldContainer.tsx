"use client"
import {createRef, FC, memo, ReactNode, useEffect} from "react";
import {Grow, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import useBoolean from "@/lib/hooks/useBoolean";

export interface AuthInputProps {
    title : string;
    description ?: string;
    errors : string[];
    children ?: ReactNode;
}

const AuthFieldContainer:FC<AuthInputProps> = ({
    title, description, children,
    errors,
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
        <Stack onClick={focus} ref={containerRef} display="flex" flexDirection="column" gap={1}>
            <Typography textTransform="uppercase" variant="h6">{title}</Typography>
            {children}
            {
                description !== undefined &&
                <Grow in={isFocused} hidden={!isFocused}>
                    <Typography>{description}</Typography>
                </Grow>
            }
            <Grow in={errors.length !== 0}>
                <Typography color="error">
                    {errors.join("\n")}
                </Typography>
            </Grow>
        </Stack>
    )
}

export default memo(AuthFieldContainer);