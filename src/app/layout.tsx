import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeController } from "./components/themeController";
import { BackgroundLayout } from "./components/backgroundLayout";

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
        <div className="fixed top-0 navbar shadow-xl z-50 bg-neutral text-neutral-content">
          <div className="navbar-start">
            <ThemeController />
          </div>
          <div className="navbar-center">
            <p className="text-4xl font-black">Max Himmel</p>
          </div>
          <div className="navbar-end"></div>
        </div>

        <BackgroundLayout />

        <div className="mt-16">{children}</div>
      </body>
    </html>
  );
}
