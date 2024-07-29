import type { Metadata, Viewport } from "next";
import { BackgroundLayout } from "./components/backgroundLayout";
import { ThemeDropdown } from "./components/themeDropdown";
import "./globals.css";
import { PolkaDotsPattern } from "./svg/patterns/polkaDots";
import { Navbar } from "./components/navbar";

export const metadata: Metadata = {
  title: "Max Himmel",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <BackgroundLayout />
        {children}
      </body>
    </html>
  );
}
