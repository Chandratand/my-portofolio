import "@/styles/globals.css";
import { Poppins } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import GraphBG from "@/components/GraphBG";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <ThemeProvider enableSystem attribute="class">
      <main
        className={`${poppins.variable} relative overflow-hidden font-sans`}
      >
        <GraphBG />
        <Component {...pageProps} />
        <div className="radial" />
      </main>
    </ThemeProvider>
  );
}
