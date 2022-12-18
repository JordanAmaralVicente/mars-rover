import { ChangeEvent, useState } from "react";
import {
  CenteredContainer,
  StyledButton,
  StyledTextField,
} from "../../../common";

interface InitTerminalProps {
  onClickInit: (connectionString: string) => void;
  buttonLabel?: string;
  placeholder?: string;
  errorMessage?: string;
  isLoading?: boolean;
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
    <CenteredContainer sx={{ height: "100%" }}>
      <StyledTextField
        placeholder={props.placeholder}
        onChange={handleOnChangeTextField}
        style={{
          background: "white",
          marginBottom: "16px",
          width: "50%",
        }}
      />
      <StyledButton variant="contained" onClick={handleOnClickInitConnection}>
        {props.buttonLabel}
      </StyledButton>
    </CenteredContainer>
  );
};
