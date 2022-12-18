import { Box } from "@mui/material";
import { AxiosError } from "axios";
import { useState } from "react";
import { CommandsInput } from "./commands";
import { MessageScreen } from "./messages/";
import { Message } from "./types";

interface REPLProps {
  onSendCommand: (command: string) => Promise<string>;
  disabled?: boolean;
  commands?: {
    buttonLabel?: string;
    placeholder?: string;
  };
}

export const REPL = (props: REPLProps): JSX.Element => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [disableCommandEditor, setDisableCommandEditor] = useState(false);

  const handleOnSendCommand = async (command: string) => {
    setIsSending(true);
    setDisableCommandEditor(true);
    setErrorMessage("");

    const newMessages: Message[] = [
      ...messages,
      { message: command, type: "sent" },
    ];

    setMessages(newMessages);

    try {
      const result = await props.onSendCommand(command);
      if (result) {
        newMessages.push({ message: result, type: "received" });
      }
    } catch (err) {
      const error = err as AxiosError;

      if (error.response) {
        const errorResponse = error.response as any;
        setErrorMessage(errorResponse.data?.error.message);
      } else {
        setErrorMessage("unknown error!");
      }
    }

    setIsSending(false);
    setDisableCommandEditor(false);
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
      <MessageScreen messages={messages} errorMessage={errorMessage} />
      <CommandsInput
        onSendCommand={handleOnSendCommand}
        buttonLabel={props.commands?.buttonLabel}
        placeholder={props.commands?.placeholder}
        disabled={disableCommandEditor}
        isSending={isSending}
      />
    </Box>
  );
};
