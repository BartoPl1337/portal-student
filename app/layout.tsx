import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from "next/font/google";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";

const geistSans = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Student Portal",
  description: "Student Portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}
