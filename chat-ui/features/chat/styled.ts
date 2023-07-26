import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";


export const StyledBox = styled(Box)(({ theme }) => ({
    width: "100%",
    maxWidth: "30%",
    height: "600px",
    padding: "10px",
    position: "relative",
    backgroundColor: "#f4f6f1",
    margin: "0 auto",
    marginTop:"20px",

 
  '@media (max-width: 600px)': {
    maxWidth: "100%",
    height: "90vh", 
  },
  }));

export const StyledGrid = styled(Grid)(() => ({
    borderBottom:"1px solid grey",
}));

export const StyledTextFieldBox = styled(Box)(() => ({
    display: "flex",
    alignItems:"center",
    position:"absolute",
    bottom:"10px",
    width:"100%",
    padding:"10px",
}));

export const StyledMessageBox = styled(Box)(({ theme }) => ({
    height:"80%",
    display: "flex",
    flexDirection: "column-reverse",
    alignItems: "flex-end",
    padding: "10px",

    '@media (max-width: 600px)': {
        overflowY: "auto",
      },
  }));

  export const StyledTextMessage = styled(Typography)(() => ({
    backgroundColor:"lightblue",
    padding:"5px 10px",
    margin:"5px",
    borderRadius:"5px",
}));