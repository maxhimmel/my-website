import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "./navbar/navbar";
import Footer from "./footer/footer";

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
        <Navbar>
          {children}
          <Footer />
        </Navbar>
      </body>
    </html>
  );
}
