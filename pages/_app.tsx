import type { AppProps } from "next/app";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "../styles/globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "800"],
  style: ["normal", "italic"],
  variable: "--font-barlow-condensed",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={`app ${barlow.variable} ${barlowCondensed.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
