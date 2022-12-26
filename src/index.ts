import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import GenderAPI from "./api/GenderAPI.js";
import SpaceXAPI from "./api/SpaceXAPI.js";
import { readFileSync } from "fs";
import { Resolvers } from "./__generated__/resolvers-types";

const typeDefs = readFileSync("./src/graphql/schema.graphql", {
  encoding: "utf-8",
});

// const resolvers = {
//   Query: {
//     getRockets: async (_, __, { dataSources }) => {
//       const response = await dataSources.spacexAPI.getRockets();
//       return response;
//     },
//     guessGender: async (_, { name }, { dataSources }) => {
//       const response = await dataSources.genderAPI.guessGender(name);
//       return response;
//     },
//   },
// };

const resolvers: Resolvers = {
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

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<MyContext>({
  resolvers,
  typeDefs,
});

const { url } = await startStandaloneServer(server, {
  context: async ({ req }) => {
    const { cache } = server;
    return {
      dataSources: {
        genderAPI: new GenderAPI({ cache }),
        spacexAPI: new SpaceXAPI(),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
