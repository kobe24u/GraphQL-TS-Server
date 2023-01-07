const mutations = {
  createPlayer: async (
    _,
    { firstName, lastName, age, jerseyNum, position },
    contextValue
  ) => {
    return await contextValue.dataSources.nbaAPI.createPlayer(
      firstName,
      lastName,
      age,
      jerseyNum,
      position
    );
  },
};
const mutationDefs = `
    "the position string value should be one of the five options: ['PG', 'SG', 'SF', 'PF', 'C']"
    createPlayer(firstName: String!, lastName: String!, age: Int!, jerseyNum: Int, position: String): NBAPlayer!
`;
export { mutations, mutationDefs };
