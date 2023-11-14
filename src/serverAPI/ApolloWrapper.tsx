"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    NextSSRApolloClient,
    SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const makeClient = () => {
    const httpLink = new HttpLink({
        uri: "https://rickandmortyapi.com/graphql",
        fetchOptions: { cache: "no-store" },
    });

    return new NextSSRApolloClient({
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === "undefined"
                ? ApolloLink.from([
                    new SSRMultipartLink({
                        stripDefer: true,
                    }),
                    httpLink,
                ])
                : httpLink,
    });
}
export const ApolloWrapper = ({ children }: React.PropsWithChildren) => {
    return (
        <ApolloNextAppProvider makeClient={makeClient}>
            {children}
        </ApolloNextAppProvider>
    );
}