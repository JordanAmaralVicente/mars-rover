import { Box, Typography, useTheme } from "@mui/material";
import { Track } from "../../../components";
import JordanImage from "../../../assets/images/jordan.jpeg";
import theme from "../../../theme";

export const AboutMeTrack = () => {
  const standardTheme = useTheme();

  return (
    <Track style={{ backgroundColor: theme.color.primary }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          width: "50%",
          justifyContent: "center",
          alignItems: "center",

          [standardTheme.breakpoints.down("md")]: {
            marginBottom: "32px",
          },
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          About the developer
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <img
            src={JordanImage}
            alt="Jordan Italo"
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              marginRight: "24px",
            }}
          />
          <Typography>Jordan Ítalo A. F. C. Vicente</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "white",
          width: "50%",
        }}
      >
        <Typography>
          I am in the market for about 2 years, I have completed the IT techinal
          course and currently I attend Computational Mathematics at UFMG. I
          have soft skills as good comunication, flexibility, self-management,
          organization. Working mainly with web development, but I already
          explored others fields from computer science, such as: cybersecurity,
          data engineering and data science.
        </Typography>
      </Box>
    </Track>
  );
};
