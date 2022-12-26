// import { ApolloClient, InMemoryCache } from "@apollo/client";
// import GET_ROCKETS from "./GET_ROCKETS";

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

  getRockets(): { name: string; age: number }[] {
    return [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 },
    ];
  }
}
