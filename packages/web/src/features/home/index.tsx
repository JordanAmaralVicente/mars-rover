import { Box } from "@mui/material";
import { useState } from "react";
import RoverBGImage from "../../assets/images/rover.jpg";
import { BannerWithImage, Terminal } from "../../components/";
import { initPlateau } from "./api/initialize-plateau";
import { AboutMeTrack, MainMessage } from "./components";

export function HomePage(): JSX.Element {
  const [plateauCode, setPlateauCode] = useState<string>(
    "75f26f0c-7b56-4f49-b88d-460b164962c5"
  );

  const handleOnClickInitTerminal = async (connectionString: string) => {
    // const [x, y] = connectionString.trim().split(" ");
    // const posX = Number(x);
    // const posY = Number(y);
    // const response = await initPlateau({ posX, posY });
    // const { error, initializedPlateau } = response.data;
    // if (!error && initializedPlateau) {
    //   // TODO: fix type
    //   setPlateauCode(response?.data?.initializedPlateau?.id as string);
    // }
  };

  const handleOnSendCommand = async (command: string) => {
    function sleep(ms: number) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
    // await sleep(2000);
    return `Recebido: ${command}`;
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
