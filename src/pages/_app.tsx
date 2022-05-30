import "../styles/globals.css";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import { ChakraProvider} from "@chakra-ui/react";
import baseTheme from "../themes/theme";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <SessionProvider session={session}>
      <ChakraProvider theme={baseTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </SessionProvider>
  );
}

export default MyApp;
