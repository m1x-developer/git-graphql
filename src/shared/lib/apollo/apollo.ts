import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
  },
});
