import { ApolloClient, InMemoryCache } from "@apollo/client";
import GET_ROCKETS from "./GET_ROCKETS";

export default class SpaceXAPI {
  private client;

  constructor() {
    this.client = new ApolloClient({
      uri: "https://api.spacex.land/graphql",
      cache: new InMemoryCache(),
    });
  }
  async getRockets() {
    return this.client
      .query({
        query: GET_ROCKETS,
      })
      .then((result) => console.log(result));
  }
}
