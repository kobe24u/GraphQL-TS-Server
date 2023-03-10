import { startServerAndCreateLambdaHandler } from "@as-integrations/aws-lambda";
import { ApolloServer } from "@apollo/server";
import { GenderAPI, CountryAPI, NBAAPI } from "./graphql/context";
import schema from "./graphql/modules";
import nbaDataSource from "./graphql/DB/Config/dbconfig";

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
        countryAPI: new CountryAPI(),
        nbaAPI: new NBAAPI(nbaDataSource),
      },
    };
  },
};

export const graphqlHandler = startServerAndCreateLambdaHandler(
  lambda,
  context
);
