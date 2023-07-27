import { Typography } from "@mui/material";
import React, { useRef, useEffect } from "react";
import { StyledTextMessageSender, StyledTextMessageReviver, StyledDeleteButton, StyledMessageBox, StyledDescription, StyledRecieverMessage, StyledSenderMessage } from "./styled";
import { format, isToday, isYesterday } from "date-fns";
import Linkify from "react-linkify";
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';

interface MessageProps {
    mockData: any[];
    onDelete: (index: number) => void;
}

const ChatList: React.FC<MessageProps> = ({ mockData, onDelete }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollToBottom = () => {
            if (containerRef.current) {
                const scrollHeight = containerRef.current.scrollHeight;
                const height = containerRef.current.clientHeight;
                const maxScrollTop = scrollHeight - height;
                containerRef.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
            }
        };

        scrollToBottom();
        if (mockData?.length > 0) {
            scrollToBottom();
        }
    }, [mockData]);

    const handleDelete = (index: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this message?");
        if (confirmDelete) {
            onDelete(index);
        }
    };

    const formatDate = (date: Date) => {
        if (isToday(date)) {
            return "Today";
        } else if (isYesterday(date)) {
            return "Yesterday";
        } else {
            return format(date, "MM/dd/yyyy");
        }
    };

    const groupedMessages: { [date: string]: any[] } = {};
    mockData.forEach((msg) => {
        const dateKey = formatDate(new Date(msg.date));
        if (!groupedMessages[dateKey]) {
            groupedMessages[dateKey] = [];
        }
        groupedMessages[dateKey].push(msg);
    });

    return (
        <StyledMessageBox ref={containerRef}>
            {Object.entries(groupedMessages).map(([date, messages]) => (
                <React.Fragment key={date}>
                    <Typography textAlign={"center"} color="lightgray">{date}</Typography>
                    {messages.map((msg: any) => (
                        <div key={msg.id}>
                            {msg.type === "sender" ? (
                                <div>
                                    <StyledTextMessageSender>
                                        <StyledSenderMessage>
                                            <Linkify>{msg.message}</Linkify>
                                        </StyledSenderMessage>
                                        <DeleteOutlineTwoToneIcon sx={{ fontSize: "15px", color: "grey" }} onClick={() => onDelete(msg.id)} />
                                    </StyledTextMessageSender>
                                    <Typography fontSize={12} color={"gray"} marginTop="5px">
                                        {format(new Date(msg?.date), "HH:mm a")}
                                    </Typography>
                                </div>
                            ) : (
                                <div>
                                    <StyledTextMessageReviver>
                                        <StyledRecieverMessage>
                                            <Linkify>{msg.message}</Linkify>
                                        </StyledRecieverMessage>
                                        <DeleteOutlineTwoToneIcon sx={{ fontSize: "15px", color: "grey" }} onClick={() => onDelete(msg.id)} />
                                    </StyledTextMessageReviver>
                                    <StyledDescription>
                                        <Typography fontSize={12} color={"gray"}>
                                            {format(new Date(msg?.date), "HH:mm a")}
                                        </Typography>
                                    </StyledDescription>
                                </div>
                            )}
                        </div>
                    ))}
                </React.Fragment>
            ))}
        </StyledMessageBox>
    );
};

export default ChatList;
