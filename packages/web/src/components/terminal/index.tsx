import { Box, styled } from "@mui/material";
import { useState } from "react";
import { InitTerminal } from "./components/init-connection";
import { REPL } from "./components/repl";

const OuterContainer = styled(Box)(() => ({
  margin: "64px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const TerminalContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "700px",
  height: "500px",
  borderRadius: "6px",
  border: "1px solid rgb(133, 133, 133)",
  backgroundColor: "#ededed",
}));

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
    <OuterContainer>
      <TerminalContainer>
        {!isInitialized && (
          <InitTerminal onClickInit={handleOnClickInitialize} />
        )}
        {isInitialized && <REPL onSendCommand={props.onSendCommand} />}
      </TerminalContainer>
    </OuterContainer>
  );
};
