import { useState } from "react";
import {
  TerminalInnerContainer,
  TerminalOuterContainer,
  REPL,
  InitTerminal,
} from "./components";

interface TerminalProps {
  onClickInitialize: (posString: string) => Promise<void>;
  onSendCommand: (command: string) => Promise<string>;
  initTerminal?: {
    placeholder: string;
    buttonLabel: string;
  };
  repl?: {
    placeholder?: string;
    buttonLabel?: string;
  };
}

export const Terminal = (props: TerminalProps): JSX.Element => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [initTerminelError, setInitTerminalError] = useState("");

  const handleOnClickInitialize = async (posString: string) => {
    try {
      await props.onClickInitialize(posString);
      setIsInitialized(true);
    } catch (error) {
      setInitTerminalError("error");
    }
  };

  return (
    <TerminalOuterContainer>
      <TerminalInnerContainer>
        {!isInitialized && (
          <InitTerminal
            onClickInit={handleOnClickInitialize}
            buttonLabel={props.initTerminal?.buttonLabel}
            placeholder={props.initTerminal?.placeholder}
          />
        )}
        {isInitialized && (
          <REPL
            onSendCommand={props.onSendCommand}
            commands={{
              buttonLabel: props.repl?.buttonLabel,
              placeholder: props.repl?.placeholder,
            }}
          />
        )}
      </TerminalInnerContainer>
    </TerminalOuterContainer>
  );
};
