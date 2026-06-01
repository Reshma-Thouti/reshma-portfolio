import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reshma Thouti â€” Portfolio",
  description: "Full-Stack Developer & CS Engineer â€” SR University",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
