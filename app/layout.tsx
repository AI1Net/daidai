import type { Metadata } from "next";

import "./globals.css";
import "../styles/animations.css";

export const metadata: Metadata = {
  title: "DAI DAI",
  description: "The People's Meme. The World's Currency.",

  icons: {
    icon: "/logos/ball.png",
    shortcut: "/logos/ball.png",
    apple: "/logos/ball.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}