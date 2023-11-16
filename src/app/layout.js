import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import Head from "next/head";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Udemy Clone",
  description: "A clone of Udemy",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </Head>
      <html lang="en">
        <body className={inter.className}>
          <StyledEngineProvider injectFirst>
            <Navbar />
            {children}
          </StyledEngineProvider>
        </body>
      </html>
    </>
  );
}
