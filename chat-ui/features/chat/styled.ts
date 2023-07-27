import styled from "@emotion/styled";
import { Box,  Grid, } from "@mui/material";


export const StyledBox = styled(Box)(({ theme }) => ({
    width: "100%",
    maxWidth: "30%",
    height: "95vh",
    padding: "10px",
    position: "relative",
    backgroundColor: "#f4f6f1",
    margin: "0 auto",
    marginTop:"20px",
    borderRadius:"10px",
    boxShadow:"0px 2px 10px 0px #BDBDBD",

 
  '@media (max-width: 600px)': {
    maxWidth: "100%",
    height: "90vh", 
  },
  }));


export const StyledTextFieldBox = styled(Box)(() => ({
    display: "flex",
    alignItems:"center",
    position:"absolute",
    // backgroundColor: "White",
    bottom:"10px",
    width:"100%",
    padding:"10px",
}));
