import { Rocket } from "../../__client_generated__/graphql";
import { request } from "graphql-request";
import { GetRocketsDocument } from "../graphql/client-operations";

export default class SpaceXAPI {
  async getRockets(): Promise<Rocket[]> {
    return (
      await request("https://api.spacex.land/graphql", GetRocketsDocument)
    ).rockets;
  }
}
