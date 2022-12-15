interface Theme {
  color: {
    primary: string;
    secondary: string;
    terciary: string;
    quaternary: string;
    background: string;
    secondaryBackground: string;
    darkBackground: string;
  };
  layout: {
    padding: string;
  };
}

export const theme: Theme = {
  color: {
    primary: "#550c18",
    secondary: "#443730",
    terciary: "#786452",
    quaternary: "#A5907E",
    background: "#F7DAD9",
    secondaryBackground: "#f0e7e7",
    darkBackground: "#282828",
  },
  layout: {
    padding: "16px",
  },
};

export default theme;
