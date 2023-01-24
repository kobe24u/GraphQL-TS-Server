import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { MyContext, GenderAPI, CountryAPI, NBAAPI } from "./graphql/context";
import schema from "./graphql/modules";
import nbaDataSource from "./graphql/DB/Config/dbconfig";
import { writeFile } from "fs";
import { format } from "prettier";

const context = {
  context: async () => {
    const { cache } = server;
    return {
      dataSources: {
        genderAPI: new GenderAPI({ cache }),
        countryAPI: new CountryAPI(),
        nbaAPI: new NBAAPI(nbaDataSource),
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

// Aggregate schema and store in a graphql file for codegen purpose
const formattedData = format(
  schema.typeDefs.map((str) => str.trim()).join(""),
  {
    parser: "graphql",
  }
);

writeFile("src/graphql/server-schema.graphql", formattedData, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Schema saved to server-schema.graphql");
  }
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, context);
  return url;
};

// Set up our database, instantiate our connection before start the server
nbaDataSource
  .initialize()
  .then(async (dataSource) => {
    startServer().then((url) => console.log(`🚀  Server ready at: ${url}`));
  })
  .catch((error) => console.log(error));
