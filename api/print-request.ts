import { NowRequest, NowResponse } from "@vercel/node";
import { OK } from "http-status";
import Promise from "bluebird";

export default async (request: NowRequest, response: NowResponse) => {
  const { query, cookies, body, method, headers } = request;
  await Promise.delay(1000);
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
      <pre>
        ${JSON.stringify(obj, null, 2)}
      </pre>
    </body>
  </html>`;
  return response.status(OK).send(html);
};
