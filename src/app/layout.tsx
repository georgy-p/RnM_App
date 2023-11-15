import React from "react";
import StoreProvider from "store/StoreProvider";
import { Metadata } from "next";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Rick&Morty App",
  description: "Helps you to find episodes",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ru'>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body suppressHydrationWarning={true}>
        <StoreProvider>
          <Header />
          <main>
            <div className='container'>{children}</div>
          </main>
          <Footer />
        </StoreProvider>
      </body>
    </html>
  );
}
