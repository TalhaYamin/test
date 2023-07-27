import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { StyledTextField } from "./styled";

interface MessageInputProps {
    onSend: (message: string) => void;
}

const MessageInputField: React.FC<MessageInputProps> = ({ onSend }) => {
    const [message, setMessage] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSend();
        }
    };

    const handleSend = () => {
        if (message === '') {
            return;
        }

        onSend(message);
        setMessage("");
    };

    return (
        <>
            <StyledTextField
                variant="outlined"
                placeholder="Type your message here"
                fullWidth
                value={message}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
            />
            <IconButton color="primary" aria-label="send message" onClick={handleSend}>
                <SendIcon />
            </IconButton>
        </>
    );
};

export default MessageInputField;
