import { Box, Typography } from "@mui/material";
import theme from "../../../theme";

export const MainMessage = () => {
  return (
    <Box
      sx={{
        opacity: 0.8,
        backgroundColor: theme.color.darkBackground,
        maxWidth: "300px",
        padding: theme.layout.padding,
        margin: "64px",
      }}
    >
      <Typography
        sx={{
          color: "white",
          fontSize: "18px",
        }}
      >
        This Project was built as a techinal teste to Emana Group Full Stack
        Engineer Job. It consists in control a squad of robotic rovers that are
        to be landed by NASA on a plateau on Mars. The goal is find a way to
        control the rover's positions sending a coordinates and a series of
        commands and then receive the final position.
      </Typography>
    </Box>
  );
};
