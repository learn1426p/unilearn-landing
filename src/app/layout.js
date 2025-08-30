// src/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UniLearn",
  description:
    "Smarter learning for Nigerian students — syllabuses, past questions, lecture notes and AI study tools.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>{children}</body>
    </html>
  );
}
