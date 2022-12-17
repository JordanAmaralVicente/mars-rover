import { Box, Button, styled, TextField } from "@mui/material";

export const TerminalOuterContainer = styled(Box)(() => ({
  margin: "64px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

export const TerminalInnerContainer = styled(Box)(() => ({
  width: "100%",
  maxWidth: "700px",
  height: "500px",
  borderRadius: "6px",
  border: "1px solid rgb(133, 133, 133)",
  backgroundColor: "#ededed",
}));

export const StyledButton = styled(Button)(() => ({
  fontWeight: "bold",
  padding: "16px",
  backgroundColor: "#550c18",
}));

export const StyledTextField = styled(TextField)(() => ({
  backgroundColor: "white",
}));
