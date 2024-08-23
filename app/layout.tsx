import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "@/app/components/theme-provider";
import Navbar from "@/app/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tajay's Blog",
  description: "Nextjs blog by Tajay Robertson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem disableTransitionOnChange>
          <Navbar />
          <main className={"max-w-5xl mx-auto p-5"}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
