import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: 'Louis Schinas Portfolio',
  description: 'Personal portfolio of Louis Schinas, Business Information Systems student',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.variable} `}>
        <main className="bg-white dark:bg-slate-900 text-neutral-800 dark:text-neutral-100 w-full overflow-x-hidden min-h-screen grid grid-flow-row gap-3 lg:gap-5 p-3 sm:p-4 md:p-5 lg:p-6 max-w-7xl mx-auto font-roboto">
        <Header />
          {children}
        </main>
      </body>
    </html>
  );
}