import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

interface InitTerminalProps {
  onClickInit: (connectionString: string) => void;
  buttonLabel?: string;
  connectionStringPlaceholder?: string;
}

export const InitTerminal = (props: InitTerminalProps): JSX.Element => {
  const [connectionString, setConnectionString] = useState<string>("");

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TextField
        placeholder={
          props.connectionStringPlaceholder || "insert the connection string"
        }
        style={{
          background: "white",
          marginBottom: "16px",
        }}
        onChange={(e) => {
          const str = e.target.value;
          setConnectionString(str);
        }}
      />
      <Button
        variant="contained"
        style={{
          fontWeight: "bold",
          padding: "16px",
          backgroundColor: "#550c18",
        }}
        onClick={() => props.onClickInit(connectionString)}
      >
        Iniciar Conexão
      </Button>
    </Box>
  );
};
