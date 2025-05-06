import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { ThemeProvider } from "next-themes";

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
    <html lang="en" suppressHydrationWarning>
      <body>
        <div className="min-h-screen bg-background text-foreground">
          <ThemeProvider defaultTheme="light" attribute="class">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
