import GenderAPI from "./GuessGender/GenderAPI";
import CountryAPI from "./Country/CountryAPI";
import NBAAPI from "./NBA/NBAAPI";

interface MyContext {
  dataSources: {
    genderAPI: GenderAPI;
    countryAPI: CountryAPI;
    nbaAPI: NBAAPI;
  };
}

export { MyContext, GenderAPI, CountryAPI, NBAAPI };
