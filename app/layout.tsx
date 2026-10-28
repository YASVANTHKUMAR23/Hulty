import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hulty — We craft the future dwelling",
  description:
    "We can bring to life everything you’ve ever envisioned and dreamed of – your ideals and desires are our creations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">
        <div className="page-root mx-auto w-full max-w-[1920px]">{children}</div>
      </body>
    </html>
  );
}
