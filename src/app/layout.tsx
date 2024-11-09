import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Footer } from "@/components/footer";
import localFont from "next/font/local";
import "./globals.css";

// UI
import { ModeToggle } from "@/components/theme-toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "A shadcn/ui country dropdown",
  description:
    "An ISO 3166 compliant dropdown component for selecting a country.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex justify-start items-start h-full min-h-svh px-4">
            <div className="flex justify-end fixed inset-x-0 top-0 w-full p-4 bg-background/80 backdrop-blur-md z-10">
              <ModeToggle />
            </div>
            <div className="container mx-auto pt-[68px] pb-8 max-w-screen-md">
              {children}
            </div>
          </div>
          <Footer />
          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
