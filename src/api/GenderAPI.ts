import { RESTDataSource } from "@apollo/datasource-rest";

class Gender {
  name: string;
  gender: "male" | "female";
  probability: number;

  constructor(name: string, gender: "male" | "female", probability: number) {
    this.name = name;
    this.gender = gender;
    this.probability = probability;
  }
}

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
