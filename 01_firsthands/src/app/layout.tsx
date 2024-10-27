import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Hi from roots",
  description: "learning next app",
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
        <nav>
          <ul>
            <li><Link prefetch={false} href="/">Home</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/team/about">About</Link></li>
            <li><Link href="/team/contact">Contacts</Link></li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
