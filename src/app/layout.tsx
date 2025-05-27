import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import '../styles/globals.css';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Navaidix Solutions",
  description: "Navaidix Solutions Private Limited - Global Talent Solutions",
  icons: {
    icon: '/cropped_circle_image.ico',
    shortcut: '/cropped_circle_image.ico',
    apple: '/cropped_circle_image.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
