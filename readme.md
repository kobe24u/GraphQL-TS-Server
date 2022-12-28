# GraphQL Server

This is a GraphQL server built using latest `Apollo Server V4`, `Typescript` and `Node.js`.
Some of the tools used in this project including

- `Serverless` for building and deploying serverless applications to cloud platform like AWS Lambda.
- `@as-integrations/aws-lambda` helps you to integrate your Apollo Server with AWS Lambda functions.
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
- Serverless
- AWS CLI

### Installation

1. Clone this repository
2. Navigate to the project directory
3. Install the dependencies by running `npm install`
4. Generate all typescript files by running `npm run prepare`
5. After `AWS Configure`, deploy the server by running `serverless deploy`, you can specify the stage and region by attaching params like so `serverless deploy --stage production --region ap-southeast-2`

### Running the Server

To start the server in development mode, run `npm run start:dev`. This will start the server with hot reloading enabled using `nodemon`, so any changes you make to the code will be reflected in the running server.

To start the server in production mode, run `npm run start`. This will build the server and start it without hot reloading.

### Use the mockquery provided to test before deployment

Before deploying, we can use the Serverless CLI to invoke our handler locally to ensure everything is working. We'll do this by mocking an HTTP request with a GraphQL operation. A `mockquery.json` file has been provided.
Simply run `serverless invoke local -f graphql -p mockquery.json`, if you see some response in the console like this. Congrats, you're good to go!

```
{
    "statusCode": 200,
    "headers": {
        "cache-control": "no-store",
        "content-type": "application/json; charset=utf-8",
        "content-length": "110"
    },
    "body": "{\"data\":{\"getRockets\":[{\"company\":\"SpaceX\"},{\"company\":\"SpaceX\"},{\"company\":\"SpaceX\"},{\"company\":\"SpaceX\"}]}}\n"
}
```

### Available Scripts

- `npm run sls-offline`: run your Serverless Framework service locally. It allows you to simulate the AWS Lambda and Amazon API Gateway environment locally and test your serverless functions without having to deploy them to the cloud.
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

This project is licensed under the [MIT] License - see the [LICENSE](./license.md) file for details.
