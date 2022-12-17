import { ChangeEvent, useState } from "react";
import { StyledButton, StyledTextField } from "../styled-components";
import { CenteredContainer } from "../../../common";

interface InitTerminalProps {
  onClickInit: (connectionString: string) => void;
  buttonLabel?: string;
  connectionPlaceholder?: string;
}

export const InitTerminal = (props: InitTerminalProps): JSX.Element => {
  const [connectionString, setConnectionString] = useState<string>("");

  const handleOnChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
    setConnectionString(e.target.value);
  };

  const handleOnClickInitConnection = () => {
    props.onClickInit(connectionString);
  };

  return (
    <CenteredContainer>
      <StyledTextField
        placeholder={props.connectionPlaceholder || "insert connection string"}
        onChange={handleOnChangeTextField}
        style={{
          background: "white",
          marginBottom: "16px",
        }}
      />
      <StyledButton variant="contained" onClick={handleOnClickInitConnection}>
        {props.buttonLabel || "Start Connection"}
      </StyledButton>
    </CenteredContainer>
  );
};
