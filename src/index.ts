import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import GenderAPI from "./api/GenderAPI.js";
import SpaceXAPI from "./api/SpaceXAPI.js";

const typeDefs = `#graphql
  type Rocket {
    active: Boolean
    boosters: Int
    company: String
    country: String
    description: String
  }

  type Person {
    name: String
    age: Int
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
    getRockets: async (_, __, { dataSources }) => {
      const response = await dataSources.spacexAPI.getRockets();
      return response;
    },
    guessGender: async (_, { name }, { dataSources }) => {
      const response = await dataSources.genderAPI.guessGender(name);
      return response;
    },
  },
};

interface MyContext {
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
  context: async () => {
    return {
      dataSources: {
        genderAPI: new GenderAPI(),
        spacexAPI: new SpaceXAPI(),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);
