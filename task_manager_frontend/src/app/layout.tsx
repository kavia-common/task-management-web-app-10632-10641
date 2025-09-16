import type { Metadata } from "next";
import "./globals.css";
import "../styles/theme.css";

export const metadata: Metadata = {
  title: "Foodgo | Ocean Professional",
  description: "Playful task/food manager interface with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
