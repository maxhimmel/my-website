import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  title: "Max Himmel | Web Developer",
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
        <div className="min-h-screen bg-background text-foreground overflow-x-clip">
          <ThemeProvider defaultTheme="light" attribute="class">
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
