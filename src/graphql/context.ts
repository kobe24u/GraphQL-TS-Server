import GenderAPI from "./GuessGender/GenderAPI";
import SpaceXAPI from "./SpaceX/SpaceXAPI";

interface MyContext {
  dataSources: {
    genderAPI: GenderAPI;
    spacexAPI: SpaceXAPI;
  };
}

export { MyContext, GenderAPI, SpaceXAPI };
