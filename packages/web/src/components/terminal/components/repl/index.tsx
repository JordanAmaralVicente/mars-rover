import { Box } from "@mui/material";
import { useState } from "react";
import { CommandsContainter } from "./commands";
import { MessageContainer, Message } from "./messages";

interface REPLProps {
  onSendCommand: (command: string) => Promise<string>;
  disabled?: boolean;
}

export const REPL = (props: REPLProps): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([]);

  const handleOnSendCommand = async (command: string) => {
    const newMessages: Message[] = [
      ...messages,
      { message: command, type: "sent" },
    ];

    try {
      const result = await props.onSendCommand(command);
      if (result) newMessages.push({ message: result, type: "received" });
    } catch (error) {}

    setMessages(newMessages);
  };

  return (
    <Box
      sx={{
        height: "100%",
        color: "white",
        margin: "2px",
      }}
    >
      <MessageContainer messages={messages} />
      <CommandsContainter onSendCommand={handleOnSendCommand} />
    </Box>
  );
};
