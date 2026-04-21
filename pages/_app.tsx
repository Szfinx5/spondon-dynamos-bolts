import type { AppProps } from "next/app";
import "../styles/Layout.module.css";
import "../styles/Sidebar.module.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
