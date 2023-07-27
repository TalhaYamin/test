import React from "react";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import { StyledGrid } from "./styled";

const ChatHeader: React.FC = () => {
    return (
        <StyledGrid container wrap="nowrap" >
            <Box display={"flex"} justifyContent="center" alignItems={"center"} gap="10px">
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png">W</Avatar>
                <Typography noWrap>David</Typography>
            </Box>

        </StyledGrid >
    );
};

export default ChatHeader;
