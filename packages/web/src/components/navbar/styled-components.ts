import { Box, styled } from "@mui/material";
import theme from "../../theme/";

export const OuterContainer = styled(Box)(() => ({
  width: "100%",
  height: "72px",
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  position: "sticky",
  top: 0,

  backgroundColor: theme.color.darkBackground,
}));

export const InnerContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  color: "white",
}));
