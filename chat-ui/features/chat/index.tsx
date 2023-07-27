import React, { useEffect, useState } from "react";
import { StyledBox, StyledTextFieldBox } from "./styled";
import ChatHeader from "../chatHeader";
import { mockData } from "../../utils/mockData";
import ChatList from "../messageBox";
import MessageInputField from "../chatInputField";

interface Message {
    id: number;
    type: string;
    message: string;
    date: Date;
}

const Chat: React.FC = () => {
    const [messagesList, setMessagesList] = useState<Message[]>([]);

    useEffect(() => {
        setMessagesList(mockData);
    }, []);

    const handleSend = (message: string) => {
        const newMessage: Message = {
            id: Math.random(),
            type: "receiver",
            message: message,
            date: new Date(),
        };
        setMessagesList((prevMessages) => [...prevMessages, newMessage]);
        localStorage.setItem(
            "chatMessages",
            JSON.stringify([...messagesList, newMessage])
        );
    };

    const handleDelete = (id: number) => {
        const updatedMessagesList = messagesList.filter((message) => message.id !== id);
        setMessagesList(updatedMessagesList);
        localStorage.setItem("chatMessages", JSON.stringify(updatedMessagesList));
    };

    useEffect(() => {
        const chatData = localStorage.getItem("chatMessages");
        if (chatData) {
            setMessagesList(JSON.parse(chatData));
        }
    }, []);

    return (
        <StyledBox>
            <ChatHeader />
            <ChatList mockData={messagesList} onDelete={handleDelete} />
            <StyledTextFieldBox>
                <MessageInputField onSend={handleSend} />
            </StyledTextFieldBox>
        </StyledBox>
    );
};

export default Chat;
