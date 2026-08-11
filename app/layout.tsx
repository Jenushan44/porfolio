import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Montserrat, Bebas_Neue } from "next/font/google";


const montserrat = Montserrat({
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jenushan Premkumar",
  description: "My personal portfolio where I showcase the projects I've built, my experience, and the technologies I work with.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
