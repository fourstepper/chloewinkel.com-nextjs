import "./globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import type { Metadata } from "next";
import Footer from "../components/Footer";
import { Syne } from "next/font/google";

const font = Syne({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chloe Winkel",
  description: "Graphic designer, illustrator and photographer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <script
          async
          src="https://ackee.robinopletal.com/tracker.js"
          data-ackee-server="https://ackee.robinopletal.com"
          data-ackee-domain-id="c09d9e42-4171-4a7e-8236-2802140e3df8"
        ></script>
      </head>
      <body className="flex flex-col h-screen justify-between items-center">
        {/* this div seems to be our "container" */}
        <div className="mb-auto p-12 md:container md:mx-auto">{children}</div>
        <Footer></Footer>
      </body>
    </html>
  );
}
