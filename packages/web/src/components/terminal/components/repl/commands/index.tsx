import { Box, Button, styled, TextField } from "@mui/material";
import { useEffect, useState } from "react";

const CommandsContainer = styled(Box)(() => ({
  height: "15%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}));

interface CommandsContainerProps {
  onSendCommand: (command: string) => any;
  disabled?: boolean;
}

export const CommandsContainter = (props: CommandsContainerProps) => {
  const [command, setCommand] = useState("");

  const handleOnSendCommand = () => {
    props.onSendCommand(command);
    setCommand("");
  };

  useEffect(() => {
    document
      .getElementById("command-text-field")
      ?.addEventListener("keypress", (e) => {
        if (e.code === "Enter") {
          handleOnSendCommand();
        }
      });
  });

  return (
    <CommandsContainer>
      <TextField
        value={command}
        placeholder="Insert the comands here"
        onChange={(e) => {
          setCommand(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            handleOnSendCommand();
          }
        }}
        style={{
          width: "80%",
          marginRight: "8px",
        }}
        disabled={props.disabled}
      />
      <Button
        variant="contained"
        onClick={handleOnSendCommand}
        disabled={props.disabled}
      >
        Enviar
      </Button>
    </CommandsContainer>
  );
};
