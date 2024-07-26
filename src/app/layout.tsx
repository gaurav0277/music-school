import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Music School",
  description: "Music School is a premier institution dedicated to teaching the art and science of music. We nurture talent from the ground up, fostering a vibrant community of musicians.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} >{children}
      
      </body>
    </html>
  );
}
