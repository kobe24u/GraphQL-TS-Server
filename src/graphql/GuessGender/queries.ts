const queries = {
  guessGender: async (_, { name }, contextValue) => {
    return await contextValue.dataSources.genderAPI.guessGender(name);
  },
};

const queryDefs = `
    guessGender(name: String): Gender
`;

export { queries, queryDefs };
