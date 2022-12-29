import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import { ApolloServer } from "@apollo/server";
import { GenderAPI, SpaceXAPI } from "./graphql/context";
import schema from "./graphql/modules";

const lambda = new ApolloServer({
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
});

const context = {
  context: async () => {
    const { cache } = lambda;
    return {
      dataSources: {
        genderAPI: new GenderAPI({ cache }),
        spacexAPI: new SpaceXAPI(),
      },
    };
  },
};

export const graphqlHandler = startServerAndCreateLambdaHandler(
  lambda,
  context
);
