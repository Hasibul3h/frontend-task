import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "swiper/css/bundle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.scss";
import { VideoProvider } from "@/provider/VideoProvider";
import AppProvider from "@/provider/AppProvider";
import GlobalVideoModal from "@/components/utils/GlobalVideoModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rainbow Themes",
  description: "Rainbow Themes, established in 2019, is a pioneering IT solutions company specializing in WordPress, React, HTML templates, Gatsby, and CRA. With over a decade of experience, we have consistently delivered cutting-edge web development services, ensuring seamless integration and high performance for our clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <VideoProvider>
          <AppProvider>{children}</AppProvider>
          <GlobalVideoModal />
        </VideoProvider>
      </body>
    </html>
  );
}
