// import { ApolloClient, InMemoryCache } from "@apollo/client";
import { Rocket } from "../__generated__/resolvers-types";

export default class SpaceXAPI {
  // private client;

  // constructor() {
  //   this.client = new ApolloClient({
  //     uri: "https://api.spacex.land/graphql",
  //     cache: new InMemoryCache(),
  //   });
  // }
  // async getRockets() {
  //   return this.client
  //     .query({
  //       query: GET_ROCKETS,
  //     })
  //     .then((result) => console.log(result));
  // }

  getRockets(): Rocket[] {
    return [
      {
        active: true,
        boosters: 1,
        company: "REA",
        country: "Australia",
        description: "Test",
      },
    ];
  }
}
