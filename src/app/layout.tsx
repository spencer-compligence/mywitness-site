import type { Metadata } from "next";
import { inter, crimsonPro } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyWitness.info | Truth, Evidence, and Hope",
  description: "Truth ministry for those questioning or leaving Jehovah's Witnesses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${crimsonPro.variable}`}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
