import { Box, Button, TextField, styled } from "@mui/material";

export const CenteredContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledButton = styled(Button)(() => ({
  fontWeight: "bold",
  padding: "8px 16px",
  backgroundColor: "#550c18",

  ":hover": {
    backgroundColor: "#F7DAD9",
    color: "#550c18",
  },
}));

export const StyledTextField = styled(TextField)(() => ({
  backgroundColor: "white",
  color: "red",

  "& > div > input": {
    padding: "12px",
  },

  "& .MuiOutlinedInput-root.Mui-focused:hover, .MuiOutlinedInput-root.Mui-focused":
    {
      "& > fieldset": {
        borderColor: "#550c18",
      },
    },
}));
