import React from "react";
import NasaLogo from "../../assets/images/nasa-logo.svg";
import { OuterContainer, InnerContainer } from "./styled-components";

export const Navbar = (): JSX.Element => {
  return (
    <OuterContainer>
      <InnerContainer>
        <img
          src={NasaLogo}
          alt="Nasa logo provided by Nasa"
          width={64}
          height={64}
          style={{ marginLeft: "16px" }}
        />
        <h1>Making the mankind Interplanetary</h1>
      </InnerContainer>
      <InnerContainer>
        <img
          src={NasaLogo}
          alt="Nasa logo provided by Nasa"
          width={64}
          height={64}
          style={{ marginRight: "16px" }}
        />
      </InnerContainer>
    </OuterContainer>
  );
};
