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
}

export const Terminal = (props: TerminalProps): JSX.Element => {
  const [isInitialized, setIsInitialized] = useState(false);

  const handleOnClickInitialize = async (posString: string) => {
    try {
      await props.onClickInitialize(posString);
      setIsInitialized(true);
    } catch (error) {}
  };

  return (
    <TerminalOuterContainer>
      <TerminalInnerContainer>
        {!isInitialized && (
          <InitTerminal onClickInit={handleOnClickInitialize} />
        )}
        {isInitialized && <REPL onSendCommand={props.onSendCommand} />}
      </TerminalInnerContainer>
    </TerminalOuterContainer>
  );
};
