import nextDevResolvers from "./next-dev-resolvers";
import { ApolloServer } from "apollo-server-micro";
import typeDefs from "./type-defs";

export const apolloServer = new ApolloServer({
  resolvers: nextDevResolvers,
  typeDefs,
});

export const handler = apolloServer.createHandler({ path: "/api/type-18-hek" });
