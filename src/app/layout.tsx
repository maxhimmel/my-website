import type { Metadata, Viewport } from "next";
import { BackgroundLayout } from "./components/backgroundLayout";
import { NavbarWithDrawer } from "./components/navbarWithDrawer";
import "./globals.css";

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
        <BackgroundLayout />
        <NavbarWithDrawer>{children}</NavbarWithDrawer>
      </body>
    </html>
  );
}
