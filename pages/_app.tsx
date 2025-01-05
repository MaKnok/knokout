import { AppProps } from "next/app";
import GlobalStyle from "@src/theme/GlobalStyle";
import ThemeProvider from "@src/theme/ThemeProvider";

export default function App({ Component, pageProps }: AppProps){
  return(
    //GlobalStyle is applied to the whole application
    <>
      <ThemeProvider>
          <GlobalStyle />
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
