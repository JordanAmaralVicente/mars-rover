import { Message } from "../types";
import { MessageComponent } from "./message-component";
import {
  MessageScreenContainer,
  MessageScreenInnerContainer,
} from "../../styled-components";

export interface MessageScreenProps {
  messages: Message[];
}

export const MessageScreen = (props: MessageScreenProps) => {
  const { messages } = props;

  return (
    <MessageScreenContainer>
      <MessageScreenInnerContainer>
        {messages.map((message, index) => (
          <MessageComponent
            key={index}
            message={message}
            className={message.type}
          />
        ))}
      </MessageScreenInnerContainer>
    </MessageScreenContainer>
  );
};
