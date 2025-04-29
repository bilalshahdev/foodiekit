import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { poppins } from "@/lib/fonts";
import ScrollToTop from "@/components/scroll-to-top";
import TopLoader from "@/components/top-loader";

export const metadata: Metadata = {
  title: "FoodieKitchen",
  description: "FoodieKitchen - A place for food lovers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.className} antialiased flex flex-col min-h-screen`}
      >
        <Providers>
          <TopLoader />
          <Navbar />
          <ScrollToTop />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
