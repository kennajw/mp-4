import React from "react";
import Header from "@/components/Header";
import './globals.css'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Find That Movie! | MP-4",
  description: "App that finds movie data for MP-4 | CS-391.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
