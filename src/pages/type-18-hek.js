import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { ApolloServer } from "apollo-server-micro";
import { nextDevResolvers, typeDefs } from "../server/type-18-hek/graphql";
import { setAllowCorsHeaders } from "../server/utils";
import { json, send } from "micro";
import { OK } from "http-status";

const apolloServer = new ApolloServer({
  resolvers: nextDevResolvers,
  typeDefs,
});
const handler = apolloServer.createHandler({ path: "/type-18-hek" });

export default function Graphql(props) {
  console.log(props);
  return <Fragment/>;
}
Graphql.propTypes = {
  props: PropTypes.object,
};

/**
 * @description for /type-18-hek of micro server
 * @param {Object} context { params, req, res, query, preview, previewData }, res is node.js res
 * @returns {Object} the component props
 */
export async function getServerSideProps(context) {
  const { req, res } = context;
  setAllowCorsHeaders(res);
  if (req.method === "OPTIONS") {
    return send(res, OK);
  }
  const body = await json(req);
  console.log(`graphql body = ${JSON.stringify(body, null, 2)}`);
  await handler(req, res);
  return {
    props: {}, // will be passed to the page component as props
  };
}
