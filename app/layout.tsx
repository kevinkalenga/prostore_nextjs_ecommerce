import type { Metadata } from "next";
import {Inter} from "next/font/google";
import { APP_NAME } from "@/lib/constants";
import "../assets/styles/globals.css";




 const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: {
    template: `%s | Prostore`,
    default: APP_NAME
  },
  description: "A modern ecommerce plateform built with next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
