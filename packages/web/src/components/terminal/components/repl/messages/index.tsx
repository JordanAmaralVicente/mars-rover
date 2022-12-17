import { Box, styled } from "@mui/material";

const OuterContainer = styled(Box)(() => ({
  maxHeight: "425px",
  height: "100%",
  overflowY: "auto",
  backgroundColor: "blue",
}));

export type MessageType = "received" | "sent";

export interface Message {
  message: string;
  type: MessageType;
}

export interface MessageContainerProps {
  messages: Message[];
}

export const MessageComponent = (message: Message) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: message.type === "received" ? "flex-start" : "flex-end",
      }}
    >
      {message.message}
    </Box>
  );
};

export const MessageContainer = (props: MessageContainerProps) => {
  return (
    <OuterContainer>
      {props.messages.map((message, index) => (
        <MessageComponent
          key={index}
          message={message.message}
          type={message.type}
        />
      ))}
    </OuterContainer>
  );
};
