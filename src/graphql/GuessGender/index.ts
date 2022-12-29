import { schema } from "./schema";
import { queries, queryDefs } from "./queries";
import { mutations, mutationDefs } from "./mutations";
import { resolvers } from "./resolvers";

export const GuessGender = {
  schema,
  resolvers,
  queries,
  queryDefs,
  mutations,
  mutationDefs,
};
