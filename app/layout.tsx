import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header/Header";
import ThemeAppProvider from "@/providers/ThemeProvider/ThemeProvider";
import ReduxProvider from "@/providers/ReduxProvider/ReduxProvider";
import GlobalSnackbar from "@/components/GlobalSnackbar/GlobalSnackbar";

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
  title: "DOiT MVP",
  description: "DOiT MVP Test Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <ThemeAppProvider>
            <Header />
            {children}
            <GlobalSnackbar />
          </ThemeAppProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
