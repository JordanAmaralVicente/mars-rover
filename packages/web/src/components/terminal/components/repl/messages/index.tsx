import { Message } from "../types";
import { MessageComponent } from "./message-component";
import { MessageScreenContainer } from "./styled-components";

export interface MessageScreenProps {
  messages: Message[];
}

export const MessageScreen = (props: MessageScreenProps) => {
  const { messages } = props;

  return (
    <MessageScreenContainer>
      {messages.map(({ message, type }, index) => (
        <MessageComponent key={index} message={message} type={type} />
      ))}
    </MessageScreenContainer>
  );
};
