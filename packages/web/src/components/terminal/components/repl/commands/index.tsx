import { useState, KeyboardEvent, ChangeEvent } from "react";
import {
  CommandsContainer,
  CommandsTextField,
  CommandsButton,
} from "./styled-components";

interface CommandsContainerProps {
  onSendCommand: (command: string) => any;
  disabled?: boolean;
  buttonLabel?: string;
  placeholder?: string;
}

export const CommandsInput = (props: CommandsContainerProps) => {
  const [command, setCommand] = useState("");

  const handleOnSendCommand = () => {
    if (!command) return;

    const auxCommand = `${command}`;

    setCommand("");
    props.onSendCommand(auxCommand);
  };

  const handleOnKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Enter") handleOnSendCommand();
  };

  const handleOnChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  return (
    <CommandsContainer>
      <CommandsTextField
        value={command}
        placeholder={props.placeholder || "Insert commands here"}
        onChange={handleOnChangeTextField}
        onKeyDown={handleOnKeyDown}
        disabled={props.disabled}
      />
      <CommandsButton
        variant="contained"
        onClick={handleOnSendCommand}
        disabled={props.disabled}
      >
        {props.buttonLabel || "Send"}
      </CommandsButton>
    </CommandsContainer>
  );
};
