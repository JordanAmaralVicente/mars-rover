import { Box, styled } from "@mui/material";

export const OuterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "72px",
  boxSizing: "border-box",

  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  backgroundColor: "#282828",

  [theme.breakpoints.down("sm")]: {
    height: "unset",
  },
}));

export const InnerContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",

  color: "white",
}));
