import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import GenderAPI from "./GenderAPI";
import SpaceXAPI from "./SpaceXAPI";

const typeDefs = `#graphql
  type Rocket {
    active: Boolean
    boosters: Int
    company: String
    country: String
    description: String
  }

  type Gender {
    gender: String
    name: String
    probability: Float
  }

  type Query {
    getRockets: [Rocket]
    guessGender(name: String): Gender
  }
`;

// Resolvers define how to fetch the types defined in your schema.
// This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    // getRockets: async (_, __, { dataSources }) => {
    //   const response = await dataSources.spaceAPI.getRockets();
    //   return response.data;
    // },
    guessGender: async (_, { name }, { dataSources }) => {
      const response = await dataSources.genderAPI.guessGender(name);
      return response;
    },
  },
};

interface MyContext {
  dataSources: {
    genderAPI: GenderAPI;
  };
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<MyContext>({
  resolvers,
  typeDefs,
});

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: {
        genderAPI: new GenderAPI(),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
