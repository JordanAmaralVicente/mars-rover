import { Box } from "@mui/material";
import { useState } from "react";
import RoverBGImage from "../../assets/images/rover.jpg";
import { BannerWithImage, Terminal } from "../../components/";
import { initPlateau } from "./api/initialize-plateau";
import { initAndMoveRover } from "./api/initialize-rover";
import { AboutMeTrack, MainMessage } from "./components";

export function HomePage(): JSX.Element {
  const [plateauId, setPlateauId] = useState<string>(
    "75f26f0c-7b56-4f49-b88d-460b164962c5"
  );

  // TODO: use it when it has two apis
  // const [messagesControl, setMessagesControl] = useState<number>(0);

  const handleOnClickInitTerminal = async (connectionString: string) => {
    // const [x, y] = connectionString.trim().split(" ");
    // const posX = Number(x);
    // const posY = Number(y);
    // const response = await initPlateau({ posX, posY });
    // const { error, initializedPlateau } = response.data;
    // if (!error && initializedPlateau) {
    //   // TODO: fix type
    //   setPlateauId(response?.data?.initializedPlateau?.id as string);
    // }
  };

  const handleOnSendCommand = async (command: string) => {
    const [x, y, head, movements] = command.trim().split(" ");

    const parsedHead = head as "N" | "W" | "E" | "S";

    const response = await initAndMoveRover({
      posX: Number(x),
      posY: Number(y),
      head: parsedHead,
      movements,
      plateauId,
    });

    const { currentPosition } = response.data;

    return `Posição final: X: ${currentPosition.xCoordinate}, Y: ${currentPosition.yCoordinate} | HEAD: ${currentPosition.head}`;
  };

  return (
    <>
      <BannerWithImage
        imgSrc={RoverBGImage}
        style={{
          height: "400px",
        }}
      >
        <MainMessage />
      </BannerWithImage>
      <AboutMeTrack />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Terminal
          onClickInitialize={handleOnClickInitTerminal}
          onSendCommand={handleOnSendCommand}
        />
      </Box>
    </>
  );
}
