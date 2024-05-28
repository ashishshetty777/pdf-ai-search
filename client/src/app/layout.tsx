import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
  
export const metadata: Metadata = {
  title: "iotric Notes",
  description: "This is a simple multi-tenant PDF QA application built using Pinecone Serverless, the Vercel AI SDK and OpenAI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white`}>{children}</body>
    </html>
  );
}
