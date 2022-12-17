import { Box, styled } from "@mui/material";

export const MessageScreenContainer = styled(Box)(() => ({
  maxHeight: "425px",
  height: "100%",
  overflowY: "auto",
}));

export const MessageComponentContainer = styled(Box)(() => ({
  display: "flex",
  width: "100%",
  flexDirection: "row",
  backgroundColor: "white",
  color: "black",
}));

export const MessageComponentInnerContainer = styled(Box)(() => ({
  margin: "2px",
  backgroundColor: "#550c18",
  color: "white",
  borderRadius: "6px",
  padding: "6px",
}));
