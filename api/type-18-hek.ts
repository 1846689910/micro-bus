import { NowRequest, NowResponse } from "@vercel/node";
import { OK } from "http-status";
import { setAllowCorsHeaders } from "../src/server/utils";
import nextDevResolvers from "../src/server/type-18-hek/graphql/next-dev-resolvers";
import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../src/server/type-18-hek/graphql/type-defs";

const apolloServer = new ApolloServer({
  resolvers: nextDevResolvers,
  typeDefs,
  introspection: true,
  playground: true,
});
const handler = apolloServer.createHandler({ path: "/api/type-18-hek" });

export default async (request: NowRequest, response: NowResponse) => {
  const { method } = request;
  setAllowCorsHeaders(response);
  if (method === "OPTIONS") {
    return response.status(OK).end();
  }
  await handler(request, response);
};
