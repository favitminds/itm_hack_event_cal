import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from "@apollo/client/core";
import { getOperationAST } from "graphql";

const cache = new InMemoryCache({
  addTypename: true,
});

export default new ApolloClient({
  cache,
  uri: "http://localhost:4000",
  connectToDevTools: true,
});
