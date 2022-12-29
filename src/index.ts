import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { MyContext, GenderAPI, SpaceXAPI } from "./graphql/context";
import schema from "./graphql/modules";

const context = {
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
  typeDefs: schema.typeDefs,
  resolvers: schema.resolvers,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, context);
  return url;
};

startServer().then((url) => console.log(`🚀  Server ready at: ${url}`));
