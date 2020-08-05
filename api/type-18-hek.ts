import { NowRequest, NowResponse } from "@vercel/node";
import { json, send } from "micro";
import { OK } from "http-status";
// import { createHandler } from "../src/server/type-18-hek/graphql";
import { setAllowCorsHeaders } from "../src/server/utils";
import nextDevResolvers from "../src/server/type-18-hek/graphql/next-dev-resolvers";
import { ApolloServer } from "apollo-server-micro";
import typeDefs from "../src/server/type-18-hek/graphql/type-defs";

Object.defineProperty(process.env, "NODE_ENV", {
  value: "production",
});

const apolloServer = new ApolloServer({
  resolvers: nextDevResolvers,
  typeDefs,
});
const handler = apolloServer.createHandler({ path: "/api/type-18-hek" });

export default async (request: NowRequest, response: NowResponse) => {
  const { query, cookies, body, method, headers } = request;
  setAllowCorsHeaders(response);
  if (method === "OPTIONS") {
    return response.status(OK).end();
  }
  // const body = req.method === "POST" ? await json(req) : {};
  // console.log(`graphql body = ${JSON.stringify(body, null, 2)}`);
  return await handler(request, response);
  // return response.status(OK).send(JSON.stringify(body, null, 2));
};
