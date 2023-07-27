import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const StyledMessageBox = styled(Box)(() => ({
  height: "80%",
  display: "flex",
  gap: "10px",
  flexDirection: "column",
  overflowX: "auto",
  padding: "12px",

  "@media (max-width: 600px)": {
    overflowY: "auto",
  },
}));

export const StyledTextMessageSender = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  cursor: "pointer",
  "& a": {
    color: "#0000FF",
  },
}));

export const StyledTextMessageReviver = styled(Typography)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",
  cursor: "pointer",
  "& a": {
    color: "#0000FF",
  },
}));

export const StyledSenderMessage = styled(Box)(() => ({
  textAlign: "center",
  background: "lightgreen",
  padding: "5px 20px",
  borderRadius: "10px",
  gap: "10px",
}));

export const StyledRecieverMessage = styled(Box)(() => ({
  textAlign: "center",
  background: "lightblue",
  padding: "5px 20px",
  borderRadius: "10px",
  gap: "10px",
}));

export const StyledDescription = styled(Typography)(() => ({
  display: "flex",
  flexDirection: "row-reverse",
  alignItems: "center",
}));

export const StyledDeleteButton = styled(Button)(() => ({
  fontSize: "10px",
  color: "grey",
}));
