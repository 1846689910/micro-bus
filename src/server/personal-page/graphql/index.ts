import nextDevResolvers from "./next-dev-resolvers";
import { ApolloServer } from "apollo-server-micro";
import typeDefs from "./type-defs";
import profile from "../profile";

export const apolloServer = new ApolloServer({
  resolvers: nextDevResolvers,
  typeDefs,
  introspection: true,
  playground: true,
});

export const handler = apolloServer.createHandler({ path: profile.api });
