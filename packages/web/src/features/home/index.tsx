import RoverBGImage from "../../assets/images/rover.jpg";
import { BannerWithImage } from "../../components/";
import { MainMessage } from "./components";

export function HomePage(): JSX.Element {
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
    </>
  );
}
