"use client"
import {Card, styled} from "@mui/material";

const AuthCard = styled(Card)({
    padding : 20,
    borderRadius : 10,
    backgroundColor : "rgba(0, 0, 0, 0.8)",
    backdropFilter : "blur(8px)",
    display: "flex",
    flexDirection : "column",
});

export default AuthCard;