# GraphQL Server

This is a GraphQL server built using latest `Apollo Server V4`, `Typescript` and `Node.js`.
Some of the tools used in this project including

- `graphql-codegen` to generate TypeScript types for the GraphQL types in a schema. This can help improve the type safety and developer experience when working with a GraphQL API.
- `graphql-request` to help fetch data from other GraphQL APIs.
- `@apollo/datasource-rest` to help fetch data from REST APIs and helps handle caching.
- `prettier` for linting purpose.
- `nodemon` to hotreload Node.js application when detecting changes in the source code.
- `ts-node` to run TypeScript code directly without needing to compile it to JavaScript.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone this repository
2. Navigate to the project directory
3. Install the dependencies by running `npm install`
4. Generate all typescript files by running `npm run prepare`

### Running the Server

To start the server in development mode, run `npm run start:dev`. This will start the server with hot reloading enabled using `nodemon`, so any changes you make to the code will be reflected in the running server.

To start the server in production mode, run `npm run start`. This will build the server and start it without hot reloading.

### Available Scripts

- `npm run start:dev`: starts the server in development mode with hot reloading enabled
- `npm run start`: builds and starts the server in production mode
- `npm run compile`: compile the Typescript files into Javascript files
- `npm run format`: format all ts, js and json files using prettier
- `npm run codegen-server`: only generate the needed TypeScript types for the GraphQL schema as a GraphQL server
- `npm run codegen-client`: only generate the needed TypeScript types for the GraphQL schema as a GraphQL client
- `npm run prepare`: generate all needed TypeScript types for the GraphQL schema using graphql-codegen.

### GraphQL Playground

To access the GraphQL Playground, go to `http://localhost:4000/graphql` in your web browser.

## License

This project is licensed under the [INSERT LICENSE NAME HERE] License - see the [LICENSE](./license.md) file for details.
