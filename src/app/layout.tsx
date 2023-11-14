import React from "react";
import StoreProvider from "store/StoreProvider";
import { ApolloWrapper } from 'serverAPI/ApolloWrapper';

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
        <StoreProvider>
            <ApolloWrapper>
                {children}
            </ApolloWrapper>
        </StoreProvider>
      </body>
    </html>
  );
}
