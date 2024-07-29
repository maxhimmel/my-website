import type { Metadata, Viewport } from "next";
import { BackgroundLayout } from "./components/backgroundLayout";
import { ThemeDropdown } from "./components/themeDropdown";
import "./globals.css";
import { PolkaDotsPattern } from "./svg/patterns/polkaDots";

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
        <div className="fixed top-0 navbar bg-neutral text-neutral-content shadow-xl z-50 border-b-4 border-neutral-content">
          <PolkaDotsPattern className="bg-neutral text-neutral-content opacity-10 absolute inset-0 size-full -z-10" />
          <div className="navbar-start">
            <ThemeDropdown />
          </div>
          <div className="navbar-center">
            <p className="text-4xl font-black">Max Himmel</p>
          </div>
          <div className="navbar-end"></div>
        </div>

        <BackgroundLayout />

        {children}
      </body>
    </html>
  );
}
