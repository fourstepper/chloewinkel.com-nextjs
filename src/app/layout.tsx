import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Footer } from "@Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import { type Metadata } from "next";
import { Syne } from "next/font/google";
import { type PropsWithChildren } from "react";

config.autoAddCss = false;

const font = Syne({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  description: "Graphic designer, illustrator and photographer",
  title: "Chloe Winkel",
};

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html
      className={font.className}
      lang="en"
    >
      <head>
        <link
          href="/favicon.ico"
          rel="icon"
          sizes="any"
        />
      </head>
      <body className="flex h-screen flex-col items-center justify-between">
        {/* this div seems to be our "container" */}
        <div className="container mx-auto mb-auto flex flex-row flex-wrap place-content-center justify-items-center p-12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
