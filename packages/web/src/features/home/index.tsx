import { Box } from "@mui/material";
import { useState } from "react";
import RoverBGImage from "../../assets/images/rover.jpg";
import { BannerWithImage, Terminal } from "../../components/";
import theme from "../../theme";
import { RoverHeadingDirections } from "../../types/rover";
import { initPlateau, initRover, moveRover } from "./api/";
import { AboutMeTrack, MainMessage } from "./components";

export function HomePage(): JSX.Element {
  const [plateauId, setPlateauId] = useState<string>("");
  const [roverId, setRoverId] = useState<string>("");
  const [roverInitialized, setRoverInitialized] = useState<boolean>(false);

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
    if (!roverInitialized) {
      const [x, y, head] = command.trim().split(" ");

      const parsedHead = head as RoverHeadingDirections;
      const posX = Number(x);
      const posY = Number(y);

      const response = await initRover({
        posX,
        posY,
        head: parsedHead,
        plateauId,
      });

      const { startPosition } = response.data;

      setRoverId(response.data.id);
      setRoverInitialized(true);

      return `Rover has landed at: x ${startPosition.xCoordinate}, y ${startPosition.yCoordinate}`;
    } else {
      const response = await moveRover({
        movements: command.trim(),
        roverId,
      });

      const { currentPosition } = response.data;

      setRoverInitialized(false);
      setRoverId("");
      return `Final Rover position: x: ${currentPosition.xCoordinate}, y: ${currentPosition.yCoordinate}, head: ${currentPosition.head}`;
    }
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
