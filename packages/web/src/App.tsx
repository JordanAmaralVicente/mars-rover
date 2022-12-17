import { ReactNode } from "react";
import { Navbar } from "./components";
import NasaLogo from "./assets/images/nasa-logo.svg";

interface AppProps {
  children?: ReactNode;
}

function App(props: AppProps) {
  const { children } = props;

  return (
    <>
      <header>
        <Navbar
          rightTitle="Making the mankind Interplanetary"
          leftImage={{
            src: NasaLogo,
            width: 64,
            height: 64,
            alt: "Logotipo from Nasa",
          }}
        />
      </header>
      {children}
    </>
  );
}

export default App;
