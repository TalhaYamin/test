import React, { useState, ChangeEvent } from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { StyledBox, StyledGrid, StyledMessageBox, StyledTextFieldBox, StyledTextMessage } from "./styled";
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
const Chat: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<string[]>([]);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleSend = () => {
        if (message.trim() !== "") {
            setMessages([...messages, message]);
            setMessage("");
        }
    };

    return (
        <StyledBox>
            <Box>
                <StyledGrid container wrap="nowrap" spacing={1}>
                    <Grid item>
                        <Avatar>W</Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth>
                        <Typography noWrap>name</Typography>
                        <Typography noWrap>Offline. Last seen</Typography>
                    </Grid>
                </StyledGrid>
            </Box>
            <StyledTextFieldBox>
                <TextField
                    variant="outlined"
                    placeholder="Type your message here"
                    fullWidth
                    value={message}
                    onChange={handleInputChange}
                />
                <IconButton color="primary" aria-label="send message" onClick={handleSend}>
                    <SendIcon />
                </IconButton>
            </StyledTextFieldBox>

            <StyledMessageBox>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <StyledTextMessage>{msg}</StyledTextMessage>
                    </div>
                ))}
            </StyledMessageBox>
        </StyledBox>
    );
};

export default Chat;
