import { ReactNode } from "react";
import { apolloClient } from "~shared/lib/apollo";
import { ApolloProvider } from "@apollo/client";

export const Apollo = ({ children }: { children: ReactNode }) => {
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};
