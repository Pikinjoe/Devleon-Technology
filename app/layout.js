import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { icons } from "@tabler/icons-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Devleon Technology",
  icons: {
    icon: "/assets/Image/newlogo.png",
    apple: "/assets/Image/newlogo.png",
    shortcut: "/assets/Image/newlogo.png",
  },
  keywords: [
    "Devleon Technology",
    "Web Development",
    "Software Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "E-commerce Solutions",
    "Cloud Computing",
    "Blockchain Solutions",
    "AI and Machine Learning",
  ],
  description: "A modern technology company that leverages on clean and green energy to  secure and scale your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
