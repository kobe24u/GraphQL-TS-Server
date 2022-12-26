import { RESTDataSource } from "@apollo/datasource-rest";
import { Gender } from "../__generated__/resolvers-types";
import type { KeyValueCache } from "@apollo/utils.keyvaluecache";

export default class GenderAPI extends RESTDataSource {
  override baseURL = "https://api.genderize.io";

  constructor(options: { cache: KeyValueCache }) {
    super(options); // this sends our server's `cache` through

    // Uncomment this line to disable caching if that's really what you want
    // this.memoizeGetRequests = false;
  }

  async guessGender(name: string) {
    return await this.get("", {
      params: {
        name: name,
      },
    });
    // return data;
  }
}
