import GenderAPI from "./GuessGender/GenderAPI";
import SpaceXAPI from "./SpaceX/SpaceXAPI";
import NBAAPI from "./NBA/NBAAPI";

interface MyContext {
  dataSources: {
    genderAPI: GenderAPI;
    spacexAPI: SpaceXAPI;
    nbaAPI: NBAAPI;
  };
}

export { MyContext, GenderAPI, SpaceXAPI, NBAAPI };
