import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers, context } from "./index";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  context
);
