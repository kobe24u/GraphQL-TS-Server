import { RESTDataSource } from "@apollo/datasource-rest";
import { Gender } from "../__generated__/resolvers-types";

export default class GenderAPI extends RESTDataSource {
  override baseURL = "https://api.genderize.io";

  async guessGender(name: string): Promise<Gender> {
    const data = await this.get("", {
      params: {
        name: name,
      },
    });
    return data;
  }
}
