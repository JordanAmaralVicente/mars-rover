import { Message } from "../types";
import {
  MessageComponentContainer,
  MessageComponentInnerContainer,
} from "./styled-components";

export const MessageComponent = (message: Message) => {
  const justifyContent =
    message.type === "received" ? "flex-start" : "flex-end";

  return (
    <MessageComponentContainer
      sx={{
        justifyContent,
      }}
    >
      <MessageComponentInnerContainer>
        {message.message}
      </MessageComponentInnerContainer>
    </MessageComponentContainer>
  );
};
