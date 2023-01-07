import { GuessGender } from "./GuessGender";
import { SpaceX } from "./SpaceX";
import { NBA } from "./NBA";
import loadModules from "./utils/loadModules";

const modules = {
  GuessGender,
  SpaceX,
  NBA,
};

const schema = loadModules(Object.values(modules), {});

export default schema;
