import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Tooltip, TooltipProvider } from "@radix-ui/react-tooltip";
import { ThemeProvider } from "@/components/theme-provider"; 

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >

        <ThemeProvider attribute="class" defaultTheme="light">

      <TooltipProvider delayDuration={0}>{children}</TooltipProvider>    
        </ThemeProvider>
        
      </body>
    </html>
  );
}