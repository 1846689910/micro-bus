<h1 style="text-align:center">micro-bus</h1>

[![Build Status][travis-micro-bus]][travis-micro-bus-build]

micro web service by Vercel [micro](https://github.com/vercel/micro) + [next.js](https://github.com/vercel/next.js) + apollo + graphql, used for debug project demo and files hosting purpose.

- [Index Page](https://micro-bus.vercel.app/)

## development

- Put new api end points file in `src/pages/_api/xxx.tsx`
- use next js [`getServerSideProps(context)`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) to handle request, the reqest and response are from node.js 
  - `context.req` is instance of [http.incomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)
  - `context.res` is instance of [http.serverResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)

## production

- Put new api end points file in `api/xxx.ts`

## print request

- send query to `https://micro-bus.vercel.app/api/print-request`

[travis-micro-bus]: https://travis-ci.org/1846689910/micro-bus.svg?branch=master
[travis-micro-bus-build]: https://travis-ci.org/1846689910/micro-bus