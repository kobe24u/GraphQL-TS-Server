import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import GenderAPI from "./api/GenderAPI";
import SpaceXAPI from "./api/SpaceXAPI";
import { Resolvers } from "./__server_generated__/resolvers-types";
import { readFileSync } from "fs";

export const typeDefs = readFileSync("./src/graphql/server-schema.graphql", {
  encoding: "utf-8",
});

export const resolvers: Resolvers = {
  Query: {
    getRockets: (_, __, contextValue) => {
      return contextValue.dataSources.spacexAPI.getRockets();
    },
    guessGender: async (_, { name }, contextValue) => {
      return await contextValue.dataSources.genderAPI.guessGender(name);
    },
  },
};

export interface MyContext {
  dataSources: {
    genderAPI: GenderAPI;
    spacexAPI: SpaceXAPI;
  };
}

export const context = {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        genderAPI: new GenderAPI({ cache }),
        spacexAPI: new SpaceXAPI(),
      },
    };
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, context);
  return url;
};

startServer().then((url) => console.log(`🚀  Server ready at: ${url}`));
