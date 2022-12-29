import { GuessGender } from "./GuessGender";
import { SpaceX } from "./SpaceX";
import loadModules from "./utils/loadModules";

const modules = {
  GuessGender,
  SpaceX,
};

const schema = loadModules(Object.values(modules), {});

export default schema;
