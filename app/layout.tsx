import type { Metadata } from "next";
import { Montserrat_Alternates, Albert_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const montserratAlternates = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: false,
});

const albertSans = Albert_Sans({
  variable: "--font-albert-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Print Forge",
  description: "A tool to help you print your 3D models with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`h-full antialiased ${montserratAlternates.variable} ${albertSans.variable}`}
    >
      <body className="min-h-full flex flex-col font-albert min-w-75">
        <Header />
        <main className="w-full h-full max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
