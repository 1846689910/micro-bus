import { NowRequest, NowResponse } from "@vercel/node";
import { OK } from "http-status";
import { setAllowCorsHeaders } from "../src/server/utils";

export default async (request: NowRequest, response: NowResponse) => {
  const { query, cookies, body, method, headers } = request;
  setAllowCorsHeaders(response);
  const obj = {
    request: {
      headers,
      query,
      cookies,
      body,
      method,
    },
    "process.env.NODE_ENV": process.env.NODE_ENV,
  };
  const html = `
  <html>
    <body>
      <pre>${JSON.stringify(obj, null, 2)}
      </pre>
    </body>
  </html>`;
  return response.status(OK).send(html);
};
