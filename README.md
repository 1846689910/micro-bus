<h1 style="text-align:center">micro-bus</h1>

[![Build Status][travis-micro-bus]][travis-micro-bus-build]

<a id="top"></a>

<h2>contents</h2>

- [Description](#description)
- [Tech Details](#tech-details)
  - [development](#development)
  - [production](#production)
- [print request](#print-request)

## Description

micro web service by Vercel [micro](https://github.com/vercel/micro) + [next.js](https://github.com/vercel/next.js) + apollo + graphql, used for debug project demo and files hosting purpose.

- **[Index Page](https://micro-bus.vercel.app/)**

[back to top](#top)

## Tech Details

- use next js [`getServerSideProps(context)`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering) to handle request, the reqest and response are from node.js 
  - `context.req` is instance of [http.incomingMessage](https://nodejs.org/api/http.html#http_class_http_incomingmessage)
  - `context.res` is instance of [http.serverResponse](https://nodejs.org/api/http.html#http_class_http_serverresponse)

[back to top](#top)

### development

- define end point resources in `src/server`
  - type definition
  - resolvers
  - profile (extending the `src/models/EndPointProfile`)
- Put new api end points file in `src/pages/_api/xxx.tsx`

[back to top](#top)

### production

- Put new api end points file in `api/xxx.ts`

[back to top](#top)

## print request

- send query to `https://micro-bus.vercel.app/api/print-request`

[back to top](#top)

[travis-micro-bus]: https://travis-ci.org/1846689910/micro-bus.svg?branch=master
[travis-micro-bus-build]: https://travis-ci.org/1846689910/micro-bus