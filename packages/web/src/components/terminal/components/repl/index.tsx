import { Box } from "@mui/material";
import { useState } from "react";
import { CommandsInput } from "./commands";
import { MessageScreen } from "./messages/";
import { Message } from "./types";

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
      <MessageScreen messages={messages} />
      <CommandsInput onSendCommand={handleOnSendCommand} />
    </Box>
  );
};
