import { Box } from "@mui/material";
import { useState } from "react";
import RoverBGImage from "../../assets/images/rover.jpg";
import { BannerWithImage, Terminal } from "../../components/";
import theme from "../../theme";
import { RoverHeadingDirections } from "../../types/rover";
import { initPlateau } from "./api/initialize-plateau";
import { initAndMoveRover } from "./api/initialize-rover";
import { AboutMeTrack, MainMessage } from "./components";

export function HomePage(): JSX.Element {
  const [plateauId, setPlateauId] = useState<string>("");

  // TODO: use it when it has two apis
  // const [messagesControl, setMessagesControl] = useState<number>(0);

  const handleOnClickInitTerminal = async (connectionString: string) => {
    const [x, y] = connectionString.trim().split(" ");

    const posX = Number(x);
    const posY = Number(y);

    try {
      const response = await initPlateau({ posX, posY });
      const { initializedPlateau } = response.data;
      setPlateauId(initializedPlateau?.id);
    } catch (error) {}
  };

  const handleOnSendCommand = async (command: string) => {
    const [x, y, head, movements] = command.trim().split(" ");

    const parsedHead = head as RoverHeadingDirections;

    const response = await initAndMoveRover({
      posX: Number(x),
      posY: Number(y),
      head: parsedHead,
      movements,
      plateauId,
    });

    const { currentPosition } = response.data;

    return `Final Rover position: x: ${currentPosition.xCoordinate}, y: ${currentPosition.yCoordinate}, head: ${currentPosition.head}`;
  };

  return (
    <>
      <BannerWithImage imgSrc={RoverBGImage} style={{ height: "400px" }}>
        <MainMessage />
      </BannerWithImage>
      <AboutMeTrack />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.color.darkBackground,
        }}
      >
        <Terminal
          onClickInitialize={handleOnClickInitTerminal}
          onSendCommand={handleOnSendCommand}
          initTerminal={{
            buttonLabel: "start",
            placeholder: "insert plateau right-upper coords",
          }}
          repl={{
            buttonLabel: "send",
            placeholder: "rover command",
          }}
        />
      </Box>
    </>
  );
}
