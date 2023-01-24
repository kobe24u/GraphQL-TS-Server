import { request } from "graphql-request";
import { GetCountryDocument } from "../client-operations";

export default class CountryAPI {
  async getCountry(countryCode: String) {
    const variables = { code: countryCode };
    return (
      await request(
        "https://countries.trevorblades.com/graphql",
        GetCountryDocument,
        variables
      )
    ).country;
  }
}
