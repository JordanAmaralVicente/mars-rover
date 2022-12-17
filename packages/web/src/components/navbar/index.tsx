import { ReactNode, CSSProperties } from "react";
import { OuterContainer, InnerContainer } from "./styled-components";

interface NavbarProps {
  rightTitle?: string | ReactNode;
  leftImage?: {
    alt: string;
    src: string;
    width: number;
    height: number;
    style?: CSSProperties;
  };
  leftContainer?: ReactNode;
}

export const Navbar = (props: NavbarProps): JSX.Element => {
  return (
    <OuterContainer>
      <InnerContainer>
        {props.leftImage && (
          <img
            src={props.leftImage.src}
            alt={props.leftImage.alt}
            width={props.leftImage.width}
            height={props.leftImage.height}
            style={{ marginLeft: "16px", ...props.leftImage.style }}
          />
        )}
        <h1>{props?.rightTitle}</h1>
      </InnerContainer>
      <InnerContainer>
        {props.leftContainer && props.leftContainer}
      </InnerContainer>
    </OuterContainer>
  );
};
