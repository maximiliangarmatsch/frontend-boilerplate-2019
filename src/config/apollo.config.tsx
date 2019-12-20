// Apollo
import { ApolloLink, HttpLink, InMemoryCache } from "apollo-boost";
import { ApolloClient } from 'apollo-client';
import { onError } from "apollo-link-error";

const defaultOptions = {
  // You can use `https` for secure connection (recommended in production)
  // httpEndpoint,

  // You can use `wss` for secure connection (recommended in production)
  // Use `null` to disable subscriptions
  // wsEndpoint    : null,

  // LocalStorage token
  // tokenName     : AUTH_TOKEN,

  // Enable Automatic Query persisting with Apollo Engine
  // persisting    : false,

  // Use websockets for everything (no HTTP)
  // You need to pass a `wsEndpoint` for this to work
  // websocketsOnly: false,

  // Is being rendered on the server?
  // ssr           : false

  // Override default apollo link
  // note: don't override httpLink here, specify httpLink options in the
  // httpLinkOptions property of defaultOptions.
  // link: myLink

  // Override default cache
  // cache: myCache

  // Override the way the Authorization header is set
  // getAuth: (tokenName) => ...
  
  // Additional ApolloClient options
  // apollo: { ... }
  // Client local data (see apollo-link-state)
  // clientState: { resolvers: { ... }, defaults: { ... } }
};

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
  cache: new InMemoryCache(),
  ...defaultOptions
});
