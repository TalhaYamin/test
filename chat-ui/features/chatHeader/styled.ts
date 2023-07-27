import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const StyledGrid = styled(Grid)(() => ({
    color:"#909090",
    Padding: "10px 30px",
    position:"relative",
    marginBottom:"20px",
    "&::after":{
        content:'""',
        width:"100%",
        height:"2px",
        background:"lightgray",
        position:"absolute",
        bottom:"-10px"
    }
}));
