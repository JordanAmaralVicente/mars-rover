import { Box, Button, styled, TextField } from "@mui/material";

export const CommandsContainer = styled(Box)(() => ({
  height: "15%",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid rgb(133, 133, 133)",
  borderWidth: "1px 0 0",
}));

export const CommandsTextField = styled(TextField)(() => ({
  width: "80%",
  marginRight: "8px",
}));

export const CommandsButton = styled(Button)(() => ({}));
