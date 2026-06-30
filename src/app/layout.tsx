import type { Metadata } from "next";
import { Space_Grotesk, Archivo } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vishal V S | Full-Stack & Cybersecurity Engineer Portfolio",
  description: "Personal engineering portfolio of Vishal V S. Full-Stack Developer, Certified Ethical Hacker (CEH), AI & Automation developer, and Embedded Systems/IoT engineer building high-integrity systems.",
  keywords: ["Vishal V S", "Portfolio", "Full Stack Developer", "Cybersecurity Engineer", "Certified Ethical Hacker", "CEH", "IoT", "ESP32", "Next.js", "React", "AI Developer"],
  authors: [{ name: "Vishal V S" }],
  creator: "Vishal V S",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vishalvijay.dev", // hypothetical domain, fits OgTags spec
    title: "Vishal V S | Full-Stack & Cybersecurity Engineer Portfolio",
    description: "Systems developer building end-to-end security and full stack automation pipelines. Published conference author and CTF competitor.",
    siteName: "Vishal V S Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${archivo.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


