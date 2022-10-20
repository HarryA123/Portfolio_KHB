import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import type { AppProps } from "next/app";
const customTheme = extendTheme({
  semanticTokens: {
    colors: {
      primary: "#00D770",
      secondary: {
        default: "#CC39FF",
      },
      gray: {
        100: "#7D7D7D",
        200: "#303030",
      },
      background: {
        default: "#0A102E",
      },
      black: "#000000",
      white: "#FFFFFF",
      text: {
        default: "gray.900",
        _dark: "gray.50",
      },
    },
    textStyle: {
      sm: {
        fontSize: "14px",
        lineHight:"16px",
        fontWeight:"400",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
