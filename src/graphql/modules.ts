import { GuessGender } from "./GuessGender";
import { Country } from "./Country";
import { NBA } from "./NBA";
import loadModules from "./utils/loadModules";

const modules = {
  GuessGender,
  Country,
  NBA,
};

const schema = loadModules(Object.values(modules), {});

export default schema;
