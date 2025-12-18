import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ciro Scatigna | Cloud & DevOps Engineer",
  description: "Portfolio professionale di Ciro Scatigna - Senior Cloud & DevOps Engineer specializzato in Kubernetes, Security e Automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-950 selection:bg-blue-100 dark:selection:bg-blue-900/30`}
      >
        {/* Elemento particolare: Tech Background Pattern */}
        <div className="fixed inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950">
          {/* Grid pattern sottile */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

          {/* Effetti Glow ambientali */}
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-10 blur-[100px] dark:opacity-20"></div>
          <div className="absolute bottom-0 left-[-20%] right-0 -z-10 m-auto h-[250px] w-[250px] rounded-full bg-emerald-500 opacity-5 blur-[80px] dark:opacity-10"></div>
        </div>

        {/* Wrapper per il contenuto */}
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}