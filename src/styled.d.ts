import "styled-components";

interface IPalette {
  dark: string;
  light?: string;
  regular: string;
  dark50?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      text: {
        dark: string;
        light: string;
      };
      red: IPalette;
      blue: IPalette;
      green: IPalette;
      primary: IPalette;
    };
  }
}
