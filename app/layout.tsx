import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";


const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  title: "Krishna Kumar",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} ${merriweather.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
