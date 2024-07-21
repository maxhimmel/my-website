import type { Metadata } from "next";
import "./globals.css";
import { ThemeController } from "./components/themeController";

export const metadata: Metadata = {
  title: "Max Himmel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="sticky top-0 navbar shadow-xl z-50 bg-neutral text-neutral-content">
          <div className="navbar-start">
            <ThemeController />
          </div>
          <div className="navbar-center">
            <p className="text-4xl font-black">Max Himmel</p>
          </div>
          <div className="navbar-end"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
