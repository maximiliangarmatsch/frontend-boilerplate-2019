// Apollo
import { ApolloLink, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloClient } from 'apollo-client';
import { onError } from "apollo-link-error";

export const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: "<URL>",
      credentials: "same-origin"
    })
  ]),
  cache: new InMemoryCache()
});
