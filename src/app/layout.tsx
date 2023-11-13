import React from "react";
import StoreProvider from "store/StoreProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <title>Rick&Morty App</title>
      </head>
      <body suppressHydrationWarning={true}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
